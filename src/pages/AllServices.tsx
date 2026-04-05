import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../components/CurrencyContext";
import svgPaths from "../imports/svg-ler3i4is66";
import imgImage20 from "figma:asset/a99b2452392c39949d7b54c639f2e1542885af3f.png";
import imgFrame218 from "figma:asset/6dfd9cc4deae204d93416dbfa013a40e6fb67d63.png";
import imgFrame219 from "figma:asset/8715b60a9bcab9b124f86dd12a71aa9a93f149f2.png";
import imgFrame220 from "figma:asset/e078b7604f14c571480069b10a5165737b74ea24.png";
import imgFrame221 from "figma:asset/c729d7cdd899cc15aad50f2fd46c3c1e5fff626d.png";
import imgPngwingCom181 from "figma:asset/c4394d9fa56776a14cbb95906e4f138571834926.png";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { useCart } from "../components/CartContext";
import { toast } from "sonner";
import { getServiceImage } from "../components/serviceImageMap";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-3079ee5f`;

interface Hospital { id: string; name: string; city: string; location: string }
interface City { city: string; location: string }

type TabKey = "all" | "pre-arrival" | "on-arrival" | "during-treatment" | "post-treatment";

type CategoryKey = "pre-arrival" | "on-arrival" | "during-treatment" | "post-treatment";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
  price: string;
  priceLabel: string;
  category: CategoryKey;
}

// Fallback static services used while API loads or if API fails
const FALLBACK_SERVICES: ServiceItem[] = [
  { image: getServiceImage("medical-visa"), title: "Medical Visa", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "pre-arrival" },
  { image: getServiceImage("med-x-visa"), title: "Med X Visa", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "Starting from", category: "pre-arrival" },
  { image: getServiceImage("flight-tickets"), title: "Flight Tickets", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "Starting from", category: "pre-arrival" },
  { image: getServiceImage("accommodation"), title: "Accommodation", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "on-arrival" },
  { image: getServiceImage("airport-pickup-drop"), title: "Airport Pickup & Drop", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "on-arrival" },
  { image: getServiceImage("sim-internet"), title: "SIM / Internet", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "on-arrival" },
  { image: getServiceImage("in-hospital-liaison"), title: "In Hospital Liaison", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "during-treatment" },
  { image: getServiceImage("local-transport"), title: "Local Transport /- Day", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "during-treatment" },
  { image: getServiceImage("food"), title: "Food", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "during-treatment" },
  { image: getServiceImage("translator"), title: "Translator /- Day", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
  { image: getServiceImage("caregivers"), title: "Caregivers", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
  { image: getServiceImage("dietician"), title: "Dietician", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
  { image: getServiceImage("rehabilitation-center"), title: "Rehabilitation Center", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
  { image: getServiceImage("foreign-exchange"), title: "Foreign Exchange", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
  { image: getServiceImage("insurance-assistance"), title: "Insurance Assistance", description: "Comfy Ride from airport to hotel", price: "₹4000", priceLabel: "From", category: "post-treatment" },
];

// Convert API service to frontend ServiceItem
function apiToServiceItem(apiService: any): ServiceItem {
  return {
    image: getServiceImage(apiService.image_key || apiService.id),
    title: apiService.title,
    description: apiService.description || "Comfy Ride from airport to hotel",
    price: `₹${apiService.amount}`,
    priceLabel: apiService.price_label || "From",
    category: apiService.category as CategoryKey,
  };
}

const tabs: { key: TabKey; label: string; sectionLabel: string }[] = [
  { key: "all", label: "All Services", sectionLabel: "ALL SERVICES" },
  { key: "pre-arrival", label: "Pre Arrival", sectionLabel: "PRE- ARRIVAL" },
  { key: "on-arrival", label: "On Arrival", sectionLabel: "ON ARRIVAL" },
  { key: "during-treatment", label: "During Treatment", sectionLabel: "DURING TREATMENT" },
  { key: "post-treatment", label: "Post Treatement", sectionLabel: "ADD ONS" },
];

function AllServicesCurrencyDropdown() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <div
        className="backdrop-blur-[22px] backdrop-filter box-border content-stretch flex gap-[8px] h-[38px] items-center cursor-pointer overflow-clip px-[14px] py-[10px] rounded-[6px] hover:bg-[rgba(30,58,95,0.05)] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="h-[19px] relative shrink-0 w-[29px]"><img alt={currency === "INR" ? "Indian Flag" : "US Flag"} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={currency === "INR" ? imgImage20 : "https://flagcdn.com/w40/us.png"} /></div>
        <div className="flex h-[18.872px] items-center justify-center relative shrink-0 w-[0.5px]" style={{ "--transform-inner-width": "18.859375", "--transform-inner-height": "0.5" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]"><div className="h-[0.5px] relative w-[18.872px]"><div className="absolute inset-[-99.96%_-0.07%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2"><path d={svgPaths.p307b00} opacity="0.2" stroke="#1E3A5F" /></svg></div></div></div>
        </div>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">{currency}</p>
        <div className="relative shrink-0 size-[12px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12"><path d={svgPaths.p3c150ff0} fill="#1E3A5F" /></svg></div>
      </div>
      {open && (
        <div className="absolute top-[42px] left-0 bg-white rounded-[8px] shadow-lg border border-[rgba(30,58,95,0.1)] z-50 overflow-hidden min-w-[100px]">
          {(["INR", "USD"] as const).map((c) => (
            <div
              key={c}
              className={`px-[14px] py-[10px] cursor-pointer font-['General_Sans:Medium',sans-serif] text-[14px] text-[#1e3a5f] tracking-[-0.28px] hover:bg-[rgba(30,58,95,0.05)] transition-colors flex items-center gap-[8px] ${currency === c ? 'bg-[rgba(100,182,172,0.1)]' : ''}`}
              onClick={() => { setCurrency(c); setOpen(false); }}
            >
              <span>{c === "INR" ? "🇮🇳" : "🇺🇸"}</span>
              <span>{c}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  const { addItem, isInCart, removeItem } = useCart();
  const { formatPrice } = useCurrency();
  const inCart = isInCart(item.title);

  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[80px]">
              <div className="absolute h-[70px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[72px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={item.image} />
              </div>
            </div>
            {inCart ? (
              <div className="bg-[rgba(220,80,70,0.1)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[25px] py-[9px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[rgba(220,80,70,0.2)] transition-colors" onClick={() => { removeItem(item.title); toast.success(`${item.title} removed from cart`); }}>
                <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dc5046] text-[18px] text-nowrap tracking-[0.4px] whitespace-pre">Remove</p>
              </div>
            ) : (
              <div className="bg-[rgba(100,182,172,0.1)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[35px] py-[9px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[rgba(100,182,172,0.2)] transition-colors" onClick={() => { addItem({ id: item.title, title: item.title, description: item.description, price: item.price, category: item.category, image: item.image }); toast.success(`${item.title} added to cart`); }}>
                <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64b6ac] text-[20px] text-nowrap tracking-[0.4px] whitespace-pre">+Add</p>
              </div>
            )}
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] w-full">
              <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[20px] tracking-[0.4px] w-full">{item.title}</p>
              <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[0.32px] w-full">{item.description}</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-nowrap whitespace-pre">
              <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[0.32px]">{item.priceLabel}</p>
              <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[20px] tracking-[0.4px]">{formatPrice(item.price)}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function HospitalSearchDropdown({
  hospitals,
  cities,
  loadingH,
  loadingC,
  onSearchHospitals,
  onSearchCities,
  onSelect,
}: {
  hospitals: Hospital[];
  cities: City[];
  loadingH: boolean;
  loadingC: boolean;
  onSearchHospitals: (q: string) => void;
  onSearchCities: (q: string) => void;
  onSelect: (item: Hospital) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // When dropdown opens, fetch both hospitals and cities
  const handleOpen = () => {
    if (!open) {
      onSearchHospitals("");
      onSearchCities("");
    }
    setOpen(!open);
  };

  // Filter hospitals by selected city
  const filteredHospitals = selectedCity
    ? hospitals.filter((h) => h.city === selectedCity)
    : hospitals;

  // Extract unique cities from the hospitals list for the filter pills
  const availableCities = Array.from(new Set(cities.map((c) => c.city))).filter(Boolean);

  return (
    <div ref={ref} className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="box-border content-stretch flex gap-[10px] items-center p-[17px] relative w-full cursor-pointer"
          onClick={handleOpen}
        >
          <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="relative shrink-0 size-[28px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28"><path d={svgPaths.p7f9a8f8} fill="#98A1AE" /></svg></div>
            {open ? (
              <input
                autoFocus
                className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[#1e3a5f] text-[18px] outline-none border-none bg-transparent w-full"
                placeholder="Search for a hospital"
                value={query}
                onChange={(e) => { setQuery(e.target.value); onSearchHospitals(e.target.value); }}
              />
            ) : (
              <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre" style={{ color: selected ? "#1e3a5f" : "#828283" }}>
                {selected || "Search for a hospital"}
              </p>
            )}
          </div>
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.pc7bbc00} fill="black" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(26,54,93,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      {open && (
        <div className="absolute top-full left-0 right-0 mt-[4px] bg-white rounded-[10px] border border-[rgba(26,54,93,0.1)] shadow-lg z-50 max-h-[400px] overflow-hidden flex flex-col">
          {/* City filter pills */}
          {availableCities.length > 0 && (
            <div className="flex gap-[8px] items-center px-[14px] py-[10px] border-b border-[rgba(26,54,93,0.08)] overflow-x-auto shrink-0">
              <div className="relative shrink-0 size-[18px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28"><path d={svgPaths.p2c898080} fill="#98A1AE" /></svg></div>
              <div
                className={`px-[12px] py-[5px] rounded-[100px] cursor-pointer text-[13px] font-['General_Sans:Medium',sans-serif] whitespace-nowrap transition-colors ${
                  selectedCity === null
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-[#f0f0f0] text-[#1e3a5f] hover:bg-[#e4e4e4]"
                }`}
                onClick={() => setSelectedCity(null)}
              >
                All Cities
              </div>
              {availableCities.map((city) => (
                <div
                  key={city}
                  className={`px-[12px] py-[5px] rounded-[100px] cursor-pointer text-[13px] font-['General_Sans:Medium',sans-serif] whitespace-nowrap transition-colors ${
                    selectedCity === city
                      ? "bg-[#1e3a5f] text-white"
                      : "bg-[#f0f0f0] text-[#1e3a5f] hover:bg-[#e4e4e4]"
                  }`}
                  onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
          {/* Hospital list */}
          <div className="overflow-y-auto flex-1">
            {loadingH || loadingC ? (
              <div className="p-[16px] text-center font-['General_Sans:Regular',sans-serif] text-[#828283] text-[16px]">Loading...</div>
            ) : filteredHospitals.length === 0 ? (
              <div className="p-[16px] text-center font-['General_Sans:Regular',sans-serif] text-[#828283] text-[16px]">No hospitals found</div>
            ) : (
              filteredHospitals.map((hospital, i) => (
                <div
                  key={i}
                  className="px-[17px] py-[12px] cursor-pointer hover:bg-[#f9f9f9] font-['General_Sans:Medium',sans-serif] text-[#1e3a5f] text-[16px] transition-colors"
                  onClick={() => {
                    setSelected(hospital.name);
                    setOpen(false);
                    setQuery("");
                    setSelectedCity(null);
                    onSelect(hospital);
                  }}
                >
                  {hospital.name}
                  {hospital.city && (
                    <span className="font-['General_Sans:Regular',sans-serif] text-[#828283] text-[14px] ml-[8px]">{hospital.city}</span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AllServices({ onCartClick }: { onCartClick?: () => void }) {
  const { itemCount } = useCart();
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [loadingH, setLoadingH] = useState(false);
  const [loadingC, setLoadingC] = useState(false);
  const [services, setServices] = useState<ServiceItem[]>(FALLBACK_SERVICES);

  const fetchHospitals = async (search: string) => {
    setLoadingH(true);
    try {
      const res = await fetch(`${API_BASE}/hospitals?search=${encodeURIComponent(search)}`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      const data = await res.json();
      console.log("Hospitals API response:", data);
      setHospitals(data.hospitals || []);
    } catch (e) { console.error("Error fetching hospitals:", e); }
    setLoadingH(false);
  };

  const fetchCities = async (search: string) => {
    setLoadingC(true);
    try {
      const res = await fetch(`${API_BASE}/cities?search=${encodeURIComponent(search)}`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      const data = await res.json();
      console.log("Cities API response:", data);
      setCities(data.cities || []);
    } catch (e) { console.error("Error fetching cities:", e); }
    setLoadingC(false);
  };

  const fetchServices = async () => {
    try {
      // First try to get services
      let res = await fetch(`${API_BASE}/services`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      let data = await res.json();
      console.log("Services API response:", data);

      // If no services found, seed them first then re-fetch
      if (!data.services || data.services.length === 0) {
        console.log("No services found, seeding...");
        await fetch(`${API_BASE}/services/seed`, {
          method: "POST",
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        });
        res = await fetch(`${API_BASE}/services`, {
          headers: { Authorization: `Bearer ${publicAnonKey}` },
        });
        data = await res.json();
        console.log("Services after seed:", data);
      }

      if (data.services && data.services.length > 0) {
        setServices(data.services.map(apiToServiceItem));
      }
    } catch (e) { console.error("Error fetching services:", e); }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = activeTab === "all" ? services : services.filter((s) => s.category === activeTab);

  // Helper to chunk an array into rows of a given size
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const categoryTabs = tabs.filter((t) => t.key !== "all") as { key: CategoryKey; label: string; sectionLabel: string }[];
  
  return (
    <div className="bg-white relative w-full overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <div className="relative content-stretch flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-[1264px] px-4 md:px-[80px] py-4 md:py-0 md:top-[63.85px] md:left-[80px]">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <Link to="/" className="h-[35.264px] relative shrink-0 w-[157.694px] no-underline">
            <div className="h-[35.264px] relative shrink-0 w-[157.694px]">
              <div className="absolute left-[11.8px] size-[12.229px] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13"><path d={svgPaths.p2101aa00} fill="#FF6F61" /></svg>
              </div>
              <div className="absolute left-[24.03px] size-[12.229px] top-[12.23px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13"><path d={svgPaths.p29f4f8b0} fill="#64B6AC" /></svg>
              </div>
              <div className="absolute h-[10.807px] left-[12.23px] top-[24.46px] w-[11.802px]">
                <div className="absolute bottom-0 left-[0.22%] right-0 top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11"><path d={svgPaths.p2604e600} fill="#1E3A5F" /></svg>
                </div>
              </div>
              <div className="absolute flex h-[10.807px] items-center justify-center left-0 top-[12.23px] w-[11.802px]">
                <div className="flex-none rotate-[180deg]">
                  <div className="h-[10.807px] relative w-[11.802px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11"><path d={svgPaths.pd076000} fill="#1E3A5F" /></svg>
                  </div>
                </div>
              </div>
              <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] left-[41.95px] text-[#1e3a5f] text-[24.237px] text-nowrap top-[1.36px] tracking-[-0.4847px] whitespace-pre">medbridge</p>
            </div>
          </Link>
          <div className="flex h-[38px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "38", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[38px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 1"><line opacity="0.4" stroke="#1E3A5F" x2="38" y1="0.5" y2="0.5" /></svg>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[0px] text-[14px] tracking-[-0.28px] w-[342px] whitespace-pre-wrap hidden md:block">
            <span>{`Bridging  patients worldwide with `}<br aria-hidden="true" /></span>India's best doctors<span className="text-[#8bbcdd]"> </span>
          </p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <AllServicesCurrencyDropdown />
          </div>
          <div className="relative">
            <div className="backdrop-blur-[22px] backdrop-filter bg-[#e8eaee] box-border content-stretch flex gap-[10px] items-center overflow-clip p-[9px] relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#dfe1e5] transition-colors" onClick={onCartClick}>
              <div className="relative shrink-0 size-[20px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p21130200} fill="#1E3A5F" /></svg></div>
            </div>
            {itemCount > 0 && (
              <div
                className="absolute -top-1 -right-1 bg-[#64b6ac] text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-[3px] pointer-events-none"
                style={{ fontSize: "10px", fontFamily: "'General Sans', sans-serif", fontWeight: 500 }}
              >
                {itemCount > 99 ? "99+" : itemCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="content-stretch flex flex-col items-center left-0 mt-[100px] md:mt-[172.15px] w-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full max-w-[1280px] px-4 md:px-[80px]">
          {/* Header text */}
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[48px] items-start md:items-center relative shrink-0 w-full">
              <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[24px] md:text-[32px] text-nowrap md:text-left tracking-[-0.64px] whitespace-pre-wrap md:whitespace-pre">
                <span className="font-['General_Sans:Regular',sans-serif]">Just looking for</span>
                <span className="font-['General_Sans:Semibold',sans-serif]"> </span>services?
              </p>
              <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic opacity-60 relative shrink-0 text-[#1e3a5f] text-[16px] md:text-[20px] tracking-[0.4px] w-full md:w-[697px]">We remove the uncertainty of agency-based bookings — offering transparent, flexible, and verified service options designed around you.</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="bg-[#f9f9f9] relative rounded-[12px] shrink-0 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center size-full">
              <div className="box-border content-stretch flex flex-col md:flex-row gap-[16px] items-start md:items-center p-[16px] relative w-full">
                {/* Toggle - moved to LHS */}
                <div className="bg-[#f0f0f0] content-stretch flex items-center justify-between relative rounded-[1000px] shrink-0 w-full md:w-[380px]">
                  <div className="basis-0 bg-[#1e3a5f] grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0">
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[11px] relative w-full">
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Individual Services</p>
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[100px] shrink-0">
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[16px] py-[11px] relative w-full">
                        <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] text-nowrap whitespace-pre">Package Plan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex h-[46px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "46", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[90deg]"><div className="h-0 relative w-[46px]"><div className="absolute bottom-0 left-0 right-0 top-[-1px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 1"><line opacity="0.06" stroke="black" x2="46" y1="0.5" y2="0.5" /></svg></div></div></div>
                </div>
                {/* Hospital dropdown with nested city filter */}
                <div className="content-stretch flex gap-[16px] items-center relative w-full md:grow">
                  <HospitalSearchDropdown
                    hospitals={hospitals}
                    cities={cities}
                    loadingH={loadingH}
                    loadingC={loadingC}
                    onSearchHospitals={fetchHospitals}
                    onSearchCities={fetchCities}
                    onSelect={(h) => console.log("Selected hospital:", h)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs - sticky on scroll */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 sticky top-0 bg-white z-40 py-[12px] -my-[12px] overflow-x-auto w-full">
            <div className="flex gap-[12px] whitespace-nowrap">
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className="relative shrink-0 cursor-pointer"
                  onClick={() => setActiveTab(tab.key)}
                >
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[24px] py-[11px] relative rounded-[inherit]">
                    <p className={`font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre ${activeTab === tab.key ? "text-[#1e3a5f]" : "text-[#98a1ae]"}`}>
                      {tab.label}
                    </p>
                  </div>
                  {activeTab === tab.key && (
                    <div aria-hidden="true" className="absolute border-[#1e3a5f] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service cards */}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
            {activeTab === "all" ? (
              // All Services: show each category with its own section header
              categoryTabs.map((cat) => {
                const catServices = services.filter((s) => s.category === cat.key);
                if (catServices.length === 0) return null;
                const isAddOns = cat.key === "post-treatment";
                return (
                  <div key={cat.key} className={`content-stretch flex flex-col ${isAddOns ? "gap-[24px]" : "gap-[16px]"} items-start relative shrink-0 w-full`}>
                    <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#768293] text-[14px] md:text-[16px] tracking-[1.6px] uppercase w-full">
                      {cat.sectionLabel}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[24px] w-full">
                      {catServices.map((item, i) => (
                        <ServiceCard key={`${item.title}-${i}`} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Single category view
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#768293] text-[14px] md:text-[16px] tracking-[1.6px] uppercase w-full">
                  {tabs.find((t) => t.key === activeTab)?.sectionLabel}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[24px] w-full">
                  {filteredServices.map((item, i) => (
                    <ServiceCard key={`${item.title}-${i}`} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative bg-[rgba(245,230,211,0.5)] min-h-[300px] md:min-h-[618px] overflow-clip w-full mt-[60px] md:mt-0">
        <div className="relative content-stretch flex gap-[23.133px] items-center px-4 md:px-[80px] py-8 md:py-[64px]">
          <div className="h-[50.986px] relative shrink-0 w-[228px]">
            <div className="absolute left-[17.06px] size-[17.681px] top-0"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18"><path d={svgPaths.p26d7b780} fill="#FF6F61" /></svg></div>
            <div className="absolute left-[34.74px] size-[17.681px] top-[17.68px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18"><path d={svgPaths.p2e33c100} fill="#64B6AC" /></svg></div>
            <div className="absolute h-[15.625px] left-[17.68px] top-[35.36px] w-[17.064px]"><div className="absolute bottom-0 left-[0.22%] right-0 top-0"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16"><path d={svgPaths.p2a8a6f00} fill="#1E3A5F" /></svg></div></div>
            <div className="absolute flex h-[15.625px] items-center justify-center left-0 top-[17.68px] w-[17.064px]"><div className="flex-none rotate-[180deg]"><div className="h-[15.625px] relative w-[17.064px]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16"><path d={svgPaths.p1d1c29c0} fill="#1E3A5F" /></svg></div></div></div>
            <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] left-[60.65px] text-[#1e3a5f] text-[35.043px] text-nowrap top-[1.97px] tracking-[-0.7009px] whitespace-pre">medbridge</p>
          </div>
        </div>
        <div className="relative content-stretch flex flex-col md:flex-row gap-[12px] items-start md:items-center px-4 md:px-[80px] py-[24px] md:py-0">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] md:text-[16px] text-left md:text-center text-nowrap tracking-[0.32px] whitespace-pre">Copyrights © 2025️</p>
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] md:text-[16px] text-left md:text-center text-nowrap tracking-[0.32px] whitespace-pre md:ml-[16px]">Medbridge</p>
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] md:text-[16px] text-left md:text-center text-nowrap tracking-[0.32px] whitespace-pre md:ml-[16px]">All rights reserved</p>
        </div>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-[80px] py-8 md:py-[64px]">
          {/* Company Column */}
          <div>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[20px] md:text-[24px] text-black text-left tracking-[0.48px] mb-[24px]">Company</p>
            <ul className="space-y-[16px]">
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">About Us</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">{`Terms & Conditions`}</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Privacy Policy</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Careers</p></li>
            </ul>
          </div>

          {/* For Customers Column */}
          <div>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[20px] md:text-[24px] text-black text-left tracking-[0.48px] mb-[24px]">For Customers</p>
            <ul className="space-y-[16px]">
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Medbridge Reviews</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Services</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Package Plan</p></li>
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">AI Match with Hospitals</p></li>
            </ul>
          </div>

          {/* For Professional Column */}
          <div>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[20px] md:text-[24px] text-black text-left tracking-[0.48px] mb-[24px]">For Professional</p>
            <ul className="space-y-[16px]">
              <li><p className="font-['General_Sans:Regular',sans-serif] leading-[normal] text-[#1e3a5f] text-[16px] tracking-[0.32px]">Register as a Professional</p></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[20px] md:text-[24px] text-black text-left tracking-[0.48px] mb-[24px]">Socials</p>
            <div className="flex gap-[12px]">
              <a href="https://www.linkedin.com/company/medbridge-life/" target="_blank" rel="noopener noreferrer" className="rounded-[100px] size-[48px] cursor-pointer hover:opacity-80 transition-opacity">
                <div aria-hidden="true" className="inset-0 pointer-events-none rounded-[100px]">
                  <div className="bg-black inset-0 rounded-[100px]" />
                  <div className="inset-0 overflow-hidden rounded-[100px]"><img alt="" className="h-[70.83%] left-[-9.5%] max-w-none top-[14.58%] w-[119%]" src={imgFrame218} /></div>
                </div>
              </a>
              <a href="https://www.instagram.com/medbridge.life/" target="_blank" rel="noopener noreferrer" className="rounded-[100px] size-[48px] cursor-pointer hover:opacity-80 transition-opacity"><img alt="" className="inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame219} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-[100px] size-[48px] cursor-pointer hover:opacity-80 transition-opacity">
                <div aria-hidden="true" className="inset-0 pointer-events-none rounded-[100px]">
                  <div className="bg-[#3b579d] inset-0 rounded-[100px]" />
                  <div className="inset-0 overflow-hidden rounded-[100px]"><img alt="" className="left-[-2.08%] max-w-none size-[85.59%] top-[14.41%]" src={imgFrame220} /></div>
                </div>
              </a>
              <a href="https://x.com/medbridge_life" target="_blank" rel="noopener noreferrer" className="rounded-[100px] size-[54px] cursor-pointer hover:opacity-80 transition-opacity">
                <div className="inset-0 overflow-hidden pointer-events-none rounded-[100px]"><img alt="" className="left-[-5.96%] max-w-none size-[112.66%] top-[-4.1%]" src={imgFrame221} /></div>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex absolute h-[484.7px] items-center justify-center right-[40px] bottom-[40px] w-[548.433px]" style={{ "--transform-inner-width": "291.078125", "--transform-inner-height": "465.203125" } as React.CSSProperties}>
          <div className="flex-none rotate-[300deg]"><div className="h-[465.215px] relative w-[291.091px]"><img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPngwingCom181} /></div></div>
        </div>
      </div>
    </div>
  );
}