import svgPaths from "./svg-jt7acufgbo";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useCurrency } from "../components/CurrencyContext";
import { useState, useRef, useEffect } from "react";
import imgFrame288 from "figma:asset/5698798d2fb6a6deba5443eed2b491f99d5d653f.png";
import imgImage1025 from "figma:asset/6f72618b9585f8235bde9417e5b205f4c1c8c6a3.png";
import imgImage1501 from "figma:asset/9f5eeabc104d6d822d7eeac21b1d02f238cd92b0.png";
import imgImage1502 from "figma:asset/7415367d64b277b44d4c7419c084653b0ba091ac.png";
import imgImage1503 from "figma:asset/44ac2c73e8ea487ba1d40e898aafe742c7f85b9b.png";
import imgImage1498 from "figma:asset/60a0cba346e1652ff293db2577bd5bba5c3ba8c3.png";
import imgFrame218 from "figma:asset/6dfd9cc4deae204d93416dbfa013a40e6fb67d63.png";
import imgFrame219 from "figma:asset/8715b60a9bcab9b124f86dd12a71aa9a93f149f2.png";
import imgFrame220 from "figma:asset/e078b7604f14c571480069b10a5165737b74ea24.png";
import imgFrame221 from "figma:asset/c729d7cdd899cc15aad50f2fd46c3c1e5fff626d.png";
import imgPngwingCom181 from "figma:asset/c4394d9fa56776a14cbb95906e4f138571834926.png";
import imgImage20 from "figma:asset/a99b2452392c39949d7b54c639f2e1542885af3f.png";
import imgImage1525 from "figma:asset/b3466d39fd5edead348c97860f105a911c5d2f90.png";
import imgImage1526 from "figma:asset/a668c4178d51d0cadafbbc071e27a75fac9afaf2.png";
import imgImage1527 from "figma:asset/bd99f0637dd3e271c051414b16d1ba82f4a91539.png";

interface Hospital {
  id: number;
  name: string;
  location: string;
  [key: string]: any;
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] w-[651px]">
      <p className="font-['General_Sans:Light',sans-serif] relative shrink-0 text-[0px] text-[32px] tracking-[-0.64px] w-full">
        <span>{`Other `}</span>
        <span className="font-['General_Sans:Medium',sans-serif] not-italic">Hospitals</span>
      </p>
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[20px] tracking-[0.4px] w-full">We’ve matched 3 hospitals based on your preferences</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-between relative shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(30,58,95,0.5)] text-nowrap whitespace-pre">Quick Filters:</p>
    </div>
  );
}

function CaretCircleDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretCircleDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretCircleDown">
          <path d={svgPaths.p22614d72} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[rgba(30,58,95,0.1)] box-border content-stretch flex gap-[6px] h-[44px] items-center justify-center overflow-clip px-[20px] py-[6px] relative rounded-[100px] shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap whitespace-pre">Accreditation</p>
      <CaretCircleDown />
    </div>
  );
}

function CaretCircleDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretCircleDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretCircleDown">
          <path d={svgPaths.p22614d72} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[rgba(30,58,95,0.1)] box-border content-stretch flex gap-[6px] h-[44px] items-center justify-center overflow-clip px-[20px] py-[6px] relative rounded-[100px] shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap whitespace-pre">Speciality</p>
      <CaretCircleDown1 />
    </div>
  );
}

function CaretCircleDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretCircleDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretCircleDown">
          <path d={svgPaths.p22614d72} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[rgba(30,58,95,0.1)] box-border content-stretch flex gap-[6px] h-[44px] items-center justify-center overflow-clip px-[20px] py-[6px] relative rounded-[100px] shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap whitespace-pre">Location</p>
      <CaretCircleDown2 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame53 />
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[18px] text-nowrap whitespace-pre">Clear All</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame58 />
      <Frame73 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame72 />
      <Frame74 />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="MagnifyingGlass">
          <path d={svgPaths.p1f527d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[14px]">
      <MagnifyingGlass />
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">Search for a specific hospital</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white h-[51px] relative rounded-[8px] shrink-0 w-[420px]">
      <div className="h-[51px] overflow-clip relative rounded-[inherit] w-[420px]">
        <Frame63 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[182px] items-center relative shrink-0 w-full">
      <Frame85 />
      <Frame62 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame59 />
      <Frame81 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[200px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame288} />
      <div className="absolute h-[287px] left-[-26.56px] top-[-75px] w-[518.808px]" data-name="image 1025">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1025} />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909cb0] text-[12px] text-nowrap tracking-[1.44px] uppercase whitespace-pre">accreditations:</p>
      <Frame64 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #64B6AC)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #64B6AC)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #64B6AC)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #64B6AC)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #64B6AC)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame35 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1,807)</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame36 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] tracking-[-0.4px] w-full">
        Fortis Memorial Research Institute,
        <br aria-hidden="true" />
        Gurugram
      </p>
      <Frame66 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame75 />
      <p className="-webkit-box font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#62768f] text-[16px] tracking-[0.32px] w-full">Fortis Memorial Research Institute is a multi-super specialty, quaternary care hospital with an enviable international faculty, reputed clinicians, including super-sub-specialists and speciality nurses, supported by cutting edge technology.</p>
    </div>
  );
}

function Bed() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bed">
          <path d={svgPaths.p998ca80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Bed />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Beds</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">1000+</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Stethoscope">
          <path d={svgPaths.p3e8ec80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Stethoscope />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px]">Multi - Speciality</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame43 />
      <Frame49 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p2605d880} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <MapPin />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 w-[92px]">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Location</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">Gurugram</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[319px]">
      <Frame47 />
      <Frame46 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame76 />
      <Frame77 />
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

function Frame50() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame78 />
      <Frame48 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[411px]">
      <Frame33 />
      <Frame79 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#f2f2f2] h-[200px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[259.5px] left-[-9px] top-[-30px] w-[477.337px]" data-name="image 1498">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.63%] left-0 max-w-none top-[-10.63%] w-full" src={imgImage1498} />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909cb0] text-[12px] text-nowrap tracking-[1.44px] uppercase whitespace-pre">accreditations:</p>
      <Frame67 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #64B6AC)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #64B6AC)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #64B6AC)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #64B6AC)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #64B6AC)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame39 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame40 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1,807)</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame68 />
      <Frame54 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] tracking-[-0.4px] w-full">
        Fortis Memorial Research Institute,
        <br aria-hidden="true" />
        Gurugram
      </p>
      <Frame69 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame86 />
      <p className="-webkit-box font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#62768f] text-[16px] tracking-[0.32px] w-full">Fortis Memorial Research Institute is a multi-super specialty, quaternary care hospital with an enviable international faculty, reputed clinicians, including super-sub-specialists and speciality nurses, supported by cutting edge technology.</p>
    </div>
  );
}

function Bed1() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bed">
          <path d={svgPaths.p998ca80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Bed1 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Beds</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">1000+</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Stethoscope1() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Stethoscope">
          <path d={svgPaths.p3e8ec80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Stethoscope1 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px]">Multi - Speciality</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame57 />
      <Frame88 />
    </div>
  );
}

function MapPin1() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p2605d880} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <MapPin1 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 w-[92px]">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Location</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">Gurugram</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[319px]">
      <Frame89 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame87 />
      <Frame93 />
    </div>
  );
}

function CaretCircleRight1() {
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

function Frame95() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight1 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame95 />
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame94 />
      <Frame96 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[411px]">
      <Frame38 />
      <Frame97 />
    </div>
  );
}

function Frame99() {
  return <div className="bg-[#f2f2f2] h-[200px] rounded-[16px] shrink-0 w-full" />;
}

