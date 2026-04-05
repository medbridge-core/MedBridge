import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use("*", cors());
app.use("*", logger(console.log));

// Health check endpoint
app.get("/make-server-3079ee5f/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Supabase client using service-role key (server-side only)
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Helper function to parse budget range into min and max
function parseBudget(budgetRange: string): { min: number; max: number } {
  const value = (budgetRange ?? "").trim();

  const budgetMap: Record<string, { min: number; max: number }> = {
    "Under ₹4,00,000": { min: 0, max: 400000 },
    "₹4,00,000 - ₹8,00,000": { min: 400000, max: 800000 },
    "₹8,00,000 - ₹16,00,000": { min: 800000, max: 1600000 },
    "₹16,00,000 - ₹40,00,000": { min: 1600000, max: 4000000 },
    "Over ₹40,00,000": { min: 4000000, max: 99999999 },
  };

  if (budgetMap[value]) {
    return budgetMap[value];
  }

  // Fallback: no restriction on budget if we don't recognise the option
  console.log("Unknown budget range value, using wide range:", value);
  return { min: 0, max: 99999999 };
}

// Submit form endpoint
app.post("/make-server-3079ee5f/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { name, age, country, phoneNumber, budget, locationPreference, treatmentDetails } =
      body;

    // Validate required fields
    if (
      !name ||
      !age ||
      !country ||
      !budget ||
      !locationPreference ||
      !treatmentDetails
    ) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Parse budget range
    const { min: budget_min, max: budget_max } = parseBudget(budget);

    // Insert into user_requests table
    const { data: insertData, error: insertError } = await supabase
      .from("user_requests")
      .insert({
        name,
        age: parseInt(String(age), 10),
        country,
        phone_number: phoneNumber || null,
        budget_min,
        budget_max,
        location_preference: locationPreference,
        treatment_details: treatmentDetails,
      })
      .select()
      .single();

    if (insertError) {
      console.log(
        `Error inserting into user_requests table: ${insertError.message}`,
      );
      return c.json(
        { error: `Failed to submit form: ${insertError.message}` },
        500,
      );
    }

    console.log(`Form submitted successfully: ${insertData.id}`);

    // Call match_hospitals RPC using supabase-js (service role)
    console.log("Calling match_hospitals with params:", {
      p_location: locationPreference,
      p_budget_min: budget_min,
      p_budget_max: budget_max,
      p_treatment: treatmentDetails,
    });

    const { data: hospitals, error: rpcError } = await supabase.rpc(
      "match_hospitals",
      {
        p_location: locationPreference,
        p_budget_min: budget_min,
        p_budget_max: budget_max,
        p_treatment: treatmentDetails,
      },
    );

    if (rpcError) {
      console.log("Error calling match_hospitals RPC:", rpcError.message);
      return c.json({
        success: true,
        message: "Form submitted successfully",
        submissionId: insertData.id,
        hospitals: [],
      });
    }

    console.log(
      "Hospitals returned from RPC:",
      hospitals,
      "count:",
      hospitals?.length ?? 0,
    );
    
    // Log first hospital to see structure
    if (hospitals && hospitals.length > 0) {
      console.log("First hospital structure:", JSON.stringify(hospitals[0], null, 2));
    }

    return c.json({
      success: true,
      message: "Form submitted successfully",
      submissionId: insertData.id,
      hospitals: hospitals ?? [],
    });
  } catch (error) {
    console.log(`Error submitting form: ${error}`);
    return c.json({ error: `Failed to submit form: ${error}` }, 500);
  }
});

// Get all submissions endpoint
app.get("/make-server-3079ee5f/submissions", async (c) => {
  try {
    const { data, error } = await supabase
      .from("user_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(`Error fetching submissions: ${error.message}`);
      return c.json(
        { error: `Failed to fetch submissions: ${error.message}` },
        500,
      );
    }

    return c.json({ submissions: data });
  } catch (error) {
    console.log(`Error fetching submissions: ${error}`);
    return c.json({ error: `Failed to fetch submissions: ${error}` }, 500);
  }
});

