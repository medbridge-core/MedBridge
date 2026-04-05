import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "./svg-1enfdn7m2b";
import imgImage20 from "figma:asset/a99b2452392c39949d7b54c639f2e1542885af3f.png";
import imgImage1466 from "figma:asset/41786f3cd747d4d68ee8ce60376229ebec309309.png";
import imgImage1467 from "figma:asset/e477a76040dd1f967642d9624f7183e7615ba08a.png";
import imgImage1468 from "figma:asset/6368a3afec0869ceea29c91e8d1925bee0b7cf59.png";
import imgImage1469 from "figma:asset/427900dfa57677d764fcc5dfff3fc0db3345c14f.png";
import imgImage1470 from "figma:asset/181d5d306c64e6e3012f43a50ce2381885b7620f.png";
import imgImage1471 from "figma:asset/9cf7fa0b3f1729fc666090c58a7d2cf746ad9b99.png";
import imgImage1525 from "figma:asset/b3466d39fd5edead348c97860f105a911c5d2f90.png";
import imgImage1526 from "figma:asset/a668c4178d51d0cadafbbc071e27a75fac9afaf2.png";
import imgImage1527 from "figma:asset/bd99f0637dd3e271c051414b16d1ba82f4a91539.png";
import imgImage1528 from "figma:asset/b736b456c053b68f81d360e634a52445eb91fc2d.png";
import imgImage1482 from "figma:asset/7fc9eff3ec920ad1972c80658d703f5db63e5822.png";
import imgImage1483 from "figma:asset/09262ddf016a0f9f8a28696dc848abb553b1e2e6.png";
import imgImage1484 from "figma:asset/aff0aa84505ae4304f8b34e5e08132c09deee3bc.png";
import imgImage1485 from "figma:asset/c7eafe11d0502f71902debea6fbc04199d2a2cbd.png";
import imgFrame218 from "figma:asset/6dfd9cc4deae204d93416dbfa013a40e6fb67d63.png";
import imgFrame219 from "figma:asset/8715b60a9bcab9b124f86dd12a71aa9a93f149f2.png";
import imgFrame220 from "figma:asset/e078b7604f14c571480069b10a5165737b74ea24.png";
import imgFrame221 from "figma:asset/c729d7cdd899cc15aad50f2fd46c3c1e5fff626d.png";
import imgPngwingCom181 from "figma:asset/c4394d9fa56776a14cbb95906e4f138571834926.png";
import FormSection from "../components/FormSection";
import { useCart } from "../components/CartContext";
import { useCurrency } from "../components/CurrencyContext";
import { toast } from "sonner@2.0.3";

function PriceText({ price }: { price: string }) {
  const { formatPrice } = useCurrency();
  return <>{formatPrice(price)}</>;
}