function Frame100() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#909cb0] text-[12px] text-nowrap tracking-[1.44px] uppercase whitespace-pre">accreditations:</p>
      <Frame100 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #64B6AC)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #64B6AC)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #64B6AC)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #64B6AC)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #64B6AC)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame102 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame103 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1,807)</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame101 />
      <Frame104 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] tracking-[-0.4px] w-full">
        Fortis Memorial Research Institute,
        <br aria-hidden="true" />
        Gurugram
      </p>
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame106 />
      <p className="-webkit-box font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#62768f] text-[16px] tracking-[0.32px] w-full">Fortis Memorial Research Institute is a multi-super specialty, quaternary care hospital with an enviable international faculty, reputed clinicians, including super-sub-specialists and speciality nurses, supported by cutting edge technology.</p>
    </div>
  );
}

function Bed2() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Bed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bed">
          <path d={svgPaths.p998ca80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Bed2 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Beds</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">1000+</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Stethoscope2() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Stethoscope">
          <path d={svgPaths.p3e8ec80} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <Stethoscope2 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px]">Multi - Speciality</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
      <Frame110 />
      <Frame113 />
    </div>
  );
}

function MapPin2() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p2605d880} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[40px]">
      <MapPin2 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[40px] items-start leading-[normal] not-italic relative shrink-0 w-[92px]">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[12px] tracking-[1.44px] uppercase w-full">Location</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[16px] tracking-[0.32px] w-full">Gurugram</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[319px]">
      <Frame114 />
      <Frame117 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame107 />
      <Frame118 />
    </div>
  );
}

function CaretCircleRight2() {
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

function Frame120() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight2 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame119 />
      <Frame121 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[411px]">
      <Frame99 />
      <Frame122 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame32 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame98 key={i} />
      ))}
      <Frame123 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1280px]">
      <Frame82 />
      <Frame80 />
    </div>
  );
}

function Frame10() {
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

function Frame15() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Faders />
    </div>
  );
}

function Frame16() {
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

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-0 overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame17 />
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

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Tag />
    </div>
  );
}

function Frame21() {
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-[435px] overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame22 />
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

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] overflow-clip relative rounded-[750px] shrink-0 size-[60px]">
      <Handshake />
    </div>
  );
}

function Frame24() {
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

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[rgba(100,182,172,0.1)] box-border content-stretch flex flex-col gap-[10px] items-start left-[869px] overflow-clip p-[32px] rounded-[16px] top-0 w-[411px]">
      <Frame25 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[231px] items-center justify-center px-[10px] py-0 relative shrink-0">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[1280px]">
      <Frame10 />
      <Frame18 />
    </div>
  );
}

function Frame() {
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[23.133px] items-center left-[80px] top-[64px]">
      <Frame />
    </div>
  );
}

function Frame19() {
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

function Frame26() {
  return (
    <a href="https://www.linkedin.com/company/medbridge-life/" target="_blank" rel="noopener noreferrer" className="absolute left-[1058px] rounded-[100px] size-[48px] top-[231px] cursor-pointer hover:opacity-80 transition-opacity">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-black inset-0 rounded-[100px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute h-[70.83%] left-[-9.5%] max-w-none top-[14.58%] w-[119%]" src={imgFrame218} />
        </div>
      </div>
    </a>
  );
}

function Frame27() {
  return (
    <a href="https://www.instagram.com/medbridge.life/" target="_blank" rel="noopener noreferrer" className="absolute left-[1118px] rounded-[100px] size-[48px] top-[231px] cursor-pointer hover:opacity-80 transition-opacity">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame219} />
    </a>
  );
}

function Frame28() {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer" className="absolute left-[1178px] rounded-[100px] size-[48px] top-[231px] cursor-pointer hover:opacity-80 transition-opacity">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-[#3b579d] inset-0 rounded-[100px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <img alt="" className="absolute left-[-2.08%] max-w-none size-[85.59%] top-[14.41%]" src={imgFrame220} />
        </div>
      </div>
    </a>
  );
}