// Get distinct hospitals for search
app.get("/make-server-3079ee5f/hospitals", async (c) => {
  try {
    const search = c.req.query("search") || "";
    
    // Fetch rows from hospital_treatments
    const { data, error } = await supabase
      .from("hospital_treatments")
      .select("*")
      .limit(500);
    
    if (error) {
      console.log(`Error fetching hospital_treatments: ${error.message}`);
      return c.json({ error: `Failed to query hospital_treatments: ${error.message}`, hospitals: [] }, 500);
    }

    // Log columns and first row for debugging
    if (data && data.length > 0) {
      console.log("hospital_treatments columns:", Object.keys(data[0]));
      console.log("hospital_treatments first row:", JSON.stringify(data[0], null, 2));
    } else {
      console.log("hospital_treatments returned 0 rows");
    }

    // Try to find the hospital name column dynamically
    const rows = data ?? [];
    const firstRow = rows[0] || {};
    const columns = Object.keys(firstRow);
    
    // Guess the hospital name column
    const nameCol = columns.find(c => /hospital.*name/i.test(c)) 
      || columns.find(c => /^name$/i.test(c))
      || columns.find(c => /hospital/i.test(c) && typeof firstRow[c] === 'string')
      || columns[0];
    
    // Guess the city column
    const cityCol = columns.find(c => /^city$/i.test(c))
      || columns.find(c => /location/i.test(c) && typeof firstRow[c] === 'string')
      || "";

    console.log(`Using nameCol="${nameCol}", cityCol="${cityCol}"`);

    // Deduplicate by hospital name, optionally filter by search
    const hospitalMap = new Map<string, any>();
    rows.forEach((row: any) => {
      const name = String(row[nameCol] || "").trim();
      const city = cityCol ? String(row[cityCol] || "").trim() : "";
      if (!name) return;
      if (search && !name.toLowerCase().includes(search.toLowerCase())) return;
      if (!hospitalMap.has(name)) {
        hospitalMap.set(name, { name, city });
      }
    });
    const hospitals = Array.from(hospitalMap.values());
    hospitals.sort((a: any, b: any) => a.name.localeCompare(b.name));
    console.log(`Returning ${hospitals.length} hospitals`);
    return c.json({ hospitals });
  } catch (error) {
    console.log(`Error fetching hospitals: ${error}`);
    return c.json({ error: `Failed to fetch hospitals: ${error}`, hospitals: [] }, 500);
  }
});

// Get distinct cities for search
app.get("/make-server-3079ee5f/cities", async (c) => {
  try {
    const search = c.req.query("search") || "";
    
    const { data, error } = await supabase
      .from("hospital_treatments")
      .select("*")
      .limit(500);
    
    if (error) {
      console.log(`Error fetching hospital_treatments for cities: ${error.message}`);
      return c.json({ error: `Failed to fetch cities: ${error.message}`, cities: [] }, 500);
    }

    const rows = data ?? [];
    const firstRow = rows[0] || {};
    const columns = Object.keys(firstRow);
    
    const cityCol = columns.find(c => /^city$/i.test(c))
      || columns.find(c => /location/i.test(c) && typeof firstRow[c] === 'string')
      || "";
    
    console.log(`Cities using cityCol="${cityCol}"`);

    if (!cityCol) {
      console.log("No city column found. Available columns:", columns);
      return c.json({ cities: [] });
    }

    const citySet = new Set<string>();
    rows.forEach((row: any) => {
      const city = String(row[cityCol] || "").trim();
      if (!city) return;
      if (search && !city.toLowerCase().includes(search.toLowerCase())) return;
      citySet.add(city);
    });
    const cities = Array.from(citySet).sort().map((city) => ({ city }));
    console.log(`Returning ${cities.length} cities`);
    return c.json({ cities });
  } catch (error) {
    console.log(`Error fetching cities: ${error}`);
    return c.json({ error: `Failed to fetch cities: ${error}`, cities: [] }, 500);
  }
});