function HomeAddButton({ serviceId, title, category, image, price }: { serviceId: string; title: string; category: string; image: string; price: string }) {
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(serviceId);
  
  if (inCart) {
    return (
      <div className="bg-[rgba(220,80,70,0.1)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] py-[6px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[rgba(220,80,70,0.2)] transition-colors" onClick={() => { removeItem(serviceId); toast.success(`${title} removed from cart`); }}>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#dc5046] text-[18px] text-nowrap tracking-[0.4px] whitespace-pre">Remove</p>
      </div>
    );
  }
  return (
    <div className="bg-[rgba(100,182,172,0.1)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] py-[6px] relative rounded-[50px] shrink-0 cursor-pointer hover:bg-[rgba(100,182,172,0.2)] transition-colors" onClick={() => { addItem({ id: serviceId, title, description: "Comfy Ride from airport to hotel", price, category, image }); toast.success(`${title} added to cart`); }}>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#50afa3] text-[20px] text-nowrap tracking-[0.4px] whitespace-pre">+Add</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[35.264px] relative shrink-0 w-[157.694px]">
      <div className="absolute left-[11.8px] size-[12.229px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p2101aa00} fill="var(--fill-0, #FF6F61)" id="Rectangle 13" />
        </svg>
      </div>
      <div className="absolute left-[24.03px] size-[12.229px] top-[12.23px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.p29f4f8b0} fill="var(--fill-0, #64B6AC)" id="Rectangle 12" />
        </svg>
      </div>
      <div className="absolute h-[10.807px] left-[12.23px] top-[24.46px] w-[11.802px]">
        <div className="absolute bottom-0 left-[0.22%] right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.p2604e600} fill="var(--fill-0, #1E3A5F)" id="Polygon 2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[10.807px] items-center justify-center left-0 top-[12.23px] w-[11.802px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[10.807px] relative w-[11.802px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
              <path d={svgPaths.pd076000} fill="var(--fill-0, #1E3A5F)" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] left-[41.95px] text-[#1e3a5f] text-[24.237px] text-nowrap top-[1.36px] tracking-[-0.4847px] whitespace-pre">medbridge</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "38", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[38px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 1">
                <line id="Line 5" opacity="0.4" stroke="var(--stroke-0, #1E3A5F)" x2="38" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[0px] text-[14px] tracking-[-0.28px] w-[342px] whitespace-pre-wrap">
        <span>
          {`Bridging  patients worldwide with `}
          <br aria-hidden="true" />
        </span>
        India’s best doctors<span className="text-[#8bbcdd]"> </span>
      </p>
    </div>
  );
}

function CurrencyDropdown() {
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
        <div className="h-[19px] relative shrink-0 w-[29px]" data-name="image 20">
          <img alt={currency === "INR" ? "Indian Flag" : "US Flag"} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={currency === "INR" ? imgImage20 : "https://flagcdn.com/w40/us.png"} />
        </div>
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "18.859375", "--transform-inner-height": "0.5" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-[0.5px] relative w-[18.872px]">
              <div className="absolute inset-[-99.96%_-0.07%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                  <path d={svgPaths.p307b00} id="Line 22" opacity="0.2" stroke="var(--stroke-0, #1E3A5F)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">{currency}</p>
        <div className="relative shrink-0 size-[12px]" data-name="CaretCircleDown">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="CaretCircleDown">
              <path d={svgPaths.p3c150ff0} fill="var(--fill-0, #1E3A5F)" id="Vector" />
            </g>
          </svg>
        </div>
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <CurrencyDropdown />
    </div>
  );
}

function ShoppingCartSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ShoppingCartSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ShoppingCartSimple">
          <path d={svgPaths.p21130200} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="backdrop-blur-[22px] backdrop-filter bg-[#e8eaee] box-border content-stretch flex gap-[10px] items-center overflow-clip p-[9px] relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#d8dadf] transition-colors"
      onClick={onClick}
    >
      <ShoppingCartSimple />
    </div>
  );
}

function Frame18({ onCartClick }: { onCartClick?: () => void }) {
  const { itemCount } = useCart();
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame19 />
      <div className="relative">
        <Frame17 onClick={onCartClick} />
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
  );
}

