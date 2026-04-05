import imgImage1466 from "figma:asset/41786f3cd747d4d68ee8ce60376229ebec309309.png";
import imgImage1467 from "figma:asset/e477a76040dd1f967642d9624f7183e7615ba08a.png";
import imgImage1468 from "figma:asset/6368a3afec0869ceea29c91e8d1925bee0b7cf59.png";
import imgImage1469 from "figma:asset/427900dfa57677d764fcc5dfff3fc0db3345c14f.png";
import imgImage1470 from "figma:asset/181d5d306c64e6e3012f43a50ce2381885b7620f.png";
import imgImage1471 from "figma:asset/9cf7fa0b3f1729fc666090c58a7d2cf746ad9b99.png";
import imgImage1472 from "figma:asset/a0206a3fe6d56a60bcbf3fe989b253d617819b4a.png";
import imgImage1473 from "figma:asset/78334ef90c3726ed24b820f7dfd71cafc326d93d.png";
import imgImage1474 from "figma:asset/6baa44577152c6508da424f9aa957482cf8f7048.png";
import imgImage1475 from "figma:asset/74cf5a306df885357093baf65c75909e345fa9a8.png";
import imgImage1476 from "figma:asset/ec3b7187f97108c84897708a3c13dc8d7fc89171.png";
import imgImage1477 from "figma:asset/45acb2b5003c6c1b20662e2e2272831cd2809f8d.png";
import imgImage1478 from "figma:asset/6d64bd83e1d19abfed3bce0a8ed5372218823847.png";
import imgImage1479 from "figma:asset/62e1bb70af690999c95dfbf8c966d915ae41c58f.png";
import imgImage1480 from "figma:asset/6f8f83a6b8ba8554f28aa1f78e6ccc7af3eb5498.png";

export const SERVICE_IMAGE_MAP: Record<string, string> = {
  "medical-visa": imgImage1466,
  "med-x-visa": imgImage1467,
  "flight-tickets": imgImage1468,
  "accommodation": imgImage1469,
  "airport-pickup-drop": imgImage1470,
  "sim-internet": imgImage1471,
  "in-hospital-liaison": imgImage1472,
  "local-transport": imgImage1473,
  "food": imgImage1474,
  "translator": imgImage1475,
  "caregivers": imgImage1476,
  "dietician": imgImage1477,
  "rehabilitation-center": imgImage1478,
  "foreign-exchange": imgImage1479,
  "insurance-assistance": imgImage1480,
};

export function getServiceImage(imageKey: string): string {
  return SERVICE_IMAGE_MAP[imageKey] || imgImage1466; // fallback
}