// ============================================================
// Cart Submit - Links services to a user_request (new or existing)
// Uses email + phone to identify existing users. No duplication.
// Services stored in KV: key = "user_services:{user_request_id}"
// ============================================================
app.post("/make-server-3079ee5f/cart/submit", async (c) => {
  try {
    const body = await c.req.json();
    const { userInfo, services } = body;

    if (!services || !Array.isArray(services) || services.length === 0) {
      return c.json({ error: "Cart must have at least one service" }, 400);
    }
    if (!userInfo || (!userInfo.email && !userInfo.phone)) {
      return c.json({ error: "Email or phone is required to identify the user" }, 400);
    }
    if (!userInfo.name) {
      return c.json({ error: "Name is required" }, 400);
    }

    const { name, email, phone, age, country, budget, locationPreference, treatmentDetails, submissionId } = userInfo;

    let userRequestId = submissionId || null;
    let userRecord: any = null;

    // 1. If we already have a submissionId from the homepage form, verify it exists
    if (userRequestId) {
      const { data, error } = await supabase
        .from("user_requests")
        .select("*")
        .eq("id", userRequestId)
        .single();
      if (!error && data) {
        userRecord = data;
        console.log(`Found existing user_request by submissionId: ${userRequestId}`);
      } else {
        console.log(`SubmissionId ${userRequestId} not found, will search by email/phone`);
        userRequestId = null;
      }
    }

    // 2. If no valid submissionId, try to find by email or phone (most recent)
    if (!userRequestId) {
      // Try email first (more reliable identifier)
      if (email) {
        const { data } = await supabase
          .from("user_requests")
          .select("*")
          .eq("email", email)
          .order("created_at", { ascending: false })
          .limit(1);
        if (data && data.length > 0) {
          userRecord = data[0];
          userRequestId = userRecord.id;
          console.log(`Found existing user_request by email ${email}: ${userRequestId}`);
        }
      }
      // Try phone if email didn't match
      if (!userRequestId && phone) {
        const { data } = await supabase
          .from("user_requests")
          .select("*")
          .eq("phone_number", phone)
          .order("created_at", { ascending: false })
          .limit(1);
        if (data && data.length > 0) {
          userRecord = data[0];
          userRequestId = userRecord.id;
          console.log(`Found existing user_request by phone ${phone}: ${userRequestId}`);
        }
      }
    }

    // 3. If still no user found, create a new user_request
    if (!userRequestId) {
      console.log("No existing user found, creating new user_request");
      const budgetParsed = budget ? parseBudget(budget) : { min: 0, max: 99999999 };
      
      const insertPayload: any = {
        name,
        phone_number: phone || null,
        email: email || null,
      };
      // Only set optional fields if provided
      if (age) insertPayload.age = parseInt(String(age), 10);
      if (country) insertPayload.country = country;
      if (budget) {
        insertPayload.budget_min = budgetParsed.min;
        insertPayload.budget_max = budgetParsed.max;
      }
      if (locationPreference) insertPayload.location_preference = locationPreference;
      if (treatmentDetails) insertPayload.treatment_details = treatmentDetails;

      const { data: newUser, error: insertErr } = await supabase
        .from("user_requests")
        .insert(insertPayload)
        .select()
        .single();

      if (insertErr) {
        console.log(`Error creating user_request: ${insertErr.message}`);
        // If email column doesn't exist, try without it
        if (insertErr.message.includes("email")) {
          console.log("Retrying without email column...");
          delete insertPayload.email;
          const { data: retry, error: retryErr } = await supabase
            .from("user_requests")
            .insert(insertPayload)
            .select()
            .single();
          if (retryErr) {
            return c.json({ error: `Failed to create user: ${retryErr.message}` }, 500);
          }
          userRecord = retry;
          userRequestId = retry.id;
        } else {
          return c.json({ error: `Failed to create user: ${insertErr.message}` }, 500);
        }
      } else {
        userRecord = newUser;
        userRequestId = newUser.id;
      }
      console.log(`Created new user_request: ${userRequestId}`);
    }

    // 4. Store services in KV linked to this user_request_id
    const kvKey = `user_services:${userRequestId}`;
    
    // Get any existing services for this user (in case they add more later)
    const existingRaw = await kv.get(kvKey);
    let existingServices: any[] = [];
    if (existingRaw) {
      try { existingServices = JSON.parse(existingRaw); } catch { existingServices = []; }
    }

    // Merge: add new services, avoid duplicates by service id
    const existingIds = new Set(existingServices.map((s: any) => s.id));
    const newServices = services.filter((s: any) => !existingIds.has(s.id));
    const allServices = [...existingServices, ...newServices];

    await kv.set(kvKey, JSON.stringify(allServices));
    console.log(`Stored ${allServices.length} services for user_request ${userRequestId} (${newServices.length} new)`);

    // 5. Also store a reverse lookup: email/phone -> user_request_id
    if (email) await kv.set(`user_lookup:email:${email.toLowerCase()}`, userRequestId);
    if (phone) await kv.set(`user_lookup:phone:${phone}`, userRequestId);

    return c.json({
      success: true,
      userRequestId,
      servicesCount: allServices.length,
      message: `Cart submitted successfully with ${allServices.length} services`,
    });
  } catch (error) {
    console.log(`Error submitting cart: ${error}`);
    return c.json({ error: `Failed to submit cart: ${error}` }, 500);
  }
});