function Frame29() {
  return (
    <a href="https://x.com/medbridge_life" target="_blank" rel="noopener noreferrer" className="absolute left-[1235px] rounded-[100px] size-[54px] top-[228px] cursor-pointer hover:opacity-80 transition-opacity">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
        <img alt="" className="absolute left-[-5.96%] max-w-none size-[112.66%] top-[-4.1%]" src={imgFrame221} />
      </div>
    </a>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(245,230,211,0.5)] h-[618px] overflow-clip relative shrink-0 w-[1440px]">
      <Frame2 />
      <Frame19 />
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
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
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

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[56px] items-center left-0 top-[1053px] w-full">
      <Frame83 />
      <Frame84 />
      <Frame31 />
    </div>
  );
}

function Frame1() {
  return (
    <Link to="/" className="h-[35.264px] relative shrink-0 w-[157.694px] block">
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
            <path d={svgPaths.p2604e600} fill="var(--fill-0, white)" id="Polygon 2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[10.807px] items-center justify-center left-0 top-[12.23px] w-[11.802px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[10.807px] relative w-[11.802px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
              <path d={svgPaths.pd076000} fill="var(--fill-0, white)" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] left-[41.95px] text-[24.237px] text-nowrap text-white top-[1.36px] tracking-[-0.4847px] whitespace-pre">medbridge</p>
    </Link>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame1 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "38", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[38px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 1">
                <line id="Line 5" opacity="0.4" stroke="var(--stroke-0, white)" x2="38" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[0px] text-[14px] text-white tracking-[-0.28px] w-[342px] whitespace-pre-wrap">
        <span>
          {`Bridging  patients worldwide with `}
          <br aria-hidden="true" />
        </span>
        India’s best doctors<span className="text-[#8bbcdd]"> </span>
      </p>
    </div>
  );
}

function Frame5() {
  const { currency } = useCurrency();
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[19px] relative shrink-0 w-[29px]" data-name="image 20">
        <img alt={currency === "INR" ? "Indian Flag" : "US Flag"} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={currency === "INR" ? imgImage20 : "https://flagcdn.com/w40/us.png"} />
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "18.859375", "--transform-inner-height": "0.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[0.5px] relative w-[18.872px]">
            <div className="absolute inset-[-99.96%_-0.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                <path d={svgPaths.p307b00} id="Line 22" opacity="0.2" stroke="var(--stroke-0, white)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px] whitespace-pre">{currency}</p>
    </div>
  );
}

function CaretCircleDown3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="CaretCircleDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="CaretCircleDown">
          <path d={svgPaths.p3c150ff0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame5 />
      <CaretCircleDown3 />
    </div>
  );
}

