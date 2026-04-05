import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "INR" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (inrPrice: string) => string;
}

const INR_TO_USD = 85;

function convertToUSD(inrAmount: number): number {
  const usd = inrAmount / INR_TO_USD;
  return Math.round(usd / 5) * 5;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  setCurrency: () => {},
  formatPrice: (p) => p,
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("INR");

  const formatPrice = (inrPrice: string): string => {
    if (currency === "INR") return inrPrice;
    // Extract numeric value from string like "₹4000" or "₹4,000"
    const num = parseInt(inrPrice.replace(/[^0-9]/g, ""), 10);
    if (isNaN(num)) return inrPrice;
    const usd = convertToUSD(num);
    return `$${usd}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