// Get services for a user_request
app.get("/make-server-3079ee5f/cart/services/:userRequestId", async (c) => {
  try {
    const userRequestId = c.req.param("userRequestId");
    const kvKey = `user_services:${userRequestId}`;
    const raw = await kv.get(kvKey);
    const services = raw ? JSON.parse(raw) : [];
    return c.json({ services, userRequestId });
  } catch (error) {
    console.log(`Error fetching cart services: ${error}`);
    return c.json({ error: `Failed to fetch services: ${error}` }, 500);
  }
});

// ============================================================
// Public Services endpoints (used by frontend AllServices page)
// ============================================================
app.post("/make-server-3079ee5f/services/seed", async (c) => {
  try {
    const existing = await kv.get("services:catalog");
    if (existing) {
      const parsed = typeof existing === "string" ? JSON.parse(existing) : existing;
      if (parsed && parsed.length > 0) {
        return c.json({ message: "Services already seeded", count: parsed.length });
      }
    }

    const defaultServices = [
      { id: "medical-visa", category: "pre-arrival", title: "Medical Visa", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "medical-visa", price_label: "From", availability: true, sort_order: 1 },
      { id: "med-x-visa", category: "pre-arrival", title: "Med X Visa", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "med-x-visa", price_label: "Starting from", availability: true, sort_order: 2 },
      { id: "flight-tickets", category: "pre-arrival", title: "Flight Tickets", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "flight-tickets", price_label: "Starting from", availability: true, sort_order: 3 },
      { id: "accommodation", category: "on-arrival", title: "Accommodation", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "accommodation", price_label: "From", availability: true, sort_order: 4 },
      { id: "airport-pickup-drop", category: "on-arrival", title: "Airport Pickup & Drop", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "airport-pickup-drop", price_label: "From", availability: true, sort_order: 5 },
      { id: "sim-internet", category: "on-arrival", title: "SIM / Internet", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "sim-internet", price_label: "From", availability: true, sort_order: 6 },
      { id: "in-hospital-liaison", category: "during-treatment", title: "In Hospital Liaison", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "in-hospital-liaison", price_label: "From", availability: true, sort_order: 7 },
      { id: "local-transport", category: "during-treatment", title: "Local Transport /- Day", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "local-transport", price_label: "From", availability: true, sort_order: 8 },
      { id: "food", category: "during-treatment", title: "Food", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "food", price_label: "From", availability: true, sort_order: 9 },
      { id: "translator", category: "post-treatment", title: "Translator /- Day", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "translator", price_label: "From", availability: true, sort_order: 10 },
      { id: "caregivers", category: "post-treatment", title: "Caregivers", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "caregivers", price_label: "From", availability: true, sort_order: 11 },
      { id: "dietician", category: "post-treatment", title: "Dietician", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "dietician", price_label: "From", availability: true, sort_order: 12 },
      { id: "rehabilitation-center", category: "post-treatment", title: "Rehabilitation Center", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "rehabilitation-center", price_label: "From", availability: true, sort_order: 13 },
      { id: "foreign-exchange", category: "post-treatment", title: "Foreign Exchange", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "foreign-exchange", price_label: "From", availability: true, sort_order: 14 },
      { id: "insurance-assistance", category: "post-treatment", title: "Insurance Assistance", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "insurance-assistance", price_label: "From", availability: true, sort_order: 15 },
    ];

    const keys = defaultServices.map(s => `service:${s.id}`);
    const values = defaultServices.map(s => JSON.stringify(s));
    await kv.mset(keys, values);
    await kv.set("services:catalog", JSON.stringify(defaultServices.map(s => s.id)));
    console.log(`Seeded ${defaultServices.length} services into KV store`);
    return c.json({ success: true, count: defaultServices.length });
  } catch (error) {
    console.log(`Error seeding services: ${error}`);
    return c.json({ error: `${error}` }, 500);
  }
});