function Frame104({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[80px] top-[63px] w-[1264px]">
      <Frame12 />
      <Frame18 onCartClick={onCartClick} />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[0px] text-[32px] text-nowrap text-white tracking-[-0.64px] whitespace-pre">
        <p className="mb-0">
          <span className="font-['General_Sans:Medium',sans-serif] not-italic text-white tracking-[-0.64px]">Find</span>
          <span className="font-['General_Sans:Light',sans-serif] not-italic"> </span>the Right Hospital,{" "}
        </p>
        <p>Instantly using</p>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] min-w-full not-italic opacity-80 relative shrink-0 text-[16px] text-white tracking-[0.32px] w-[min-content]">{`100% verified doctors & hospitals only`}</p>
      <div className="absolute h-[24.436px] left-[210px] top-[52.33px] w-[57.999px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 25">
          <path d={svgPaths.p14620200} fill="url(#paint0_linear_18_464)" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18_464" x1="-54.1733" x2="63.9466" y1="34.3667" y2="2.71202">
              <stop stopColor="#038DFE" />
              <stop offset="1" stopColor="#0BE0FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[15.994px] items-center p-[16px] relative size-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-90 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <path d={svgPaths.pe4a8700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Age</p>
          <CaretDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <path d={svgPaths.pe4a8700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Country</p>
          <CaretDown1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">+91</p>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="CaretDown">
          <path d={svgPaths.p186d2d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame145 />
      <CaretDown2 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame146 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "18", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[18px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 1">
                <line id="Line 49" opacity="0.3" stroke="var(--stroke-0, white)" x2="18" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">9820002025932323</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[15.994px] items-center p-[16px] relative size-full">
          <Frame147 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame8 />
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <path d={svgPaths.pe4a8700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Budget</p>
          <CaretDown3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CaretDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretDown">
          <path d={svgPaths.pe4a8700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic opacity-80 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Location</p>
          <CaretDown4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[12.795px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[25.591px] min-h-px min-w-px not-italic opacity-80 relative shrink-0 text-[16px] text-white">Enter details about your treatment - condition, ongoing treatment etc...</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(245,245,245,0.07)] h-[84px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[15.994px] h-[84px] items-center p-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame67 />
      <Frame68 />
      <Frame86 />
      <Frame5 />
    </div>
  );
}

function CaretCircleRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretCircleRight">
          <path d={svgPaths.p3c712400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#64b6ac] h-[52px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[5px] h-[52px] items-center justify-center px-[40px] py-[13px] relative w-full">
          <div className="h-[16.668px] relative shrink-0 w-[208.361px]" data-name="Union">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 17">
              <path d={svgPaths.p1544b580} fill="var(--fill-0, white)" id="Union" />
            </svg>
          </div>
          <CaretCircleRight />
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame 280">
          <path d={svgPaths.p13b93e00} fill="url(#paint0_linear_18_435)" id="Vector" />
          <path d={svgPaths.p23e5a550} fill="url(#paint1_linear_18_435)" id="Vector_2" />
          <path d={svgPaths.p3d6df00} fill="url(#paint2_linear_18_435)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_18_435" x1="3.70361" x2="20.983" y1="15.2724" y2="13.2878">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_18_435" x1="1.17729e-07" x2="8.63956" y1="6.71008" y2="5.71791">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_18_435" x1="1.66699" x2="9.12829" y1="18.7581" y2="17.9012">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
      <Frame123 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic opacity-90 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Matches generated in under 30 seconds.</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <Frame7 />
      <Frame160 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame21 />
      <Frame144 />
      <Frame143 />
    </div>
  );
}

function Frame102() {
  return <FormSection />;
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Light',sans-serif] relative shrink-0 text-[#1a365d] text-[0px] text-[32px] tracking-[-0.64px]">
        <span className="font-['General_Sans:Medium',sans-serif] not-italic">Plan</span> <span className="font-['General_Sans:Regular',sans-serif] not-italic">your Care, at Every Step</span>
      </p>
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px]">{`Most booked services, based on 1,000+ patient journeys. `}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[56px] grow items-end min-h-px min-w-px relative shrink-0">
      <Frame127 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.13%] left-[-5.21%] max-w-none top-0 w-full" src={imgImage1466} />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame27 />
      <HomeAddButton serviceId="Medical Visa" title="Medical Visa" category="pre-arrival" image={imgImage1466} price="₹4000" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">Medical Visa</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame69 />
      <Frame41 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame71 />
    </div>
  );
}

function ServiceCard() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame70 />
          <Frame72 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1467} />
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame29 />
      <HomeAddButton serviceId="Med X Visa" title="Med X Visa" category="pre-arrival" image={imgImage1467} price="₹4000" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">Med X Visa</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame90 />
      <Frame42 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame89 />
          <Frame92 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1468} />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame31 />
      <HomeAddButton serviceId="Flight Tickets" title="Flight Tickets" category="pre-arrival" image={imgImage1468} price="₹4000" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">Flight Tickets</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame94 />
      <Frame43 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame97 />
    </div>
  );
}