function Frame4() {
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
        className="backdrop-blur-[22px] backdrop-filter box-border content-stretch flex flex-col gap-[10px] h-[38px] items-start justify-center overflow-clip px-[14px] py-[10px] relative rounded-[6px] cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-colors"
        onClick={() => setOpen(!open)}
      >
        <Frame6 />
      </div>
      {open && (
        <div className="absolute top-[42px] left-0 bg-white rounded-[8px] shadow-lg border border-[rgba(30,58,95,0.1)] z-50 overflow-hidden min-w-[100px]">
          {(["INR", "USD"] as const).map((c) => (
            <div
              key={c}
              className={`px-[14px] py-[10px] cursor-pointer font-['General_Sans:Medium',sans-serif] text-[14px] text-[#1e3a5f] tracking-[-0.28px] hover:bg-[rgba(30,58,95,0.05)] transition-colors flex items-center gap-[8px] ${currency === c ? "bg-[rgba(100,182,172,0.1)]" : ""}`}
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

function ShoppingCartSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ShoppingCartSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ShoppingCartSimple">
          <path d={svgPaths.p21130200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="backdrop-blur-[22px] backdrop-filter bg-[rgba(255,255,255,0.21)] box-border content-stretch flex gap-[10px] items-center overflow-clip p-[9px] relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors"
      onClick={onClick}
    >
      <ShoppingCartSimple />
    </div>
  );
}

function Frame9({ onCartClick }: { onCartClick?: () => void }) {
  const { itemCount } = useCart();
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame4 />
      <div className="relative">
        <Frame7 onClick={onCartClick} />
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

function Frame8({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame9 onCartClick={onCartClick} />
    </div>
  );
}

function Frame30({ onCartClick }: { onCartClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1264px]">
      <Frame3 />
      <Frame8 onCartClick={onCartClick} />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[32px] relative shrink-0 w-[31.999px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 1">
          <path d={svgPaths.p2b0509b0} fill="url(#paint0_linear_28_2382)" id="Vector" />
          <path d={svgPaths.p1ca9d180} fill="url(#paint1_linear_28_2382)" id="Vector_2" />
          <path d={svgPaths.p6355180} fill="url(#paint2_linear_28_2382)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_2382" x1="5.92501" x2="33.572" y1="24.4338" y2="21.2589">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_28_2382" x1="1.88366e-07" x2="13.8233" y1="10.7375" y2="9.15021">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_28_2382" x1="2.66814" x2="14.6062" y1="30.0119" y2="28.6411">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-0.64px] whitespace-pre">
        <span className="font-['General_Sans:Medium',sans-serif]">{`Top 3 `}</span>
        <span className="font-['General_Sans:Medium',sans-serif]">AI Matched</span>
        <span className="font-['General_Sans:Medium',sans-serif]"> </span>Hospitals for You
      </p>
      <Group />
    </div>
  );
}

function Frame205() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame206 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame205 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame207 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Star">
          <path d={svgPaths.p3e9e4700} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame201() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] h-[30px] items-center left-0 px-[12px] py-[4px] rounded-br-[10px] top-0">
      <Star />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[12px] text-nowrap tracking-[0.24px] whitespace-pre">Recommended</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#f2f2f2] h-[200px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[306px] left-[-26.89px] top-[-75px] w-[549px]" data-name="image 1498">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame288} />
      </div>
      <Frame201 />
    </div>
  );
}

function MapPin3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="MapPin">
          <path d={svgPaths.p38811300} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame181({ location }: { location?: string }) {
  return (
    <div className="bg-[rgba(109,127,151,0.07)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0">
      <MapPin3 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{location || "Mumbai"}</p>
    </div>
  );
}

function Frame202({ name, location }: { name?: string; location?: string }) {
  console.log("Frame202 (Card 1) - name:", name, "location:", location);
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">{name || "Apollo Hospital Mumbai"}</p>
      <Frame181 location={location} />
    </div>
  );
}

function Frame126() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #FCD26F)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #FCD26F)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #FCD26F)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #FCD26F)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #DDDDDD)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame126 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame127 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1.8k)</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame130 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame129 />
      <Frame182 />
    </div>
  );
}

function Frame179({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame202 name={name} location={location} />
      <Frame209 />
    </div>
  );
}

function Frame178({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame179 name={name} location={location} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[26.83%_23.17%_23.17%_26.83%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 1">
          <path d={svgPaths.p38da0880} fill="url(#paint0_linear_28_2367)" id="Vector" />
          <path d={svgPaths.p2c403300} fill="url(#paint1_linear_28_2367)" id="Vector_2" />
          <path d={svgPaths.p12204f70} fill="url(#paint2_linear_28_2367)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_2367" x1="2.9624" x2="16.7857" y1="12.2168" y2="10.6294">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_28_2367" x1="9.41819e-08" x2="6.91155" y1="5.36868" y2="4.57505">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_28_2367" x1="1.33398" x2="7.30294" y1="15.0058" y2="14.3204">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[rgba(10,211,251,0.12)] overflow-clip relative rounded-[780.488px] shrink-0 size-[32px]">
      <Group1 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="bg-[rgba(10,212,251,0.05)] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[12px] py-[16px] relative w-full">
          <Frame131 />
          <div className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">
            <p className="font-['General_Sans:Medium',sans-serif] mb-0">Why this match?</p>
            <p className="text-[rgba(30,58,95,0.7)]">{`Oncology fit within ₹1.5L–₹2L, in Mumbai, NABH One two more lines One two more `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stethoscope3() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope3 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">Multi - Speciality</p>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame132 />
      <Frame133 />
    </div>
  );
}

function Stethoscope4() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope4 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">BEDS</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">100k +</p>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame134 />
      <Frame135 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame197 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "28", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 1">
                <line id="Line 51" stroke="var(--stroke-0, #909CB0)" strokeOpacity="0.1" x2="28" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame199 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame136 />
    </div>
  );
}

