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

// ============================================================
// AUTO-MIGRATION: Creates services, cart_submissions, cart_items tables
// Runs once on startup, idempotent via IF NOT EXISTS
// ============================================================
let migrationDone = false;

async function ensureTables() {
  if (migrationDone) return;
  try {
    // Create services table
    await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS services (
          id TEXT PRIMARY KEY,
          category TEXT NOT NULL,
          title TEXT NOT NULL,
          description TEXT DEFAULT '',
          amount INTEGER DEFAULT 0,
          image_key TEXT DEFAULT '',
          price_label TEXT DEFAULT 'From',
          availability BOOLEAN DEFAULT true,
          sort_order INTEGER DEFAULT 99,
          created_at TIMESTAMPTZ DEFAULT now()
        );
      `,
    });

    // Create cart_submissions table
    await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS cart_submissions (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          user_request_id BIGINT NOT NULL REFERENCES user_requests(id) ON DELETE CASCADE,
          status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','completed','cancelled')),
          total_amount INTEGER DEFAULT 0,
          notes TEXT DEFAULT '',
          created_at TIMESTAMPTZ DEFAULT now()
        );
        CREATE INDEX IF NOT EXISTS idx_cart_submissions_user ON cart_submissions(user_request_id);
      `,
    });

    // Create cart_items table
    await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS cart_items (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          cart_submission_id UUID NOT NULL REFERENCES cart_submissions(id) ON DELETE CASCADE,
          service_id TEXT NOT NULL,
          service_title TEXT NOT NULL,
          price_at_submission INTEGER DEFAULT 0,
          created_at TIMESTAMPTZ DEFAULT now()
        );
        CREATE INDEX IF NOT EXISTS idx_cart_items_submission ON cart_items(cart_submission_id);
        CREATE INDEX IF NOT EXISTS idx_cart_items_service ON cart_items(service_id);
      `,
    });

    // Add email column to user_requests if missing
    await supabase.rpc("exec_sql", {
      sql: `
        DO $$ BEGIN
          ALTER TABLE user_requests ADD COLUMN IF NOT EXISTS email TEXT;
        EXCEPTION WHEN duplicate_column THEN NULL;
        END $$;
      `,
    });

    console.log("Migration: all tables ensured");
    migrationDone = true;
  } catch (err) {
    // exec_sql RPC may not exist — try direct SQL via REST
    console.log("Migration via RPC failed (exec_sql may not exist), trying direct approach:", err);
    // Tables may already exist from manual creation. Mark done and continue.
    migrationDone = true;
  }
}

// Run migration on cold start
ensureTables().catch(console.error);

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

  console.log("Unknown budget range value, using wide range:", value);
  return { min: 0, max: 99999999 };
}

// ============================================================
// SERVICES: Now backed by `services` table with KV fallback
// ============================================================

// Seed services into the `services` table
const DEFAULT_SERVICES = [
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

// Helper: get services from table, fall back to KV
async function getServicesFromTable(onlyAvailable = true): Promise<any[]> {
  try {
    let query = supabase.from("services").select("*").order("sort_order", { ascending: true });
    if (onlyAvailable) query = query.eq("availability", true);
    const { data, error } = await query;
    if (!error && data && data.length > 0) return data;
  } catch {}
  // Fallback to KV
  try {
    const catalog = await kv.get("services:catalog");
    if (!catalog) return [];
    const ids: string[] = typeof catalog === "string" ? JSON.parse(catalog) : catalog;
    const keys = ids.map((id: string) => `service:${id}`);
    const values = await kv.mget(keys);
    return values
      .map((v: any) => { if (!v) return null; return typeof v === "string" ? JSON.parse(v) : v; })
      .filter((s: any) => s !== null && (!onlyAvailable || s.availability === true))
      .sort((a: any, b: any) => (a.sort_order || 0) - (b.sort_order || 0));
  } catch { return []; }
}

// Helper: seed services into table
async function seedServicesToTable(): Promise<number> {
  const { error } = await supabase
    .from("services")
    .upsert(DEFAULT_SERVICES, { onConflict: "id" });
  if (error) {
    console.log("Failed to seed services table, falling back to KV:", error.message);
    // Fallback: seed into KV as before
    const keys = DEFAULT_SERVICES.map(s => `service:${s.id}`);
    const values = DEFAULT_SERVICES.map(s => JSON.stringify(s));
    await kv.mset(keys, values);
    await kv.set("services:catalog", JSON.stringify(DEFAULT_SERVICES.map(s => s.id)));
  }
  return DEFAULT_SERVICES.length;
}

// Submit form endpoint
app.post("/make-server-3079ee5f/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { name, age, country, phoneNumber, budget, locationPreference, treatmentDetails, email } = body;

    if (!name || !age || !country || !budget || !locationPreference || !treatmentDetails) {
      return c.json({ error: "All fields are required" }, 400);
    }

    const { min: budget_min, max: budget_max } = parseBudget(budget);

    const insertPayload: any = {
      name,
      age: parseInt(String(age), 10),
      country,
      phone_number: phoneNumber || null,
      budget_min,
      budget_max,
      location_preference: locationPreference,
      treatment_details: treatmentDetails,
    };
    // Add email if provided
    if (email) insertPayload.email = email;

    const { data: insertData, error: insertError } = await supabase
      .from("user_requests")
      .insert(insertPayload)
      .select()
      .single();

    if (insertError) {
      // If email column doesn't exist, retry without it
      if (insertError.message.includes("email")) {
        delete insertPayload.email;
        const { data: retry, error: retryErr } = await supabase
          .from("user_requests")
          .insert(insertPayload)
          .select()
          .single();
        if (retryErr) return c.json({ error: `Failed to submit form: ${retryErr.message}` }, 500);
        return await matchAndReturn(c, retry);
      }
      return c.json({ error: `Failed to submit form: ${insertError.message}` }, 500);
    }

    return await matchAndReturn(c, insertData);
  } catch (error) {
    console.log(`Error submitting form: ${error}`);
    return c.json({ error: `Failed to submit form: ${error}` }, 500);
  }
});

async function matchAndReturn(c: any, insertData: any) {
  console.log(`Form submitted successfully: ${insertData.id}`);

  const { data: hospitals, error: rpcError } = await supabase.rpc("match_hospitals", {
    p_location: insertData.location_preference,
    p_budget_min: insertData.budget_min,
    p_budget_max: insertData.budget_max,
    p_treatment: insertData.treatment_details,
  });

  if (rpcError) {
    console.log("Error calling match_hospitals RPC:", rpcError.message);
    return c.json({ success: true, submissionId: insertData.id, hospitals: [] });
  }

  return c.json({ success: true, submissionId: insertData.id, hospitals: hospitals ?? [] });
}

// Get all submissions endpoint
app.get("/make-server-3079ee5f/submissions", async (c) => {
  try {
    const { data, error } = await supabase
      .from("user_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return c.json({ error: `Failed to fetch submissions: ${error.message}` }, 500);
    return c.json({ submissions: data });
  } catch (error) {
    return c.json({ error: `Failed to fetch submissions: ${error}` }, 500);
  }
});

// Get distinct hospitals for search
app.get("/make-server-3079ee5f/hospitals", async (c) => {
  try {
    const search = c.req.query("search") || "";
    const { data, error } = await supabase.from("hospital_treatments").select("*").limit(500);
    if (error) return c.json({ error: error.message, hospitals: [] }, 500);

    const rows = data ?? [];
    const firstRow = rows[0] || {};
    const columns = Object.keys(firstRow);
    const nameCol = columns.find(c => /hospital.*name/i.test(c)) || columns.find(c => /^name$/i.test(c)) || columns.find(c => /hospital/i.test(c) && typeof firstRow[c] === 'string') || columns[0];
    const cityCol = columns.find(c => /^city$/i.test(c)) || columns.find(c => /location/i.test(c) && typeof firstRow[c] === 'string') || "";

    const hospitalMap = new Map<string, any>();
    rows.forEach((row: any) => {
      const name = String(row[nameCol] || "").trim();
      const city = cityCol ? String(row[cityCol] || "").trim() : "";
      if (!name) return;
      if (search && !name.toLowerCase().includes(search.toLowerCase())) return;
      if (!hospitalMap.has(name)) hospitalMap.set(name, { name, city });
    });
    const hospitals = Array.from(hospitalMap.values()).sort((a: any, b: any) => a.name.localeCompare(b.name));
    return c.json({ hospitals });
  } catch (error) {
    return c.json({ error: `${error}`, hospitals: [] }, 500);
  }
});

// Get distinct cities
app.get("/make-server-3079ee5f/cities", async (c) => {
  try {
    const search = c.req.query("search") || "";
    const { data, error } = await supabase.from("hospital_treatments").select("*").limit(500);
    if (error) return c.json({ error: error.message, cities: [] }, 500);

    const rows = data ?? [];
    const firstRow = rows[0] || {};
    const columns = Object.keys(firstRow);
    const cityCol = columns.find(c => /^city$/i.test(c)) || columns.find(c => /location/i.test(c) && typeof firstRow[c] === 'string') || "";
    if (!cityCol) return c.json({ cities: [] });

    const citySet = new Set<string>();
    rows.forEach((row: any) => {
      const city = String(row[cityCol] || "").trim();
      if (!city) return;
      if (search && !city.toLowerCase().includes(search.toLowerCase())) return;
      citySet.add(city);
    });
    return c.json({ cities: Array.from(citySet).sort().map((city) => ({ city })) });
  } catch (error) {
    return c.json({ error: `${error}`, cities: [] }, 500);
  }
});

// ============================================================
// CART SUBMIT — Now creates cart_submissions + cart_items rows
// Falls back to KV if tables don't exist yet
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

    // 1. If submissionId provided, verify it exists
    if (userRequestId) {
      const { data, error } = await supabase.from("user_requests").select("*").eq("id", userRequestId).single();
      if (!error && data) {
        userRecord = data;
        console.log(`Found existing user_request by submissionId: ${userRequestId}`);

        // Update email on existing record if not set
        if (email && !data.email) {
          await supabase.from("user_requests").update({ email }).eq("id", userRequestId).catch(() => {});
        }
      } else {
        console.log(`SubmissionId ${userRequestId} not found, searching by email/phone`);
        userRequestId = null;
      }
    }

    // 2. Search by email or phone
    if (!userRequestId) {
      if (email) {
        const { data } = await supabase.from("user_requests").select("*").eq("email", email).order("created_at", { ascending: false }).limit(1);
        if (data && data.length > 0) { userRecord = data[0]; userRequestId = userRecord.id; }
      }
      if (!userRequestId && phone) {
        const { data } = await supabase.from("user_requests").select("*").eq("phone_number", phone).order("created_at", { ascending: false }).limit(1);
        if (data && data.length > 0) { userRecord = data[0]; userRequestId = userRecord.id; }
      }
    }

    // 3. Create new user_request if needed
    if (!userRequestId) {
      const budgetParsed = budget ? parseBudget(budget) : { min: 0, max: 99999999 };
      const insertPayload: any = { name, phone_number: phone || null };
      if (email) insertPayload.email = email;
      if (age) insertPayload.age = parseInt(String(age), 10);
      if (country) insertPayload.country = country;
      if (budget) { insertPayload.budget_min = budgetParsed.min; insertPayload.budget_max = budgetParsed.max; }
      if (locationPreference) insertPayload.location_preference = locationPreference;
      if (treatmentDetails) insertPayload.treatment_details = treatmentDetails;

      const { data: newUser, error: insertErr } = await supabase.from("user_requests").insert(insertPayload).select().single();
      if (insertErr) {
        // Retry without email if column doesn't exist
        if (insertErr.message.includes("email")) {
          delete insertPayload.email;
          const { data: retry, error: retryErr } = await supabase.from("user_requests").insert(insertPayload).select().single();
          if (retryErr) return c.json({ error: `Failed to create user: ${retryErr.message}` }, 500);
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

    // 4. Calculate total and create cart_submission + cart_items
    const totalAmount = services.reduce((sum: number, s: any) => {
      const price = parseInt(String(s.price || "0").replace(/[^\d]/g, ""), 10) || 0;
      return sum + price;
    }, 0);

    let cartSubmissionId: string | null = null;

    try {
      // Try relational tables first
      const { data: submission, error: subErr } = await supabase
        .from("cart_submissions")
        .insert({
          user_request_id: userRequestId,
          status: "pending",
          total_amount: totalAmount,
        })
        .select()
        .single();

      if (subErr) throw subErr;
      cartSubmissionId = submission.id;

      // Insert cart items
      const cartItems = services.map((s: any) => ({
        cart_submission_id: submission.id,
        service_id: s.id,
        service_title: s.title,
        price_at_submission: parseInt(String(s.price || "0").replace(/[^\d]/g, ""), 10) || 0,
      }));

      const { error: itemsErr } = await supabase.from("cart_items").insert(cartItems);
      if (itemsErr) throw itemsErr;

      console.log(`Created cart_submission ${submission.id} with ${cartItems.length} items for user ${userRequestId}`);
    } catch (tableErr) {
      console.log("Cart tables not available, falling back to KV:", tableErr);
      // Fallback: store in KV as before
      const kvKey = `user_services:${userRequestId}`;
      const existingRaw = await kv.get(kvKey);
      let existingServices: any[] = [];
      if (existingRaw) {
        try { existingServices = typeof existingRaw === "string" ? JSON.parse(existingRaw) : existingRaw; } catch { existingServices = []; }
      }
      const existingIds = new Set(existingServices.map((s: any) => s.id));
      const newServices = services.filter((s: any) => !existingIds.has(s.id));
      const allServices = [...existingServices, ...newServices];
      await kv.set(kvKey, JSON.stringify(allServices));
    }

    // Also keep KV lookups for backward compat
    if (email) await kv.set(`user_lookup:email:${email.toLowerCase()}`, userRequestId);
    if (phone) await kv.set(`user_lookup:phone:${phone}`, userRequestId);

    return c.json({
      success: true,
      userRequestId,
      cartSubmissionId,
      servicesCount: services.length,
      message: `Cart submitted successfully with ${services.length} services`,
    });
  } catch (error) {
    console.log(`Error submitting cart: ${error}`);
    return c.json({ error: `Failed to submit cart: ${error}` }, 500);
  }
});

// Get cart history for a user
app.get("/make-server-3079ee5f/cart/history/:userRequestId", async (c) => {
  try {
    const userRequestId = c.req.param("userRequestId");

    // Try relational tables
    const { data: submissions, error } = await supabase
      .from("cart_submissions")
      .select("*, cart_items(*)")
      .eq("user_request_id", userRequestId)
      .order("created_at", { ascending: false });

    if (!error && submissions) {
      return c.json({ submissions, userRequestId });
    }

    // Fallback to KV
    const kvKey = `user_services:${userRequestId}`;
    const raw = await kv.get(kvKey);
    const services = raw ? (typeof raw === "string" ? JSON.parse(raw) : raw) : [];
    return c.json({ submissions: [{ services, created_at: null, status: "legacy" }], userRequestId });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// Legacy: Get services for a user_request (KV)
app.get("/make-server-3079ee5f/cart/services/:userRequestId", async (c) => {
  try {
    const userRequestId = c.req.param("userRequestId");
    const kvKey = `user_services:${userRequestId}`;
    const raw = await kv.get(kvKey);
    const services = raw ? (typeof raw === "string" ? JSON.parse(raw) : raw) : [];
    return c.json({ services, userRequestId });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// ============================================================
// Public Services endpoints — now using `services` table
// ============================================================
app.post("/make-server-3079ee5f/services/seed", async (c) => {
  try {
    const services = await getServicesFromTable(false);
    if (services.length > 0) {
      return c.json({ message: "Services already seeded", count: services.length });
    }
    const count = await seedServicesToTable();
    return c.json({ success: true, count });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

app.get("/make-server-3079ee5f/services", async (c) => {
  try {
    const services = await getServicesFromTable(true);
    return c.json({ services });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// ============================================================
// ADMIN ENDPOINTS
// ============================================================

// Force seed services
app.post("/make-server-3079ee5f/admin/services/force-seed", async (c) => {
  try {
    // Delete from table
    await supabase.from("services").delete().neq("id", "");
    // Seed fresh
    const count = await seedServicesToTable();
    return c.json({ success: true, count });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

// --- HOSPITAL TREATMENTS ---
app.get("/make-server-3079ee5f/admin/hospital-treatments", async (c) => {
  try {
    const { data, error } = await supabase.from("hospital_treatments").select("*").order("id", { ascending: true }).limit(500);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ data: data ?? [] });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.post("/make-server-3079ee5f/admin/hospital-treatments", async (c) => {
  try {
    const body = await c.req.json();
    const { data, error } = await supabase.from("hospital_treatments").insert(body).select().single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.put("/make-server-3079ee5f/admin/hospital-treatments/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    delete body.id;
    const { data, error } = await supabase.from("hospital_treatments").update(body).eq("id", id).select().single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.delete("/make-server-3079ee5f/admin/hospital-treatments/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { error } = await supabase.from("hospital_treatments").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

// --- SERVICES (admin: all, including unavailable) ---
app.get("/make-server-3079ee5f/admin/services", async (c) => {
  try {
    const services = await getServicesFromTable(false);
    return c.json({ services });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.post("/make-server-3079ee5f/admin/services", async (c) => {
  try {
    const body = await c.req.json();
    if (!body.id || !body.title || !body.category) return c.json({ error: "id, title, and category are required" }, 400);

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

    const { error } = await supabase.from("services").insert(service);
    if (error) {
      // Fallback to KV
      await kv.set(`service:${body.id}`, JSON.stringify(service));
      const catalog = await kv.get("services:catalog");
      const ids: string[] = catalog ? (typeof catalog === "string" ? JSON.parse(catalog) : catalog) : [];
      if (!ids.includes(body.id)) { ids.push(body.id); await kv.set("services:catalog", JSON.stringify(ids)); }
    }
    return c.json({ success: true, service });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.put("/make-server-3079ee5f/admin/services/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const updates = await c.req.json();
    delete updates.id;
    delete updates.created_at;

    const { data, error } = await supabase.from("services").update(updates).eq("id", id).select().single();
    if (error) {
      // Fallback to KV
      const existing = await kv.get(`service:${id}`);
      if (!existing) return c.json({ error: `Service '${id}' not found` }, 404);
      const service = typeof existing === "string" ? JSON.parse(existing) : existing;
      const updated = { ...service, ...updates, id };
      await kv.set(`service:${id}`, JSON.stringify(updated));
      return c.json({ success: true, service: updated });
    }
    return c.json({ success: true, service: data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.delete("/make-server-3079ee5f/admin/services/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await supabase.from("services").delete().eq("id", id);
    // Also clean KV
    await kv.del(`service:${id}`).catch(() => {});
    const catalog = await kv.get("services:catalog");
    if (catalog) {
      const ids: string[] = typeof catalog === "string" ? JSON.parse(catalog) : catalog;
      await kv.set("services:catalog", JSON.stringify(ids.filter((i: string) => i !== id)));
    }
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

// --- USER REQUESTS ---
app.get("/make-server-3079ee5f/admin/user-requests", async (c) => {
  try {
    const { data, error } = await supabase.from("user_requests").select("*").order("created_at", { ascending: false }).limit(500);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ data: data ?? [] });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.get("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase.from("user_requests").select("*").eq("id", id).single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.put("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    delete body.id;
    delete body.created_at;
    const { data, error } = await supabase.from("user_requests").update(body).eq("id", id).select().single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.delete("/make-server-3079ee5f/admin/user-requests/:id", async (c) => {
  try {
    const id = c.req.param("id");
    // Cart submissions will cascade delete. Also clean KV.
    await kv.del(`user_services:${id}`).catch(() => {});
    const { error } = await supabase.from("user_requests").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

// --- CART SUBMISSIONS (admin) ---
app.get("/make-server-3079ee5f/admin/cart-submissions", async (c) => {
  try {
    // Get all cart submissions with their items and user info
    const { data: submissions, error } = await supabase
      .from("cart_submissions")
      .select("*, cart_items(*)")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) throw error;

    // Enrich with user info
    const userIds = [...new Set((submissions || []).map((s: any) => s.user_request_id))];
    let usersMap: Record<string, any> = {};
    if (userIds.length > 0) {
      const { data: users } = await supabase.from("user_requests").select("id, name, email, phone_number").in("id", userIds);
      if (users) users.forEach((u: any) => { usersMap[u.id] = u; });
    }

    const enriched = (submissions || []).map((s: any) => ({
      ...s,
      user: usersMap[s.user_request_id] || { name: "Unknown", email: null, phone_number: null },
    }));

    return c.json({ data: enriched });
  } catch (error) {
    // Fallback to KV-based carts
    console.log("cart_submissions table not available, falling back to KV:", error);
    try {
      const { data: users } = await supabase.from("user_requests").select("id, name, phone_number, email").order("created_at", { ascending: false }).limit(500);
      const results: any[] = [];
      if (users) {
        for (const user of users) {
          const svcRaw = await kv.get(`user_services:${user.id}`);
          if (svcRaw) {
            const services = typeof svcRaw === "string" ? JSON.parse(svcRaw) : svcRaw;
            if (services && services.length > 0) {
              results.push({
                id: `kv-${user.id}`,
                user_request_id: user.id,
                status: "legacy",
                total_amount: 0,
                created_at: null,
                cart_items: services.map((s: any) => ({ service_id: s.id, service_title: s.title || s.id, price_at_submission: parseInt(String(s.price || "0").replace(/[^\d]/g, ""), 10) || 0 })),
                user: { name: user.name, email: user.email, phone_number: user.phone_number },
              });
            }
          }
        }
      }
      return c.json({ data: results });
    } catch (kvErr) {
      return c.json({ error: `${kvErr}` }, 500);
    }
  }
});

app.put("/make-server-3079ee5f/admin/cart-submissions/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const { status, notes } = body;
    const updates: any = {};
    if (status) updates.status = status;
    if (notes !== undefined) updates.notes = notes;

    const { data, error } = await supabase.from("cart_submissions").update(updates).eq("id", id).select().single();
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true, data });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.delete("/make-server-3079ee5f/admin/cart-submissions/:id", async (c) => {
  try {
    const id = c.req.param("id");
    // cart_items will cascade delete
    const { error } = await supabase.from("cart_submissions").delete().eq("id", id);
    if (error) return c.json({ error: error.message }, 500);
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

// Get cart submissions for a specific user (admin)
app.get("/make-server-3079ee5f/admin/user-requests/:id/submissions", async (c) => {
  try {
    const id = c.req.param("id");
    const { data, error } = await supabase
      .from("cart_submissions")
      .select("*, cart_items(*)")
      .eq("user_request_id", id)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return c.json({ data: data ?? [] });
  } catch {
    // Fallback to KV
    const id = c.req.param("id");
    const svcRaw = await kv.get(`user_services:${id}`);
    const services = svcRaw ? (typeof svcRaw === "string" ? JSON.parse(svcRaw) : svcRaw) : [];
    if (services.length === 0) return c.json({ data: [] });
    return c.json({
      data: [{
        id: `kv-${id}`,
        user_request_id: id,
        status: "legacy",
        total_amount: 0,
        created_at: null,
        cart_items: services.map((s: any) => ({ service_id: s.id, service_title: s.title || s.id, price_at_submission: 0 })),
      }],
    });
  }
});

// Legacy user-services endpoints (backward compat)
app.get("/make-server-3079ee5f/admin/user-services", async (c) => {
  try {
    const { data: users } = await supabase.from("user_requests").select("id, name, phone_number, email").order("created_at", { ascending: false }).limit(500);
    const results: any[] = [];
    if (users) {
      for (const user of users) {
        const svcRaw = await kv.get(`user_services:${user.id}`);
        if (svcRaw) {
          const services = typeof svcRaw === "string" ? JSON.parse(svcRaw) : svcRaw;
          if (services && services.length > 0) {
            results.push({ user_request_id: user.id, name: user.name, email: user.email, phone: user.phone_number, services });
          }
        }
      }
    }
    return c.json({ data: results });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.put("/make-server-3079ee5f/admin/user-services/:userRequestId", async (c) => {
  try {
    const id = c.req.param("userRequestId");
    const body = await c.req.json();
    await kv.set(`user_services:${id}`, JSON.stringify(body.services || []));
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

app.delete("/make-server-3079ee5f/admin/user-services/:userRequestId", async (c) => {
  try {
    const id = c.req.param("userRequestId");
    await kv.del(`user_services:${id}`);
    return c.json({ success: true });
  } catch (error) { return c.json({ error: `${error}` }, 500); }
});

// Admin stats
app.get("/make-server-3079ee5f/admin/stats", async (c) => {
  try {
    const [h, s, u] = await Promise.all([
      supabase.from("hospital_treatments").select("id", { count: "exact", head: true }),
      getServicesFromTable(false),
      supabase.from("user_requests").select("id", { count: "exact", head: true }),
    ]);

    // Try cart_submissions for submission count + revenue
    let totalSubmissions = 0;
    let totalRevenue = 0;
    let weeklySubmissions = 0;
    let popularService = "—";

    try {
      const { data: subs } = await supabase.from("cart_submissions").select("total_amount, created_at");
      if (subs) {
        totalSubmissions = subs.length;
        totalRevenue = subs.reduce((sum: number, s: any) => sum + (s.total_amount || 0), 0);
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        weeklySubmissions = subs.filter((s: any) => s.created_at && s.created_at >= weekAgo).length;
      }
      // Most popular service
      const { data: items } = await supabase.from("cart_items").select("service_title");
      if (items && items.length > 0) {
        const counts: Record<string, number> = {};
        items.forEach((i: any) => { counts[i.service_title] = (counts[i.service_title] || 0) + 1; });
        popularService = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
      }
    } catch {
      // Tables don't exist yet
      const kvCarts = await kv.getByPrefix("user_services:");
      totalSubmissions = kvCarts.length;
    }

    return c.json({
      hospitals: h.count || 0,
      services: s.length,
      users: u.count || 0,
      cartSubmissions: totalSubmissions,
      totalRevenue,
      weeklySubmissions,
      popularService,
    });
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

Deno.serve(app.fetch);
