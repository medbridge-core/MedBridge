import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-8kwbvssavk";
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useCart } from './CartContext';
import { countryPhoneCodes } from './countryPhoneCodes';

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

const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic",
  "East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast",
  "Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar",
  "Romania","Russia","Rwanda",
  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen",
  "Zambia","Zimbabwe"
];

export default function FormSection() {
  const navigate = useNavigate();
  const { setUserInfo } = useCart();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState("IN");
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [phoneSearch, setPhoneSearch] = useState("");
  const [budget, setBudget] = useState("");
  const [locationPreference, setLocationPreference] = useState("");
  const [treatmentDetails, setTreatmentDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);
  const phoneSearchRef = useRef<HTMLInputElement>(null);

  const selectedCountry = countryPhoneCodes.find(c => c.code === phoneCode);

  const filteredPhoneCodes = countryPhoneCodes.filter(c =>
    c.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
    c.dial.includes(phoneSearch) ||
    c.code.toLowerCase().includes(phoneSearch.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
        setIsPhoneDropdownOpen(false);
        setPhoneSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isPhoneDropdownOpen && phoneSearchRef.current) {
      phoneSearchRef.current.focus();
    }
  }, [isPhoneDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !age || !country || !budget || !locationPreference || !treatmentDetails) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 150) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid age between 1 and 150' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting form...');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3079ee5f/submit-form`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name,
            age: ageNum,
            country,
            phoneNumber: `${selectedCountry?.dial || ''} ${phoneNumber}`,
            budget,
            locationPreference,
            treatmentDetails,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Form submission error:', data);
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'Failed to submit form' 
        });
        setIsSubmitting(false);
        return;
      }

      console.log('Form submitted successfully:', data);
      setSubmitStatus({ 
        type: 'success', 
        message: 'Form submitted successfully!' 
      });

      localStorage.setItem('userData', JSON.stringify({
        name,
        phoneNumber: `${selectedCountry?.dial || ''} ${phoneNumber}`,
        timestamp: Date.now()
      }));

      setUserInfo({
        name,
        email: '',
        phone: `${selectedCountry?.dial || ''} ${phoneNumber}`,
        age: ageNum,
        country,
        budget,
        locationPreference,
        treatmentDetails,
        submissionId: data.submissionId,
      });

      navigate('/results', { state: { hospitals: data.hospitals || [] } });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to submit form. Please try again.' 
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="backdrop-blur-[90.8px] backdrop-filter bg-[linear-gradient(145deg,_rgba(30,58,95,1)_0%,_rgba(30,58,95,0.85)_100%)] overflow-clip relative rounded-[20px] w-[543px]">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[40px] py-[32px] relative rounded-[16px] shrink-0 w-[543px]" style={{ background: 'linear-gradient(219deg, #3668AA 27%, #203D64 95%)' }}>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
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
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Name and Age */}
            <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[normal] not-italic text-[16px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                   />
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    min="1"
                    max="150"
                    className="box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[normal] not-italic text-[16px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                   />
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Country and Phone */}
            <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={`box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[normal] not-italic text-[16px] outline-none appearance-none ${country ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'}`}
                    style={{ colorScheme: 'dark', fontFamily: "'General Sans', sans-serif" }}
                  >
                    <option value="" disabled>Country</option>
                    {countries.map(c => (
                      <option key={c} value={c} style={{ fontFamily: "'General Sans', sans-serif" }}>{c}</option>
                    ))}
                  </select>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              {/* Phone with flag dropdown */}
              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0" ref={phoneDropdownRef}>
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  {/* Flag selector button */}
                  <button
                    type="button"
                    onClick={() => { setIsPhoneDropdownOpen(!isPhoneDropdownOpen); setPhoneSearch(""); }}
                    className="flex items-center gap-[4px] pl-[12px] pr-[4px] h-full shrink-0 bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-[18px] leading-none">{selectedCountry?.flag}</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${isPhoneDropdownOpen ? 'rotate-180' : ''}`}>
                      <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <span className="text-white text-[14px] shrink-0 pl-[4px]" style={{ fontFamily: "'General Sans', sans-serif" }}>{selectedCountry?.dial}</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone number"
                    className="box-border w-full h-full bg-transparent px-[8px] py-[16px] leading-[normal] not-italic text-[16px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                  />
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />

                {/* Dropdown */}
                {isPhoneDropdownOpen && (
                  <div className="absolute top-[54px] left-0 w-full bg-[#1e3a5f] rounded-[8px] border border-[rgba(255,255,255,0.12)] shadow-lg z-50 overflow-hidden">
                    {/* Search */}
                    <div className="p-[8px] border-b border-[rgba(255,255,255,0.08)]">
                      <input
                        ref={phoneSearchRef}
                        type="text"
                        value={phoneSearch}
                        onChange={(e) => setPhoneSearch(e.target.value)}
                        placeholder="Search country..."
                        className="w-full bg-[rgba(255,255,255,0.07)] rounded-[6px] px-[10px] py-[8px] text-[14px] text-white placeholder-[rgba(255,255,255,0.4)] outline-none border border-[rgba(255,255,255,0.08)]"
                        style={{ fontFamily: "'General Sans', sans-serif" }}
                      />
                    </div>
                    {/* List */}
                    <div className="max-h-[200px] overflow-y-auto">
                      {filteredPhoneCodes.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setPhoneCode(c.code);
                            setIsPhoneDropdownOpen(false);
                            setPhoneSearch("");
                          }}
                          className={`w-full flex items-center gap-[10px] px-[12px] py-[8px] text-left hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-pointer border-none bg-transparent ${phoneCode === c.code ? 'bg-[rgba(100,182,172,0.15)]' : ''}`}
                        >
                          <span className="text-[18px] leading-none shrink-0">{c.flag}</span>
                          <span className="text-white text-[14px] truncate flex-1" style={{ fontFamily: "'General Sans', sans-serif" }}>{c.name}</span>
                          <span className="text-[rgba(255,255,255,0.5)] text-[13px] shrink-0" style={{ fontFamily: "'General Sans', sans-serif" }}>{c.dial}</span>
                        </button>
                      ))}
                      {filteredPhoneCodes.length === 0 && (
                        <div className="px-[12px] py-[12px] text-[rgba(255,255,255,0.4)] text-[14px] text-center" style={{ fontFamily: "'General Sans', sans-serif" }}>No results found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Budget and Location */}
            <div className="content-stretch flex gap-[12px] h-[51px] items-start relative shrink-0 w-full">
              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[normal] not-italic text-[16px] outline-none appearance-none ${budget ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'}`}
                    style={{ colorScheme: 'dark', fontFamily: "'General Sans', sans-serif" }}
                  >
                    <option value="" disabled>Budget</option>
                    <option value="Under ₹4,00,000">Under ₹4,00,000</option>
                    <option value="₹4,00,000 - ₹8,00,000">₹4,00,000 - ₹8,00,000</option>
                    <option value="₹8,00,000 - ₹16,00,000">₹8,00,000 - ₹16,00,000</option>
                    <option value="₹16,00,000 - ₹40,00,000">₹16,00,000 - ₹40,00,000</option>
                    <option value="Over ₹40,00,000">Over ₹40,00,000</option>
                  </select>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              <div className="basis-0 bg-[rgba(245,245,245,0.07)] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <select
                    value={locationPreference}
                    onChange={(e) => setLocationPreference(e.target.value)}
                    className={`box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[normal] not-italic text-[16px] outline-none appearance-none ${locationPreference ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'}`}
                    style={{ colorScheme: 'dark', fontFamily: "'General Sans', sans-serif" }}
                  >
                    <option value="" disabled>Location</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Treatment Details */}
            <div className="bg-[rgba(245,245,245,0.07)] h-[84px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <textarea
                  value={treatmentDetails}
                  onChange={(e) => setTreatmentDetails(e.target.value)}
                  placeholder="Enter details about your treatment - condition, ongoing treatment etc..."
                  className="box-border w-full h-full bg-transparent px-[16px] py-[16px] leading-[25.591px] not-italic text-[16px] text-white placeholder-[rgba(255,255,255,0.5)] outline-none resize-none"
                  style={{ fontFamily: "'General Sans', sans-serif" }}
                />
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>

            {/* Submit Button */}
            <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#64b6ac] h-[52px] relative rounded-[10px] shrink-0 w-full disabled:opacity-50"
              >
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
              </button>
              
              <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0">
                <Frame123 />
                <p className="font-['General_Sans:Medium',sans-serif] leading-[normal] not-italic opacity-90 relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
                  {isSubmitting ? 'Submitting...' : 'Matches generated in under 30 seconds.'}
                </p>
              </div>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`w-full p-4 rounded-lg text-center ${
                submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