function CaretCircleRight3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="CaretCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="CaretCircleRight">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight3 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame138 />
        </div>
      </div>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame203 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame204 />
      <Frame140 />
    </div>
  );
}

function Frame191({ hospital }: { hospital?: Hospital }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame125 />
          <Frame178 name={hospital?.name} location={hospital?.location} />
          <Frame169 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ebee] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[#f2f2f2] h-[200px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[287px] left-[-26.89px] top-[-75px] w-[518.808px]" data-name="image 1025">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1025} />
      </div>
    </div>
  );
}

function MapPin4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="MapPin">
          <path d={svgPaths.p38811300} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame183({ location }: { location?: string }) {
  return (
    <div className="bg-[rgba(109,127,151,0.07)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0">
      <MapPin4 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{location || "Mumbai"}</p>
    </div>
  );
}

function Frame211({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">{name || "Fortis Memorial Research Institute"}</p>
      <Frame183 location={location} />
    </div>
  );
}

function Frame145() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #FCD26F)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #FCD26F)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #FCD26F)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #FCD26F)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #DDDDDD)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame145 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame146 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1.8k)</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame147 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame149 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame148 />
      <Frame184 />
    </div>
  );
}

function Frame180({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame211 name={name} location={location} />
      <Frame212 />
    </div>
  );
}

function Frame185({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame180 name={name} location={location} />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[26.83%_23.17%_23.17%_26.83%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 1">
          <path d={svgPaths.p38da0880} fill="url(#paint0_linear_28_2367)" id="Vector" />
          <path d={svgPaths.p2c403300} fill="url(#paint1_linear_28_2367)" id="Vector_2" />
          <path d={svgPaths.p12204f70} fill="url(#paint2_linear_28_2367)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_2367" x1="2.9624" x2="16.7857" y1="12.2168" y2="10.6294">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_28_2367" x1="9.41819e-08" x2="6.91155" y1="5.36868" y2="4.57505">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_28_2367" x1="1.33398" x2="7.30294" y1="15.0058" y2="14.3204">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-[rgba(10,211,251,0.12)] overflow-clip relative rounded-[780.488px] shrink-0 size-[32px]">
      <Group2 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="bg-[rgba(10,212,251,0.05)] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[12px] py-[16px] relative w-full">
          <Frame150 />
          <div className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">
            <p className="font-['General_Sans:Medium',sans-serif] mb-0">Why this match?</p>
            <p className="text-[rgba(30,58,95,0.7)]">{`Oncology fit within ₹1.5L–₹2L, in Mumbai, NABH One two more lines One two more `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stethoscope5() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame151() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope5 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">Multi - Speciality</p>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Stethoscope6() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope6 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">BEDS</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">100k +</p>
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame153 />
      <Frame154 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame198 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "28", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 1">
                <line id="Line 51" stroke="var(--stroke-0, #909CB0)" strokeOpacity="0.1" x2="28" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame200 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame155 />
    </div>
  );
}

function CaretCircleRight4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="CaretCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="CaretCircleRight">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight4 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame156 />
        </div>
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame213 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame214 />
      <Frame157 />
    </div>
  );
}

