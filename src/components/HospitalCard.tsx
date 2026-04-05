import svgPaths from "../imports/svg-bfdxaa45y9";

interface HospitalCardProps {
  name: string;
  city?: string;
}

export function HospitalCard({ 
  name,
  city = "India"
}: HospitalCardProps) {
  return (
    <div className="bg-white box-border relative rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[20px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic text-[18px] text-[#1e3a5f] tracking-[-0.36px]">
            {name}
          </p>
          <p className="font-['General_Sans:Regular',sans-serif] leading-[normal] not-italic text-[14px] text-[#666666]">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
}