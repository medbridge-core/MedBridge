
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  // import "./styles/mobile.css"; // Disabled: forcing desktop mode on mobile until responsive fixes are complete

  createRoot(document.getElementById("root")!).render(<App />);
  