function Frame190({ hospital }: { hospital?: Hospital }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame143 />
          <Frame185 name={hospital?.name} location={hospital?.location} />
          <Frame170 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ebee] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-[#f2f2f2] h-[200px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div className="absolute h-[259.5px] left-[-8.67px] top-[-30px] w-[477.337px]" data-name="image 1498">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.63%] left-0 max-w-none top-[-10.63%] w-full" src={imgImage1498} />
        </div>
      </div>
    </div>
  );
}

function MapPin5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="MapPin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="MapPin">
          <path d={svgPaths.p38811300} fill="var(--fill-0, #1E3A5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame186({ location }: { location?: string }) {
  return (
    <div className="bg-[rgba(109,127,151,0.07)] box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[1000px] shrink-0">
      <MapPin5 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-nowrap tracking-[0.28px] whitespace-pre">{location || "Mumbai"}</p>
    </div>
  );
}

function Frame215({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">{name || "Jupiter Hospital Mumbai"}</p>
      <Frame186 location={location} />
    </div>
  );
}

function Frame159() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 24">
        <g id="Frame 289">
          <path d={svgPaths.p24f37400} fill="var(--fill-0, #FCD26F)" id="Star 1" />
          <path d={svgPaths.p32e64100} fill="var(--fill-0, #FCD26F)" id="Star 2" />
          <path d={svgPaths.p14218700} fill="var(--fill-0, #FCD26F)" id="Star 3" />
          <path d={svgPaths.p3dcb0200} fill="var(--fill-0, #FCD26F)" id="Star 4" />
          <path d={svgPaths.p3d739b00} fill="var(--fill-0, #DDDDDD)" id="Star 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame159 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame160 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e3a5f] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">4.3 (1.8k)</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame161 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[21px]" data-name="image 1501">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.31%] left-0 max-w-none top-0 w-full" src={imgImage1501} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="image 1502">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[-2.3%] max-w-none top-0 w-[104.61%]" src={imgImage1502} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="image 1503">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1503} />
      </div>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame163 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame162 />
      <Frame187 />
    </div>
  );
}

function Frame188({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame215 name={name} location={location} />
      <Frame216 />
    </div>
  );
}

