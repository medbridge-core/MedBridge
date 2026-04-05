import { useLocation } from "react-router-dom";
import Desktop26 from "../imports/Desktop26";

interface Hospital {
  id: number;
  name: string;
  location: string;
  [key: string]: any;
}

export default function Results({ onCartClick }: { onCartClick?: () => void }) {
  const location = useLocation();
  const rawHospitals = (location.state?.hospitals as any[]) || [];
  
  // Debug logging
  console.log("Results page - raw hospitals data:", rawHospitals);
  console.log("Results page - hospitals count:", rawHospitals.length);
  
  // Normalize hospital data to ensure we have name and location fields
  // The database column is 'hospital' for the name
  const hospitals: Hospital[] = rawHospitals.map((h, index) => {
    console.log(`Hospital ${index + 1} raw data:`, h);
    return {
      id: h.id || h.hospital_id || index,
      name: h.hospital || h.name || h.hospital_name || h.hospitalName || `Hospital ${index + 1}`,
      location: h.location || h.city || h.locationPreference || "Unknown",
      ...h
    };
  });
  
  console.log("Results page - normalized hospitals:", hospitals);

  return <Desktop26 hospitals={hospitals} onCartClick={onCartClick} />;
}