function ServiceCard2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame93 />
          <Frame98 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <ServiceCard />
      <ServiceCard1 />
      <ServiceCard2 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1469} />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame33 />
      <HomeAddButton serviceId="Accommodation" title="Accommodation" category="on-arrival" image={imgImage1469} price="₹4000" />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">Accommodation</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame105 />
      <Frame46 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame106 />
    </div>
  );
}

function ServiceCard3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame99 />
          <Frame107 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1470} />
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame35 />
      <HomeAddButton serviceId="Airport Pickup & Drop" title="Pickup & Drop" category="on-arrival" image={imgImage1470} price="₹4000" />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">{`Pickup & Drop`}</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame109 />
      <Frame47 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame110 />
    </div>
  );
}

function ServiceCard4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame108 />
          <Frame111 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] overflow-clip relative rounded-[10px] shrink-0 size-[64px]">
      <div className="absolute h-[49px] left-1/2 top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[50px]" data-name="image 1466">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1471} />
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame37 />
      <HomeAddButton serviceId="Translator /- Day" title="Translator" category="post-treatment" image={imgImage1471} price="₹4000" />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] tracking-[0.36px] w-full">{`Translator `}</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[0.32px] whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0">From</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0"><PriceText price="₹4000" /></p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame114 />
      <Frame48 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame116 />
    </div>
  );
}

function ServiceCard5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Service Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Frame113 />
          <Frame117 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,58,95,0.08)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <ServiceCard3 />
      <ServiceCard4 />
      <ServiceCard5 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame112 />
      <Frame115 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame95 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="absolute bg-[#faf2e9] left-0 rounded-[10000px] size-[52px] top-0">
      <div className="overflow-clip relative rounded-[inherit] size-[52px]">
        <div className="absolute h-[40px] left-[5px] top-[6.15px] w-[42px]" data-name="image 1525">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1525} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10000px]" />
    </div>
  );
}

function Frame151() {
  return (
    <div className="absolute bg-[#faf2e9] left-[36px] rounded-[10000px] size-[52px] top-0">
      <div className="overflow-clip relative rounded-[inherit] size-[52px]">
        <div className="absolute h-[41px] left-[5px] top-[6.15px] w-[42px]" data-name="image 1526">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1526} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10000px]" />
    </div>
  );
}

function Frame152() {
  return (
    <div className="absolute bg-[#faf2e9] left-[72px] rounded-[10000px] size-[52px] top-0">
      <div className="overflow-clip relative rounded-[inherit] size-[52px]">
        <div className="absolute h-[36px] left-[8px] top-[8.15px] w-[37px]" data-name="image 1527">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1527} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10000px]" />
    </div>
  );
}

function Frame153() {
  return (
    <div className="h-[52px] relative shrink-0 w-[124px]">
      <Frame150 />
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame153 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "52", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[52px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                <line id="Line 50" stroke="var(--stroke-0, #6D7F97)" strokeOpacity="0.2" x2="52" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] text-nowrap tracking-[0.4px] whitespace-pre">
        <span className="font-['General_Sans:Medium',sans-serif]">+ 20 more services</span>
        <span>
          <br aria-hidden="true" />
        </span>
        all under one roof
      </p>
    </div>
  );
}