function Frame189({ name, location }: { name?: string; location?: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame188 name={name} location={location} />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[26.83%_23.17%_23.17%_26.83%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 1">
          <path d={svgPaths.p38da0880} fill="url(#paint0_linear_28_2367)" id="Vector" />
          <path d={svgPaths.p2c403300} fill="url(#paint1_linear_28_2367)" id="Vector_2" />
          <path d={svgPaths.p12204f70} fill="url(#paint2_linear_28_2367)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_28_2367" x1="2.9624" x2="16.7857" y1="12.2168" y2="10.6294">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_28_2367" x1="9.41819e-08" x2="6.91155" y1="5.36868" y2="4.57505">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_28_2367" x1="1.33398" x2="7.30294" y1="15.0058" y2="14.3204">
            <stop stopColor="#038DFE" />
            <stop offset="1" stopColor="#0BE0FA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame164() {
  return (
    <div className="bg-[rgba(10,211,251,0.12)] overflow-clip relative rounded-[780.488px] shrink-0 size-[32px]">
      <Group3 />
    </div>
  );
}

function Frame217() {
  return (
    <div className="bg-[rgba(10,212,251,0.05)] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start px-[12px] py-[16px] relative w-full">
          <Frame164 />
          <div className="basis-0 font-['General_Sans:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">
            <p className="font-['General_Sans:Medium',sans-serif] mb-0">Why this match?</p>
            <p className="text-[rgba(30,58,95,0.7)]">{`Oncology fit within ₹1.5L–₹2L, in Mumbai, NABH One two more lines One two more `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stethoscope7() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope7 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">Speciality</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">Multi - Speciality</p>
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame165 />
      <Frame166 />
    </div>
  );
}

function Stethoscope8() {
  return (
    <div className="absolute left-[8px] size-[16px] top-[8px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stethoscope">
          <path d={svgPaths.p35d1be60} fill="var(--fill-0, #64B6AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame167() {
  return (
    <div className="bg-[rgba(100,182,172,0.1)] overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
      <Stethoscope8 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['General_Sans:Regular',sans-serif] relative shrink-0 text-[#909cb0] text-[10px] tracking-[1.2px] uppercase">BEDS</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#1e3a5f] text-[14px] tracking-[0.28px]">100k +</p>
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame167 />
      <Frame168 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame218 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "28", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[28px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 1">
                <line id="Line 51" stroke="var(--stroke-0, #909CB0)" strokeOpacity="0.1" x2="28" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame219 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame171 />
    </div>
  );
}

function CaretCircleRight5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="CaretCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="CaretCircleRight">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Schedule an appointment</p>
      <CaretCircleRight5 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="bg-[#64b6ac] relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[21px] py-[14px] relative w-full">
          <Frame172 />
        </div>
      </div>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame217 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 1">
            <line id="Line 40" stroke="var(--stroke-0, #98A1AE)" strokeOpacity="0.2" x2="381.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame220 />
      <Frame173 />
    </div>
  );
}

function Frame192({ hospital }: { hospital?: Hospital }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Frame158 />
          <Frame189 name={hospital?.name} location={hospital?.location} />
          <Frame174 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ebee] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame177({ hospitals }: { hospitals?: Hospital[] }) {
  return (
    <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0 w-full">
      <Frame191 hospital={hospitals?.[0]} />
      <Frame190 hospital={hospitals?.[1]} />
      <Frame192 hospital={hospitals?.[2]} />
    </div>
  );
}

function Frame221({ hospitals }: { hospitals?: Hospital[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame208 />
      <Frame177 hospitals={hospitals} />
    </div>
  );
}

function Frame193() {
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

function Frame194() {
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

function Frame195() {
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

function Frame196() {
  return (
    <div className="h-[52px] relative shrink-0 w-[124px]">
      <Frame193 />
      <Frame194 />
      <Frame195 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Book your visa, stay, transport and other essentials to plan your visit smoothly.</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[402px]">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[-0.4px] whitespace-pre">{`Step 2: Need help setting up your travel & support services?`}</p>
      <Frame139 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame196 />
      <Frame141 />
    </div>
  );
}

function CaretCircleRight6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="CaretCircleRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="CaretCircleRight">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">Explore All Services</p>
      <CaretCircleRight6 />
    </div>
  );
}

function Frame176() {
  return (
    <Link to="/all-services">
      <div className="bg-[#64b6ac] box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[32px] py-[14px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#5aa599] transition-colors">
        <Frame175 />
      </div>
    </Link>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame142 />
      <Frame176 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[24px] relative w-full">
          <Frame144 />
        </div>
      </div>
    </div>
  );
}

function Frame210({ hospitals }: { hospitals?: Hospital[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame221 hospitals={hospitals} />
      <Frame137 />
    </div>
  );
}

function Frame222({ hospitals, onCartClick }: { hospitals?: Hospital[]; onCartClick?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[56px] items-center justify-center left-0 overflow-clip pb-[40px] pt-[64px] px-[80px] rounded-bl-[24px] rounded-br-[24px] top-0 w-screen" style={{ background: 'linear-gradient(180deg, #1E3A5F 0%, #2C5F8D 100%)' }}>
      <Frame30 onCartClick={onCartClick} />
      <Frame210 hospitals={hospitals} />
    </div>
  );
}

export default function Desktop({ hospitals = [], onCartClick }: { hospitals?: Hospital[]; onCartClick?: () => void }) {
  console.log("Desktop26 - hospitals prop:", hospitals);
  console.log("Desktop26 - first 3 hospitals:", hospitals.slice(0, 3));
  
  return (
    <div className="bg-neutral-50 relative w-full min-h-screen" data-name="Desktop - 26">
      <div className="flex justify-center relative">
        <div className="relative w-[1440px] min-h-screen">
          <Frame124 />
        </div>
        <Frame222 hospitals={hospitals} onCartClick={onCartClick} />
      </div>
    </div>
  );
}