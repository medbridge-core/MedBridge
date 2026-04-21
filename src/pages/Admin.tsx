import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { toast } from "sonner";
import { Hospital, LayoutDashboard, ShoppingCart, Users, Plus, Pencil, Trash2, X, Check, ChevronDown, ChevronUp, Eye, EyeOff, RefreshCw, Search, ArrowLeft, TrendingUp, Calendar, Star } from "lucide-react";

const API = `https://${projectId}.supabase.co/functions/v1/make-server-3079ee5f`;
const headers = { Authorization: `Bearer ${publicAnonKey}`, "Content-Type": "application/json" };

type Tab = "hospitals" | "services" | "users" | "submissions";

// ─── Generic helpers ───
async function api(path: string, method = "GET", body?: any) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
  return json;
}

// ─── Modal ───
function Modal({ title, onClose, children, wide }: { title: string; onClose: () => void; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className={`bg-white rounded-2xl shadow-2xl ${wide ? "w-[900px]" : "w-[600px]"} max-h-[85vh] flex flex-col`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-[#1e3a5f]">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 transition-colors"><X size={20} className="text-gray-500" /></button>
        </div>
        <div className="overflow-y-auto p-6 flex-1">{children}</div>
      </div>
    </div>
  );
}

// ─── Field editor row ───
function Field({ label, value, onChange, type = "text", options, disabled }: {
  label: string; value: any; onChange: (v: any) => void; type?: string; options?: { value: string; label: string }[]; disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</label>
      {type === "select" && options ? (
        <select
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40 focus:border-[#64b6ac]"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : type === "boolean" ? (
        <button
          className={`w-fit px-4 py-2 rounded-lg text-sm font-medium transition-colors ${value ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-600 border border-red-200"}`}
          onClick={() => onChange(!value)}
          disabled={disabled}
        >
          {value ? "True" : "False"}
        </button>
      ) : type === "textarea" ? (
        <textarea
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40 focus:border-[#64b6ac] min-h-[80px] resize-y"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40 focus:border-[#64b6ac]"
          value={value ?? ""}
          onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
          disabled={disabled}
        />
      )}
    </div>
  );
}

function SaveButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center gap-2 bg-[#1e3a5f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2a4d7a] transition-colors disabled:opacity-50"
    >
      <Check size={16} /> {loading ? "Saving..." : "Save Changes"}
    </button>
  );
}

function DeleteButton({ onClick, loading }: { onClick: () => void; loading: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-100 border border-red-200 transition-colors disabled:opacity-50"
    >
      <Trash2 size={16} /> {loading ? "Deleting..." : "Delete"}
    </button>
  );
}

// ─── Stats card ───
function StatCard({ label, value, icon: Icon, color }: { label: string; value: number | string; icon: any; color: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#1e3a5f]">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

// ─── Status badge ───
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-amber-50 text-amber-600 border-amber-200",
    confirmed: "bg-blue-50 text-blue-600 border-blue-200",
    completed: "bg-green-50 text-green-600 border-green-200",
    cancelled: "bg-red-50 text-red-500 border-red-200",
    legacy: "bg-gray-50 text-gray-500 border-gray-200",
  };
  return (
    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium border ${styles[status] || styles.pending}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// HOSPITAL TREATMENTS TAB
// ─────────────────────────────────────────────────────────────
function HospitalTreatmentsTab() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState<string[]>([]);
  const [editItem, setEditItem] = useState<any>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newItem, setNewItem] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api("/admin/hospital-treatments");
      setData(res.data || []);
      if (res.data && res.data.length > 0) setColumns(Object.keys(res.data[0]));
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api(`/admin/hospital-treatments/${editItem.id}`, "PUT", editItem);
      toast.success("Hospital treatment updated");
      setEditItem(null);
      load();
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleCreate = async () => {
    setSaving(true);
    try {
      await api("/admin/hospital-treatments", "POST", newItem);
      toast.success("Hospital treatment created");
      setCreateMode(false);
      setNewItem({});
      load();
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleDelete = async (id: any) => {
    if (!confirm("Delete this hospital treatment?")) return;
    try {
      await api(`/admin/hospital-treatments/${id}`, "DELETE");
      toast.success("Deleted");
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const filtered = data.filter((row) =>
    search === "" || columns.some((c) => String(row[c] ?? "").toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm w-[320px] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40"
            placeholder="Search hospital treatments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button onClick={load} className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><RefreshCw size={16} className="text-gray-500" /></button>
          <button onClick={() => { setCreateMode(true); setNewItem({}); }} className="flex items-center gap-2 bg-[#64b6ac] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#539e95] transition-colors">
            <Plus size={16} /> Add Treatment
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400"><RefreshCw size={24} className="animate-spin" /></div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/80">
                  {columns.map((c) => (
                    <th key={c} className="text-left px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider whitespace-nowrap">{c}</th>
                  ))}
                  <th className="text-right px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((row, i) => (
                  <tr key={row.id ?? i} className="hover:bg-gray-50/50 transition-colors">
                    {columns.map((c) => (
                      <td key={c} className="px-4 py-3 text-[#1e3a5f] max-w-[200px] truncate whitespace-nowrap">{String(row[c] ?? "—")}</td>
                    ))}
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex gap-1 justify-end">
                        <button onClick={() => setEditItem({ ...row })} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Pencil size={15} /></button>
                        <button onClick={() => handleDelete(row.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && <div className="text-center py-12 text-gray-400 text-sm">No hospital treatments found</div>}
        </div>
      )}

      {editItem && (
        <Modal title="Edit Hospital Treatment" onClose={() => setEditItem(null)}>
          <div className="flex flex-col gap-4">
            {columns.filter((c) => c !== "id").map((c) => (
              <Field key={c} label={c} value={editItem[c]} onChange={(v) => setEditItem({ ...editItem, [c]: v })} />
            ))}
            <div className="flex gap-3 pt-2">
              <SaveButton onClick={handleSave} loading={saving} />
              <DeleteButton onClick={() => { handleDelete(editItem.id); setEditItem(null); }} loading={false} />
            </div>
          </div>
        </Modal>
      )}

      {createMode && (
        <Modal title="Create Hospital Treatment" onClose={() => setCreateMode(false)}>
          <div className="flex flex-col gap-4">
            {columns.filter((c) => c !== "id").map((c) => (
              <Field key={c} label={c} value={newItem[c] ?? ""} onChange={(v) => setNewItem({ ...newItem, [c]: v })} />
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleCreate}
                disabled={saving}
                className="flex items-center gap-2 bg-[#64b6ac] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#539e95] transition-colors disabled:opacity-50"
              >
                <Plus size={16} /> {saving ? "Creating..." : "Create"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SERVICES TAB
// ─────────────────────────────────────────────────────────────
const CATEGORY_OPTIONS = [
  { value: "pre-arrival", label: "Pre-Arrival" },
  { value: "on-arrival", label: "On Arrival" },
  { value: "during-treatment", label: "During Treatment" },
  { value: "post-treatment", label: "Post Treatment" },
];

const IMAGE_KEYS = [
  "medical-visa", "med-x-visa", "flight-tickets", "accommodation", "airport-pickup-drop",
  "sim-internet", "in-hospital-liaison", "local-transport", "food", "translator",
  "caregivers", "dietician", "rehabilitation-center", "foreign-exchange", "insurance-assistance",
];

// ServiceForm extracted outside ServicesTab to prevent re-creation on every render (fixes focus loss)
function ServiceForm({ item, setItem, isEdit, onUploadImage }: { item: any; setItem: (v: any) => void; isEdit?: boolean; onUploadImage?: (id: string, file: File) => void }) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadImage && item.id) {
      onUploadImage(item.id, file);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Field label="ID (slug)" value={item.id} onChange={(v) => setItem({ ...item, id: v })} disabled={!!isEdit} />
      <Field label="Title" value={item.title} onChange={(v) => setItem({ ...item, title: v })} />
      <div className="col-span-2">
        <Field label="Description" value={item.description} onChange={(v) => setItem({ ...item, description: v })} />
      </div>
      <Field label="Category" value={item.category} onChange={(v) => setItem({ ...item, category: v })} type="select" options={CATEGORY_OPTIONS} />
      <Field label="Amount (INR)" value={item.amount} onChange={(v) => setItem({ ...item, amount: v })} type="number" />
      <Field label="Price Label" value={item.price_label} onChange={(v) => setItem({ ...item, price_label: v })} type="select" options={[{ value: "From", label: "From" }, { value: "Starting from", label: "Starting from" }]} />
      <Field label="Image Key" value={item.image_key} onChange={(v) => setItem({ ...item, image_key: v })} type="select" options={IMAGE_KEYS.map((k) => ({ value: k, label: k }))} />
      <Field label="Sort Order" value={item.sort_order} onChange={(v) => setItem({ ...item, sort_order: v })} type="number" />
      <Field label="Availability" value={item.availability} onChange={(v) => setItem({ ...item, availability: v })} type="boolean" />
      <div className="col-span-2 flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Image</label>
        <div className="flex items-center gap-3">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-200 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" />
          {item.custom_image_url && <img src={item.custom_image_url} alt="" className="h-10 w-10 rounded-lg object-cover border border-gray-200" />}
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<any>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newItem, setNewItem] = useState<any>({ category: "pre-arrival", availability: true, amount: 0, price_label: "From", sort_order: 99 });
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [seeding, setSeeding] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api("/admin/services");
      setServices(res.services || []);
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  }, []);

  const seedServices = async () => {
    setSeeding(true);
    try {
      await api("/admin/services/force-seed", "POST");
      toast.success("Services seeded/updated successfully!");
      await load();
    } catch (e: any) { toast.error(`Failed to seed: ${e.message}`); }
    setSeeding(false);
  };

  useEffect(() => { load(); }, [load]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api(`/admin/services/${editItem.id}`, "PUT", editItem);
      toast.success("Service updated");
      setEditItem(null);
      load();
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleCreate = async () => {
    if (!newItem.id || !newItem.title) { toast.error("ID and Title required"); return; }
    setSaving(true);
    try {
      await api("/admin/services", "POST", newItem);
      toast.success("Service created");
      setCreateMode(false);
      setNewItem({ category: "pre-arrival", availability: true, amount: 0, price_label: "From", sort_order: 99 });
      load();
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm(`Delete service "${id}"?`)) return;
    try {
      await api(`/admin/services/${id}`, "DELETE");
      toast.success("Deleted");
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const toggleAvailability = async (svc: any) => {
    try {
      await api(`/admin/services/${svc.id}`, "PUT", { availability: !svc.availability });
      toast.success(`${svc.title} ${svc.availability ? "hidden" : "shown"}`);
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const handleUploadImage = async (serviceId: string, file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`${API}/admin/services/${serviceId}/image`, {
        method: "POST",
        headers: { Authorization: headers.Authorization },
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Upload failed");
      toast.success("Image uploaded!");
      if (editItem && editItem.id === serviceId) {
        setEditItem({ ...editItem, custom_image_url: json.url });
      }
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const filtered = services.filter((s) =>
    search === "" || s.title.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm w-[320px] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40" placeholder="Search services..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-3">
          <button onClick={load} className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><RefreshCw size={16} className="text-gray-500" /></button>
          <button onClick={() => setCreateMode(true)} className="flex items-center gap-2 bg-[#64b6ac] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#539e95] transition-colors">
            <Plus size={16} /> Add Service
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400"><RefreshCw size={24} className="animate-spin" /></div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((svc) => (
            <div key={svc.id} className={`bg-white rounded-xl border p-4 flex items-center gap-5 transition-all ${svc.availability ? "border-gray-100" : "border-red-100 bg-red-50/30 opacity-70"}`}>
              <div className="w-14 h-14 bg-[rgba(245,230,211,0.5)] rounded-xl flex items-center justify-center shrink-0">
                <span className="text-2xl">{svc.category === "pre-arrival" ? "✈️" : svc.category === "on-arrival" ? "🏨" : svc.category === "during-treatment" ? "🏥" : "💊"}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[#1e3a5f] text-[15px]">{svc.title}</p>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${svc.availability ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
                    {svc.availability ? "Active" : "Hidden"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{svc.category} · ₹{svc.amount} · {svc.price_label} · Order: {svc.sort_order}</p>
              </div>
              <div className="flex gap-1 shrink-0">
                <button onClick={() => toggleAvailability(svc)} className={`p-2 rounded-lg transition-colors ${svc.availability ? "hover:bg-amber-50 text-gray-400 hover:text-amber-500" : "hover:bg-green-50 text-gray-400 hover:text-green-500"}`}>
                  {svc.availability ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button onClick={() => setEditItem({ ...svc })} className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(svc.id)} className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center py-12 text-gray-400 text-sm">No services found</div>}
        </div>
      )}

      {editItem && (
        <Modal title={`Edit: ${editItem.title}`} onClose={() => setEditItem(null)} wide>
          <ServiceForm item={editItem} setItem={setEditItem} isEdit onUploadImage={handleUploadImage} />
          <div className="flex gap-3 pt-5 mt-2 border-t border-gray-100">
            <SaveButton onClick={handleSave} loading={saving} />
            <DeleteButton onClick={() => { handleDelete(editItem.id); setEditItem(null); }} loading={false} />
          </div>
        </Modal>
      )}

      {createMode && (
        <Modal title="Create New Service" onClose={() => setCreateMode(false)} wide>
          <ServiceForm item={newItem} setItem={setNewItem} />
          <div className="flex gap-3 pt-5 mt-2 border-t border-gray-100">
            <button onClick={handleCreate} disabled={saving} className="flex items-center gap-2 bg-[#64b6ac] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#539e95] transition-colors disabled:opacity-50">
              <Plus size={16} /> {saving ? "Creating..." : "Create Service"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// USER REQUESTS TAB — now with expandable cart submissions
// ─────────────────────────────────────────────────────────────
function UserRequestsTab() {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [userSubmissions, setUserSubmissions] = useState<Record<string, any[]>>({});
  const [loadingSubs, setLoadingSubs] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api("/admin/user-requests");
      setData(res.data || []);
      if (res.data && res.data.length > 0) setColumns(Object.keys(res.data[0]));
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const toggleExpand = async (userId: string) => {
    if (expanded === userId) {
      setExpanded(null);
      return;
    }
    setExpanded(userId);
    // Load submissions for this user
    if (!userSubmissions[userId]) {
      setLoadingSubs(userId);
      try {
        const res = await api(`/admin/user-requests/${userId}/submissions`);
        setUserSubmissions((prev) => ({ ...prev, [userId]: res.data || [] }));
      } catch {
        setUserSubmissions((prev) => ({ ...prev, [userId]: [] }));
      }
      setLoadingSubs(null);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api(`/admin/user-requests/${editItem.id}`, "PUT", editItem);
      toast.success("User request updated");
      setEditItem(null);
      load();
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleDelete = async (id: any) => {
    if (!confirm("Delete this user request and all their cart submissions?")) return;
    try {
      await api(`/admin/user-requests/${id}`, "DELETE");
      toast.success("Deleted");
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const filtered = data.filter((row) =>
    search === "" || columns.some((c) => String(row[c] ?? "").toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm w-[320px] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <button onClick={load} className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><RefreshCw size={16} className="text-gray-500" /></button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400"><RefreshCw size={24} className="animate-spin" /></div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((row) => (
            <div key={row.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors" onClick={() => toggleExpand(row.id)}>
                <div className="w-10 h-10 bg-[#1e3a5f]/5 rounded-full flex items-center justify-center shrink-0">
                  <Users size={18} className="text-[#1e3a5f]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1e3a5f] text-[15px]">{row.name || "—"}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {row.country || "—"} · Age {row.age || "—"} · {row.phone_number || "No phone"} · {row.email || "No email"} · {new Date(row.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setEditItem({ ...row })} className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(row.id)} className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                </div>
                {expanded === row.id ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </div>
              {expanded === row.id && (
                <div className="px-5 pb-4 pt-0 border-t border-gray-50">
                  {/* User details grid */}
                  <div className="grid grid-cols-2 gap-3 mt-3 mb-4">
                    {columns.map((c) => (
                      <div key={c} className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{c}</span>
                        <span className="text-sm text-[#1e3a5f] break-all">{String(row[c] ?? "—")}</span>
                      </div>
                    ))}
                  </div>

                  {/* Cart submissions section */}
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <ShoppingCart size={14} /> Cart Submissions
                    </p>
                    {loadingSubs === row.id ? (
                      <div className="flex items-center gap-2 py-3 text-gray-400 text-sm"><RefreshCw size={14} className="animate-spin" /> Loading...</div>
                    ) : (userSubmissions[row.id] || []).length === 0 ? (
                      <p className="text-sm text-gray-400 py-2">No cart submissions yet</p>
                    ) : (
                      <div className="space-y-2">
                        {(userSubmissions[row.id] || []).map((sub: any, idx: number) => (
                          <div key={sub.id || idx} className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <StatusBadge status={sub.status || "pending"} />
                                <span className="text-xs text-gray-500">
                                  {sub.created_at ? new Date(sub.created_at).toLocaleString() : "Legacy submission"}
                                </span>
                              </div>
                              {sub.total_amount > 0 && (
                                <span className="text-sm font-semibold text-[#1e3a5f]">₹{sub.total_amount.toLocaleString()}</span>
                              )}
                            </div>
                            <div className="space-y-1">
                              {(sub.cart_items || []).map((item: any, i: number) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                  <span className="text-[#1e3a5f]">{item.service_title || item.service_id}</span>
                                  {item.price_at_submission > 0 && (
                                    <span className="text-gray-500 text-xs">₹{item.price_at_submission.toLocaleString()}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center py-12 text-gray-400 text-sm">No user requests found</div>}
        </div>
      )}

      {editItem && (
        <Modal title={`Edit: ${editItem.name}`} onClose={() => setEditItem(null)} wide>
          <div className="grid grid-cols-2 gap-4">
            {columns.filter((c) => c !== "id" && c !== "created_at").map((c) => (
              <Field
                key={c}
                label={c}
                value={editItem[c]}
                onChange={(v) => setEditItem({ ...editItem, [c]: v })}
                type={c === "treatment_details" ? "textarea" : c === "age" || c.includes("budget") ? "number" : "text"}
              />
            ))}
          </div>
          <div className="flex gap-3 pt-5 mt-2 border-t border-gray-100">
            <SaveButton onClick={handleSave} loading={saving} />
            <DeleteButton onClick={() => { handleDelete(editItem.id); setEditItem(null); }} loading={false} />
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CART SUBMISSIONS TAB (replaces old Carts tab)
// ─────────────────────────────────────────────────────────────
const STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

function CartSubmissionsTab() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api("/admin/cart-submissions");
      setData(res.data || []);
    } catch (e: any) { toast.error(e.message); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const updateStatus = async (submissionId: string, newStatus: string) => {
    setSaving(true);
    try {
      await api(`/admin/cart-submissions/${submissionId}`, "PUT", { status: newStatus });
      toast.success(`Status updated to ${newStatus}`);
      // Update locally
      setData((prev) => prev.map((s) => s.id === submissionId ? { ...s, status: newStatus } : s));
    } catch (e: any) { toast.error(e.message); }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this cart submission and all its items?")) return;
    try {
      await api(`/admin/cart-submissions/${id}`, "DELETE");
      toast.success("Submission deleted");
      load();
    } catch (e: any) { toast.error(e.message); }
  };

  const filtered = data.filter((sub) => {
    const matchesSearch = search === "" ||
      (sub.user?.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (sub.user?.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (sub.user?.phone_number || "").toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || sub.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm w-[320px] focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40" placeholder="Search by user name, email, phone..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <select
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            <option value="legacy">Legacy</option>
          </select>
        </div>
        <button onClick={load} className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><RefreshCw size={16} className="text-gray-500" /></button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400"><RefreshCw size={24} className="animate-spin" /></div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((sub) => (
            <div key={sub.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors" onClick={() => setExpanded(expanded === sub.id ? null : sub.id)}>
                <div className="w-10 h-10 bg-[#64b6ac]/10 rounded-full flex items-center justify-center shrink-0">
                  <ShoppingCart size={18} className="text-[#64b6ac]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[#1e3a5f] text-[15px]">{sub.user?.name || "Unknown User"}</p>
                    <StatusBadge status={sub.status || "pending"} />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {sub.user?.email || sub.user?.phone_number || "No contact"} · {(sub.cart_items || []).length} item(s)
                    {sub.total_amount > 0 ? ` · ₹${sub.total_amount.toLocaleString()}` : ""}
                    {sub.created_at ? ` · ${new Date(sub.created_at).toLocaleString()}` : ""}
                  </p>
                </div>
                <div className="flex gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <select
                    className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#64b6ac]/40"
                    value={sub.status || "pending"}
                    onChange={(e) => updateStatus(sub.id, e.target.value)}
                    disabled={saving || sub.status === "legacy"}
                  >
                    {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <button onClick={() => handleDelete(sub.id)} className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                </div>
                {expanded === sub.id ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </div>
              {expanded === sub.id && (
                <div className="px-5 pb-4 pt-0 border-t border-gray-50">
                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Items in this submission</p>
                    <div className="space-y-1.5">
                      {(sub.cart_items || []).map((item: any, i: number) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5">
                          <span className="text-sm font-medium text-[#1e3a5f] flex-1">{item.service_title || item.service_id}</span>
                          <span className="text-xs text-gray-500">{item.service_id}</span>
                          {item.price_at_submission > 0 && (
                            <span className="text-xs font-medium text-[#1e3a5f]">₹{item.price_at_submission.toLocaleString()}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* User details */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">User Details</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div><span className="text-[10px] text-gray-400 uppercase">Name</span><p className="text-sm text-[#1e3a5f]">{sub.user?.name || "—"}</p></div>
                      <div><span className="text-[10px] text-gray-400 uppercase">Email</span><p className="text-sm text-[#1e3a5f]">{sub.user?.email || "—"}</p></div>
                      <div><span className="text-[10px] text-gray-400 uppercase">Phone</span><p className="text-sm text-[#1e3a5f]">{sub.user?.phone_number || "—"}</p></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center py-12 text-gray-400 text-sm">No cart submissions found</div>}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN ADMIN PANEL
// ─────────────────────────────────────────────────────────────
export default function Admin() {
  const [tab, setTab] = useState<Tab>("services");
  const [stats, setStats] = useState({
    hospitals: 0, services: 0, users: 0,
    cartSubmissions: 0, totalRevenue: 0, weeklySubmissions: 0, popularService: "—",
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await api("/admin/stats");
        setStats({
          hospitals: res.hospitals || 0,
          services: res.services || 0,
          users: res.users || 0,
          cartSubmissions: res.cartSubmissions || 0,
          totalRevenue: res.totalRevenue || 0,
          weeklySubmissions: res.weeklySubmissions || 0,
          popularService: res.popularService || "—",
        });
      } catch {
        // Fallback: fetch counts individually
        try {
          const [h, s, u, c] = await Promise.all([
            api("/admin/hospital-treatments").catch(() => ({ data: [] })),
            api("/admin/services").catch(() => ({ services: [] })),
            api("/admin/user-requests").catch(() => ({ data: [] })),
            api("/admin/cart-submissions").catch(() => ({ data: [] })),
          ]);
          setStats((prev) => ({
            ...prev,
            hospitals: h.data?.length || 0,
            services: s.services?.length || 0,
            users: u.data?.length || 0,
            cartSubmissions: c.data?.length || 0,
          }));
        } catch {}
      }
    })();
  }, [tab]);

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: "hospitals", label: "Hospital Treatments", icon: Hospital },
    { key: "services", label: "Services", icon: LayoutDashboard },
    { key: "users", label: "User Requests", icon: Users },
    { key: "submissions", label: "Cart Submissions", icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa]" data-page="admin">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-[#1e3a5f] transition-colors no-underline">
            <ArrowLeft size={18} />
          </Link>
          <div className="w-px h-6 bg-gray-200" />
          <div>
            <h1 className="text-lg font-bold text-[#1e3a5f] font-['General_Sans:Semibold',sans-serif]">Medbridge Admin</h1>
            <p className="text-xs text-gray-400">Manage hospital treatments, services, users & submissions</p>
          </div>
        </div>
        <Link to="/" className="text-sm text-[#64b6ac] font-medium hover:underline no-underline">
          View Site
        </Link>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[260px] bg-white border-r border-gray-100 min-h-[calc(100vh-73px)] p-4 flex flex-col gap-1 sticky top-[73px]">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all w-full text-left ${
                tab === t.key
                  ? "bg-[#1e3a5f] text-white shadow-lg shadow-[#1e3a5f]/20"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#1e3a5f]"
              }`}
            >
              <t.icon size={18} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard label="User Requests" value={stats.users} icon={Users} color="bg-[#1e3a5f]" />
            <StatCard label="Cart Submissions" value={stats.cartSubmissions} icon={ShoppingCart} color="bg-[#64b6ac]" />
            <StatCard label="This Week" value={stats.weeklySubmissions} icon={Calendar} color="bg-[#f5a623]" />
            <StatCard label="Most Popular" value={stats.popularService} icon={Star} color="bg-[#FF6F61]" />
          </div>

          {/* Tab content */}
          {tab === "hospitals" && <HospitalTreatmentsTab />}
          {tab === "services" && <ServicesTab />}
          {tab === "users" && <UserRequestsTab />}
          {tab === "submissions" && <CartSubmissionsTab />}
        </div>
      </div>
    </div>
  );
}