function Frame11() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="h-[52px] relative shrink-0 w-[242.662px] cursor-pointer"
      onClick={() => navigate('/all-services')}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243 52">
        <g id="Frame 71">
          <rect fill="var(--fill-0, #64B6AC)" height="52" rx="10" width="242.662" />
          <path d={svgPaths.p31336ff1} fill="var(--fill-0, white)" id="Union" />
          <g id="CaretCircleRight">
            <path d={svgPaths.p7ac5600} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame148 />
      <Frame11 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="bg-[rgba(100,182,172,0.08)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(100,182,172,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
          <Frame149 />
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative rounded-[16px] shrink-0">
      <Frame96 />
      <Frame154 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center left-[80px] top-[157px] w-[1280px]">
      <Frame102 />
      <Frame101 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1a365d] text-[0px] text-[32px] tracking-[-0.64px] w-full">
        <p className="mb-0">
          Track<span className="font-['General_Sans:Semibold',sans-serif] not-italic"> </span>
          <span className="font-['General_Sans:Regular',sans-serif] not-italic">{`your entire journey, `}</span>
        </p>
        <p className="font-['General_Sans:Regular',sans-serif]">in one dashboard</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[460px]">
      <Frame140 />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[5px] size-[14px] top-[5px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check">
          <path d={svgPaths.pecc8300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-[#64b6ac] overflow-clip relative rounded-[10000px] shrink-0 size-[24px]">
      <Check />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame155 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Manage Appointments</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute left-[5px] size-[14px] top-[5px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check">
          <path d={svgPaths.pecc8300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-[#64b6ac] overflow-clip relative rounded-[10000px] shrink-0 size-[24px]">
      <Check1 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame161 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Track Medical History</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="absolute left-[5px] size-[14px] top-[5px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check">
          <path d={svgPaths.pecc8300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#64b6ac] overflow-clip relative rounded-[10000px] shrink-0 size-[24px]">
      <Check2 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame157 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">Manage Service Bookings</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame156 />
      <Frame159 />
      <Frame158 />
    </div>
  );
}

function Clock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Clock">
          <path d={svgPaths.p383a7800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Coming Soon!</p>
      <Clock />
    </div>
  );
}

function Frame139() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[16px] py-[10px] relative rounded-[4px] shrink-0 bg-[rgba(100,182,172,0.6)]">
      <Frame136 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame141 />
      <Frame162 />
      <Frame139 />
      <div className="absolute h-[303px] left-[765px] rounded-[10px] shadow-[0px_4px_34px_12px_rgba(0,0,0,0.04)] top-0 w-[516px]" data-name="image 1528">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImage1528} />
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="absolute bg-[rgba(245,230,211,0.5)] left-[80px] rounded-[8px] top-[798px] w-[1280px]">
      <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[40px] py-[32px] relative rounded-[inherit] w-[1280px]">
        <Frame142 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">
        <span className="font-['General_Sans:Regular',sans-serif]">Why</span>
        <span>{` Medbridge?`}</span>
      </p>
    </div>
  );
}

function Faders() {
  return (
    <div className="absolute left-1/2 size-[33px] top-[calc(50%-0.75px)] translate-x-[-50%] translate-y-[-50%]" data-name="Faders">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Faders">
          <path d={svgPaths.p39909200} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Faders />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e3a5f] w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[28px] tracking-[-0.56px] w-full">
        <span className="not-italic text-[rgba(30,58,95,0.7)]">Pick what you</span>
        <span>{` need`}</span>
      </p>
      <div className="font-['General_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] tracking-[0.32px] w-full">
        <p className="mb-0">{`Only pick the services what you need and `}</p>
        <p>no unnecessary addons</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-0 overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame54 />
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute left-[13.5px] size-[33px] top-[13.5px]" data-name="Tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Tag">
          <path d={svgPaths.p17406800} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Tag />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e3a5f] w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[28px] tracking-[-0.56px] w-full">
        <span className="not-italic text-[rgba(30,58,95,0.7)]">Transparent</span>
        <span>{` Pricing`}</span>
      </p>
      <div className="font-['General_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] tracking-[0.32px] w-full">
        <p className="mb-0">{`Only pick the services what you need and `}</p>
        <p>no unnecessary addons</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-[435px] overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame59 />
    </div>
  );
}

