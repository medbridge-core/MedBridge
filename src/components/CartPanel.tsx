import svgPaths from "../imports/svg-2e3tcll3ez";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useCurrency } from "./CurrencyContext";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { toast } from "sonner";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-3079ee5f`;

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items, userInfo, removeItem, clearCart, itemCount } = useCart();
  const { formatPrice } = useCurrency();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill from context when opened
  const effectiveName = name || userInfo?.name || "";
  const effectivePhone = phone || userInfo?.phone || "";
  const effectiveEmail = email || userInfo?.email || "";

  const handleSubmit = async () => {
    if (items.length === 0) {
      toast.error("Please add at least one service to your cart");
      return;
    }

    const finalName = effectiveName.trim();
    const finalPhone = effectivePhone.trim();
    const finalEmail = effectiveEmail.trim();

    if (!finalName) {
      toast.error("Please enter your name");
      return;
    }
    if (!finalEmail && !finalPhone) {
      toast.error("Please provide an email or phone number");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        userInfo: {
          name: finalName,
          email: finalEmail,
          phone: finalPhone,
          age: userInfo?.age,
          country: userInfo?.country,
          budget: userInfo?.budget,
          locationPreference: userInfo?.locationPreference,
          treatmentDetails: userInfo?.treatmentDetails,
          submissionId: userInfo?.submissionId,
        },
        services: items.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          category: item.category,
        })),
      };

      console.log("Submitting cart:", payload);
      const res = await fetch(`${API_BASE}/cart/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Cart submit response:", data);

      if (!res.ok) {
        toast.error(data.error || "Failed to submit cart");
        setIsSubmitting(false);
        return;
      }

      toast.success(`Request submitted with ${data.servicesCount} services!`);
      setSubmitted(true);
      clearCart();
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Cart submit error:", err);
      toast.error("Failed to submit. Please try again.");
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  const hasUserDetails = !!userInfo?.submissionId;
  const canSubmit = items.length > 0 && !isSubmitting;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.7)] z-40"
        onClick={onClose}
      />
      {/* Side Panel */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="absolute bg-[#fafcfc] h-screen overflow-hidden right-0 top-0 w-[400px] shadow-2xl pointer-events-auto flex flex-col">
          {/* Header */}
          <div className="bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[24px] py-[20px] shrink-0">
            <div className="content-stretch flex items-center justify-between w-full">
              <div className="content-stretch flex gap-[12px] items-center">
                <div className="backdrop-blur-[22px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[9px] rounded-[1000px] size-[38px]">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p21130200} fill="#64B6AC" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start justify-center leading-[normal] not-italic text-nowrap whitespace-pre">
                  <p className="text-[#1e3a5f] text-[16px] tracking-[-0.32px]">Your Cart</p>
                  <p className="text-[#78899f] text-[12px] tracking-[-0.24px]">
                    ({itemCount} Service{itemCount !== 1 ? "s" : ""})
                  </p>
                </div>
              </div>
              <div
                className="backdrop-blur-[22px] backdrop-filter box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[9px] rounded-[1000px] size-[38px] cursor-pointer hover:bg-white/10 transition-colors"
                onClick={onClose}
              >
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1bfd1d40} fill="#64B6AC" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[16px]">
            {items.length === 0 && !submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-[16px] text-center">
                <div className="relative size-[48px] opacity-30">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p21130200} fill="#1e3a5f" />
                  </svg>
                </div>
                <p className="font-['General_Sans:Medium',sans-serif] text-[#78899f] text-[16px]">Your cart is empty</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#98a1ae] text-[14px]">
                  Browse services and click "+Add" to get started
                </p>
              </div>
            ) : submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-[16px] text-center">
                <div className="size-[48px] bg-[rgba(100,182,172,0.2)] rounded-full flex items-center justify-center">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="#64b6ac" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-['General_Sans:Medium',sans-serif] text-[#1e3a5f] text-[18px]">Request Submitted!</p>
                <p className="font-['General_Sans:Regular',sans-serif] text-[#78899f] text-[14px]">
                  We'll reach out shortly with pricing details.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-[12px]">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-[10px] relative">
                    <div className="box-border flex gap-[12px] items-center p-[16px]">
                      {/* Service icon */}
                      <div className="bg-[rgba(245,230,211,0.5)] overflow-clip rounded-[8px] shrink-0 size-[52px]">
                        <div className="flex items-center justify-center size-full">
                          <img
                            alt=""
                            className="max-w-none object-cover size-[44px]"
                            src={item.image}
                          />
                        </div>
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-['General_Sans:Medium',sans-serif] text-[#1e3a5f] text-[14px] tracking-[-0.28px] truncate">
                          {item.title}
                        </p>
                        <p className="font-['General_Sans:Regular',sans-serif] text-[#78899f] text-[12px] tracking-[-0.24px] mt-[2px]">
                          {item.category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </p>
                        <p className="font-['General_Sans:Medium',sans-serif] text-[#1e3a5f] text-[14px] mt-[4px]">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      {/* Remove */}
                      <div
                        className="cursor-pointer p-[5px] rounded-full hover:bg-gray-100 transition-colors shrink-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <div className="relative size-[14px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d={svgPaths.p12dc9b00} fill="#78899F" fillOpacity="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(26,54,93,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom form area */}
          {!submitted && (
            <div className="bg-white shrink-0 border-t-2 border-[rgba(100,182,172,0.5)]">
              <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">
                {/* User info header */}
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['General_Sans:Medium',sans-serif] text-[#1a365d] text-[16px] tracking-[-0.32px]">
                    {hasUserDetails
                      ? "Your details (from form)"
                      : "Fill in your details to confirm your request"}
                  </p>
                  <p className="font-['General_Sans:Regular',sans-serif] text-[#1a365d] text-[12px] tracking-[-0.24px]">
                    {hasUserDetails
                      ? "Linked to your hospital match request"
                      : "Just a few details, we'll reach out shortly with pricing."}
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="flex gap-[12px]">
                  <div className="flex-1 bg-white h-[44px] relative rounded-[10px]">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={effectiveName}
                      onChange={(e) => setName(e.target.value)}
                      disabled={hasUserDetails}
                      className="box-border w-full h-full px-[12px] font-['General_Sans:Regular',sans-serif] text-[#1a365d] text-[14px] bg-transparent border-none outline-none placeholder:text-[#909cb0] disabled:opacity-60"
                    />
                    <div aria-hidden="true" className="absolute border border-[rgba(26,54,93,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                  <div className="flex-1 bg-white h-[44px] relative rounded-[10px]">
                    <div className="flex items-center h-full px-[12px] gap-[8px]">
                      <span className="font-['General_Sans:Regular',sans-serif] text-[#909cb0] text-[14px] opacity-60 shrink-0">+91</span>
                      <div className="h-[18px] w-px bg-[#BDC5D0] opacity-30 shrink-0" />
                      <input
                        type="tel"
                        placeholder="Contact"
                        value={effectivePhone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={hasUserDetails}
                        className="w-full font-['General_Sans:Regular',sans-serif] text-[#1a365d] text-[14px] bg-transparent border-none outline-none placeholder:text-[#909cb0] disabled:opacity-60"
                      />
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(26,54,93,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white h-[44px] relative rounded-[10px]">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={effectiveEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    className="box-border w-full h-full px-[12px] font-['General_Sans:Regular',sans-serif] text-[#1a365d] text-[14px] bg-transparent border-none outline-none placeholder:text-[#909cb0]"
                  />
                  <div aria-hidden="true" className="absolute border border-[rgba(26,54,93,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`h-[52px] relative rounded-[10px] w-full transition-colors ${
                    canSubmit
                      ? "bg-[#64b6ac] cursor-pointer hover:bg-[#5aa89e]"
                      : "bg-[#e8eaee] cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-center justify-center size-full gap-[5px]">
                    <p
                      className={`font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[16px] ${
                        canSubmit ? "text-white" : "text-[#98a1ae]"
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </p>
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p3c712400} fill={canSubmit ? "white" : "#98A1AE"} />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