app.get("/make-server-3079ee5f/services", async (c) => {
  try {
    const catalog = await kv.get("services:catalog");
    if (!catalog) return c.json({ services: [] });
    const ids: string[] = typeof catalog === "string" ? JSON.parse(catalog) : catalog;
    const keys = ids.map((id: string) => `service:${id}`);
    const values = await kv.mget(keys);
    const services = values
      .map((v: any) => { if (!v) return null; return typeof v === "string" ? JSON.parse(v) : v; })
      .filter((s: any) => s !== null && s.availability === true)
      .sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
    return c.json({ services });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// ============================================================
// ADMIN ENDPOINTS
// ============================================================

// Force seed services (deletes existing and re-seeds)
app.post("/make-server-3079ee5f/admin/services/force-seed", async (c) => {
  try {
    // Delete existing catalog and all service keys
    const existingCatalog = await kv.get("services:catalog");
    if (existingCatalog) {
      const ids: string[] = typeof existingCatalog === "string" ? JSON.parse(existingCatalog) : existingCatalog;
      if (ids && ids.length > 0) {
        const keys = ids.map((id: string) => `service:${id}`);
        await kv.mdel(keys);
      }
      await kv.del("services:catalog");
    }

    const defaultServices = [
      { id: "medical-visa", category: "pre-arrival", title: "Medical Visa", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "medical-visa", price_label: "From", availability: true, sort_order: 1 },
      { id: "med-x-visa", category: "pre-arrival", title: "Med X Visa", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "med-x-visa", price_label: "Starting from", availability: true, sort_order: 2 },
      { id: "flight-tickets", category: "pre-arrival", title: "Flight Tickets", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "flight-tickets", price_label: "Starting from", availability: true, sort_order: 3 },
      { id: "accommodation", category: "on-arrival", title: "Accommodation", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "accommodation", price_label: "From", availability: true, sort_order: 4 },
      { id: "airport-pickup-drop", category: "on-arrival", title: "Airport Pickup & Drop", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "airport-pickup-drop", price_label: "From", availability: true, sort_order: 5 },
      { id: "sim-internet", category: "on-arrival", title: "SIM / Internet", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "sim-internet", price_label: "From", availability: true, sort_order: 6 },
      { id: "in-hospital-liaison", category: "during-treatment", title: "In Hospital Liaison", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "in-hospital-liaison", price_label: "From", availability: true, sort_order: 7 },
      { id: "local-transport", category: "during-treatment", title: "Local Transport /- Day", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "local-transport", price_label: "From", availability: true, sort_order: 8 },
      { id: "food", category: "during-treatment", title: "Food", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "food", price_label: "From", availability: true, sort_order: 9 },
      { id: "translator", category: "post-treatment", title: "Translator /- Day", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "translator", price_label: "From", availability: true, sort_order: 10 },
      { id: "caregivers", category: "post-treatment", title: "Caregivers", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "caregivers", price_label: "From", availability: true, sort_order: 11 },
      { id: "dietician", category: "post-treatment", title: "Dietician", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "dietician", price_label: "From", availability: true, sort_order: 12 },
      { id: "rehabilitation-center", category: "post-treatment", title: "Rehabilitation Center", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "rehabilitation-center", price_label: "From", availability: true, sort_order: 13 },
      { id: "foreign-exchange", category: "post-treatment", title: "Foreign Exchange", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "foreign-exchange", price_label: "From", availability: true, sort_order: 14 },
      { id: "insurance-assistance", category: "post-treatment", title: "Insurance Assistance", description: "Comfy Ride from airport to hotel", amount: 4000, image_key: "insurance-assistance", price_label: "From", availability: true, sort_order: 15 },
    ];

    const keys = defaultServices.map(s => `service:${s.id}`);
    const values = defaultServices.map(s => JSON.stringify(s));
    await kv.mset(keys, values);
    await kv.set("services:catalog", JSON.stringify(defaultServices.map(s => s.id)));
    console.log(`Force-seeded ${defaultServices.length} services`);
    return c.json({ success: true, count: defaultServices.length });
  } catch (error) {
    console.log(`Error force-seeding services: ${error}`);
    return c.json({ error: `${error}` }, 500);
  }
});

// --- HOSPITAL TREATMENTS ---
app.get("/make-server-3079ee5f/admin/hospital-treatments", async (c) => {
  try {
    const { data, error } = await supabase
      .from("hospital_treatments")
      .select("*")
      .order("id", { ascending: true })
      .limit(500);
    if (error) {
      console.log(`Error fetching hospital_treatments: ${error.message}`);
      return c.json({ error: error.message }, 500);
    }
    return c.json({ data: data ?? [] });
  } catch (error) {
    console.log(`Error in admin hospital-treatments GET: ${error}`);
    return c.json({ error: `${error}` }, 500);
  }
});

app.post("/make-server-3079ee5f/admin/hospital-treatments", async (c) => {
  try {
    const body = await c.req.json();
    const { data, error } = await supabase
      .from("hospital_treatments")
      .insert(body)
      .select()
      .single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.put("/make-server-3079ee5f/admin/hospital-treatments/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    delete body.id; // don't overwrite primary key
    const { data, error } = await supabase
      .from("hospital_treatments")
      .update(body)
      .eq("id", id)
      .select()
      .single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.delete("/make-server-3079ee5f/admin/hospital-treatments/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase
      .from("hospital_treatments")
      .delete()
      .eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// --- SERVICES (all, including unavailable) ---
app.get("/make-server-3079ee5f/admin/services", async (c) => {
  try {
    const catalog = await kv.get("services:catalog");
    if (!catalog) return c.json({ services: [] });
    const ids: string[] = typeof catalog === "string" ? JSON.parse(catalog) : catalog;
    const keys = ids.map((id: string) => `service:${id}`);
    const values = await kv.mget(keys);
    const services = values
      .map((v: any) => { if (!v) return null; return typeof v === "string" ? JSON.parse(v) : v; })
      .filter((s: any) => s !== null)
      .sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
    return c.json({ services });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.post("/make-server-3079ee5f/admin/services", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.id || !body.title || !body.category) {
      return c.json({ error: "id, title, and category are required" }, 400);
    }
    const kvKey = `service:${body.id}`;
    const existing = await kv.get(kvKey);
    if (existing) return c.json({ error: `Service '${body.id}' already exists` }, 409);

    const service = {
      id: body.id,
      category: body.category,
      title: body.title,
      description: body.description || "",
      amount: body.amount || 0,
      image_key: body.image_key || body.id,
      price_label: body.price_label || "From",
      availability: body.availability !== false,
      sort_order: body.sort_order || 99,
    };
    await kv.set(kvKey, JSON.stringify(service));

    // Update catalog
    const catalog = await kv.get("services:catalog");
    const ids: string[] = catalog ? (typeof catalog === "string" ? JSON.parse(catalog) : catalog) : [];
    if (!ids.includes(body.id)) {
      ids.push(body.id);
      await kv.set("services:catalog", JSON.stringify(ids));
    }
    return c.json({ success: true, service });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.put("/make-server-3079ee5f/admin/services/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const updates = await c.req.json();
    const kvKey = `service:${id}`;
    const existing = await kv.get(kvKey);
    if (!existing) return c.json({ error: `Service '${id}' not found` }, 404);
    const service = typeof existing === "string" ? JSON.parse(existing) : existing;
    const updated = { ...service, ...updates, id };
    await kv.set(kvKey, JSON.stringify(updated));
    return c.json({ success: true, service: updated });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.delete("/make-server-3079ee5f/admin/services/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`service:${id}`);
    const catalog = await kv.get("services:catalog");
    const ids: string[] = catalog ? (typeof catalog === "string" ? JSON.parse(catalog) : catalog) : [];
    const newIds = ids.filter((i: string) => i !== id);
    await kv.set("services:catalog", JSON.stringify(newIds));
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// --- USER REQUESTS ---
app.get("/make-server-3079ee5f/admin/user-requests", async (c) => {
  try {
    const { data, error } = await supabase
      .from("user_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ data: data ?? [] });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.get("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase
      .from("user_requests")
      .select("*")
      .eq("id", id)
      .single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ data });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.put("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    delete body.id;
    delete body.created_at;
    const { data, error } = await supabase
      .from("user_requests")
      .update(body)
      .eq("id", id)
      .select()
      .single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.delete("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    // Also delete linked cart services
    await kv.del(`user_services:${id}`);
    const { error } = await supabase
      .from("user_requests")
      .delete()
      .eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// --- CART / USER SERVICES ---
// Get all user_services from KV (prefix scan)
app.get("/make-server-3079ee5f/admin/user-services", async (c) => {
  try {
    const raw = await kv.getByPrefix("user_services:");
    // getByPrefix returns values. We need keys too. Do a manual approach.
    // Actually getByPrefix returns values only. Let's get user_requests and check each.
    const { data: users } = await supabase
      .from("user_requests")
      .select("id, name, phone_number, email")
      .order("created_at", { ascending: false })
      .limit(500);

    const results: any[] = [];
    if (users) {
      for (const user of users) {
        const svcRaw = await kv.get(`user_services:${user.id}`);
        if (svcRaw) {
          const services = typeof svcRaw === "string" ? JSON.parse(svcRaw) : svcRaw;
          if (services && services.length > 0) {
            results.push({
              user_request_id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone_number,
              services,
            });
          }
        }
      }
    }
    return c.json({ data: results });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.put("/make-server-3079ee5f/admin/user-services/:userRequestId", async (c) => {
  try {
    const id = c.req.param("userRequestId");
    const body = await c.req.json();
    await kv.set(`user_services:${id}`, JSON.stringify(body.services || []));
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.delete("/make-server-3079ee5f/admin/user-services/:userRequestId", async (c) => {
  try {
    const id = c.req.param("userRequestId");
    await kv.del(`user_services:${id}`);
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

Deno.serve(app.fetch);