function Handshake() {
  return (
    <div className="absolute left-1/2 size-[33px] top-[calc(50%-0.75px)] translate-x-[-50%] translate-y-[-50%]" data-name="Handshake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Handshake">
          <path d={svgPaths.p20f22f80} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Handshake />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#1e3a5f] w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[28px] tracking-[-0.56px] w-full">
        <span className="text-[rgba(30,58,95,0.7)]">Verified</span>
        <span>{` Partners`}</span>
      </p>
      <div className="font-['General_Sans:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] tracking-[0.32px] w-full">
        <p className="mb-0">{`Only pick the services what you need and `}</p>
        <p>no unnecessary addons</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-[869px] overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame62 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[231px] items-center justify-center px-[10px] py-0 relative shrink-0">
      <Frame49 />
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[1280px]">
      <Frame24 />
      <Frame55 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic opacity-60 relative shrink-0 text-[#1e3a5f] text-[20px] text-center tracking-[0.4px] w-[697px]">We remove the uncertainty of agency-based bookings — offering transparent, flexible, and verified service options designed around you.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">
        <span className="font-['General_Sans:Regular',sans-serif]">Word from our</span> <span className="text-[#1a365d]">trusted clients</span>
      </p>
      <Frame26 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[124px] items-start justify-center relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] w-full">
      <p className="relative shrink-0 text-[32px] tracking-[-0.64px] w-full">Smoother</p>
      <p className="opacity-60 relative shrink-0 text-[24px] tracking-[-0.48px] w-full">coordination and faster treatment access</p>
    </div>
  );
}

function Quotes() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Quotes">
          <path d={svgPaths.p1a814080} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[171px] items-start relative shrink-0 w-full">
      <Quotes />
      <p className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[normal] min-h-px min-w-full not-italic relative shrink-0 text-[#1e3a5f] text-[20px] tracking-[0.4px] w-[min-content]">Medbridge made everything effortless. From finding the right hospital to handling my visa and airport pickup — everything was organized for me. I got my surgery scheduled in just a week, something that used to take months back home.</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame80 />
      <Frame79 />
    </div>
  );
}

function Frame83() {
  return <div className="rounded-[1000px] shrink-0 size-[72px] overflow-hidden"><img alt="David Callahan" src="https://images.unsplash.com/photo-1764084051438-369ad6a09334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQ4MTc3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080" className="size-full object-cover" /></div>;
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[20px] tracking-[-0.4px] w-[132px]">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-nowrap whitespace-pre">David Callahan</p>
      <p className="font-['General_Sans:Regular',sans-serif] min-w-full relative shrink-0 text-black w-[min-content]">Cancer Patient</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame85 />
      <div className="h-[35px] relative rounded-[3px] shrink-0 w-[52px]" data-name="image 1482">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImage1482} />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start justify-between overflow-clip px-[32px] py-[40px] relative rounded-[32px] shrink-0 w-[628px]">
      <Frame81 />
      <Frame87 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[546px]">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[0px] text-[24px] tracking-[-0.48px] w-full">
        <span>{`More confidence `}</span>
        <span className="text-[rgba(30,58,95,0.4)]">in choosing the right hospital</span>
      </p>
    </div>
  );
}

function Quotes1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Quotes">
          <path d={svgPaths.p1a814080} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[546px]">
      <Quotes1 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-[min-content]">I was unsure where to go for my treatment in India, but Medbridge helped match me with the best hospitals for my budget. Their support team stayed connected through every step.</p>
    </div>
  );
}

function Frame121() {
  return <div className="rounded-[1000px] shrink-0 size-[52px] overflow-hidden"><img alt="Sarah Mitchell" src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzQ4MTc3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" className="size-full object-cover" /></div>;
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] w-[132px]">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-nowrap whitespace-pre">Sarah Mitchell</p>
      <p className="font-['General_Sans:Regular',sans-serif] min-w-full opacity-60 relative shrink-0 text-black w-[min-content]">Cancer Patient</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[350px]">
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame88 />
      <div className="h-[27px] relative rounded-[3px] shrink-0 w-[40px]" data-name="image 1482">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImage1483} />
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[32px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start justify-center px-[41px] py-[40px] relative size-full">
          <Frame119 />
          <Frame120 />
          <Frame125 />
        </div>
      </div>
    </div>
  );
}

function Quotes2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Quotes">
          <path d={svgPaths.p1a814080} fill="var(--fill-0, #FF6F61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[24px] top-[34.5px] w-[254px]">
      <Quotes2 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-[min-content]">What stood out to me was the transparency — no hidden costs, no middlemen. The prices and services were clearly shown.</p>
    </div>
  );
}

function Frame128() {
  return <div className="rounded-[1000px] shrink-0 size-[52px] overflow-hidden"><img alt="Tom Becker" src="https://images.unsplash.com/photo-1764084051711-45a3b7c84c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDgxNzcxMnww&ixlib=rb-4.1.0&q=80&w=1080" className="size-full object-cover" /></div>;
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] w-[132px]">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-nowrap whitespace-pre">Tom Becker</p>
      <p className="font-['General_Sans:Regular',sans-serif] min-w-full relative shrink-0 text-black w-[min-content]">Cancer Patient</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[24px] top-[230.5px]">
      <Frame128 />
      <Frame129 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px overflow-clip relative rounded-[32px] shrink-0">
      <Frame126 />
      <Frame130 />
      <div className="absolute h-[26px] left-[238px] rounded-[3px] top-[244.5px] w-[40px]" data-name="image 1482">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImage1484} />
      </div>
    </div>
  );
}

function Quotes3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Quotes">
          <path d={svgPaths.p1a814080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[24px] top-[34.5px] w-[254px]">
      <Quotes3 />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-white tracking-[0.32px] w-[min-content]">The Medbridge team was incredible. They arranged my doctor consultations, accommodation, and post-surgery care.</p>
    </div>
  );
}

function Frame132() {
  return <div className="rounded-[1000px] shrink-0 size-[52px] overflow-hidden"><img alt="Amira Khan" src="https://images.unsplash.com/photo-1767607186442-dd719b6c645f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDgxNzcxM3ww&ixlib=rb-4.1.0&q=80&w=1080" className="size-full object-cover" /></div>;
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-[132px]">
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-nowrap whitespace-pre">Amira Khan</p>
      <p className="font-['General_Sans:Regular',sans-serif] min-w-full opacity-60 relative shrink-0 w-[min-content]">Cancer Patient</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[24px] top-[230.5px]">
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="basis-0 bg-[#ff6f61] grow h-full min-h-px min-w-px overflow-clip relative rounded-[32px] shrink-0">
      <Frame131 />
      <Frame134 />
      <div className="absolute h-[26px] left-[238px] rounded-[3px] top-[244.5px] w-[40px]" data-name="image 1482">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[3px] size-full" src={imgImage1485} />
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[637px] items-start relative shrink-0 w-[628px]">
      <Frame74 />
      <Frame77 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame73 />
      </div>
      <Frame135 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-[#f6f7f9] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[41px] items-start px-[80px] py-[64px] relative w-full">
          <Frame118 />
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[50.986px] relative shrink-0 w-[228px]">
      <div className="absolute left-[17.06px] size-[17.681px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p26d7b780} fill="var(--fill-0, #FF6F61)" id="Rectangle 13" />
        </svg>
      </div>
      <div className="absolute left-[34.74px] size-[17.681px] top-[17.68px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p2e33c100} fill="var(--fill-0, #64B6AC)" id="Rectangle 12" />
        </svg>
      </div>
      <div className="absolute h-[15.625px] left-[17.68px] top-[35.36px] w-[17.064px]">
        <div className="absolute bottom-0 left-[0.22%] right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.p2a8a6f00} fill="var(--fill-0, #1E3A5F)" id="Polygon 2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[15.625px] items-center justify-center left-0 top-[17.68px] w-[17.064px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[15.625px] relative w-[17.064px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
              <path d={svgPaths.p1d1c29c0} fill="var(--fill-0, #1E3A5F)" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] left-[60.65px] text-[#1e3a5f] text-[35.043px] text-nowrap top-[1.97px] tracking-[-0.7009px] whitespace-pre">medbridge</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[23.133px] items-center left-[80px] top-[64px]">
      <Frame1 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[80px] top-[548px]">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">Copyrights © 2025️</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "21", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[21px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 1">
                <line id="Line 25" opacity="0.2" stroke="var(--stroke-0, black)" x2="21" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">Medbridge</p>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "21", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[21px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 1">
                <line id="Line 25" opacity="0.2" stroke="var(--stroke-0, black)" x2="21" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-center text-nowrap tracking-[0.32px] whitespace-pre">All rights reserved</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute left-[1058px] rounded-[100px] size-[48px] top-[231px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-black inset-0 rounded-[100px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[70.83%] left-[-9.5%] max-w-none top-[14.58%] w-[119%]" src={imgFrame218} />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute left-[1118px] rounded-[100px] size-[48px] top-[231px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame219} />
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute left-[1178px] rounded-[100px] size-[48px] top-[231px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-[#3b579d] inset-0 rounded-[100px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute left-[-2.08%] max-w-none size-[85.59%] top-[14.41%]" src={imgFrame220} />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute left-[1235px] rounded-[100px] size-[54px] top-[228px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <img alt="" className="absolute left-[-5.96%] max-w-none size-[112.66%] top-[-4.1%]" src={imgFrame221} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] h-[618px] overflow-clip relative shrink-0 w-[1440px]">
      <Frame13 />
      <Frame56 />
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[normal] left-[135.5px] not-italic text-[24px] text-black text-center text-nowrap top-[172px] tracking-[0.48px] translate-x-[-50%] whitespace-pre">Company</p>
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[normal] left-[492.5px] not-italic text-[24px] text-black text-center text-nowrap top-[172px] tracking-[0.48px] translate-x-[-50%] whitespace-pre">For Customers</p>
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[normal] left-[825px] not-italic text-[24px] text-black text-center text-nowrap top-[172px] tracking-[0.48px] translate-x-[-50%] whitespace-pre">For Professional</p>
      <p className="absolute font-['General_Sans:Medium',sans-serif] leading-[normal] left-[1058px] not-italic text-[24px] text-black text-nowrap top-[172px] tracking-[0.48px] whitespace-pre">Socials</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#1e3a5f] text-[16px] top-[231px] tracking-[0.32px] w-[302px]">About Us</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#1e3a5f] text-[16px] top-[269px] tracking-[0.32px] w-[302px]">{`Terms & Conditions`}</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#1e3a5f] text-[16px] top-[307px] tracking-[0.32px] w-[302px]">Privacy Policy</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[80px] not-italic text-[#1e3a5f] text-[16px] top-[345px] tracking-[0.32px] w-[302px]">Careers</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[406px] not-italic text-[#1e3a5f] text-[16px] top-[231px] tracking-[0.32px] w-[302px]">Medbridge Reviews</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[732px] not-italic text-[#1e3a5f] text-[16px] top-[231px] tracking-[0.32px] w-[302px]">Register as a Professional</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[406px] not-italic text-[#1e3a5f] text-[16px] top-[269px] tracking-[0.32px] w-[302px]">Services</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[406px] not-italic text-[#1e3a5f] text-[16px] top-[307px] tracking-[0.32px] w-[302px]">Package Plan</p>
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[normal] left-[406px] not-italic text-[#1e3a5f] text-[16px] top-[345px] tracking-[0.32px] w-[302px]">AI Match with Hospitals</p>
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.8660253882408142)+(var(--transform-inner-height)*0.4999999701976776)))] items-center justify-center left-[977.55px] top-[263.74px] w-[calc(1px*((var(--transform-inner-height)*0.8660253882408142)+(var(--transform-inner-width)*0.4999999701976776)))]" style={{ "--transform-inner-width": "291.078125", "--transform-inner-height": "465.203125" } as React.CSSProperties}>
        <div className="flex-none rotate-[300deg]">
          <div className="h-[465.215px] relative w-[291.091px]" data-name="pngwing.com (18) 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPngwingCom181} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col h-[1548px] items-start relative shrink-0 w-full">
      <Frame82 />
      <Frame44 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center left-1/2 top-[1118px] translate-x-[-50%] w-[1440px]">
      <Frame45 />
      <Frame124 />
    </div>
  );
}

export default function Desktop({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 25">
      <Frame104 onCartClick={onCartClick} />
      <Frame103 />
      <Frame138 />
      <Frame137 />
    </div>
  );
}