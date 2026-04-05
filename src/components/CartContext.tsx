import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  age?: number;
  country?: string;
  budget?: string;
  locationPreference?: string;
  treatmentDetails?: string;
  submissionId?: string; // user_requests id from homepage form
}

interface CartContextType {
  items: CartItem[];
  userInfo: UserInfo | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  setUserInfo: (info: UserInfo) => void;
  itemCount: number;
  isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "medbridge_cart";
const USER_STORAGE_KEY = "medbridge_user";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const [userInfo, setUserInfoState] = useState<UserInfo | null>(() => {
    try {
      const stored = localStorage.getItem(USER_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
      // Migrate from old userData format
      const old = localStorage.getItem("userData");
      if (old) {
        const parsed = JSON.parse(old);
        return { name: parsed.name || "", email: "", phone: parsed.phoneNumber || "" };
      }
      return null;
    } catch { return null; }
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userInfo));
      // Keep old format in sync for backward compat
      localStorage.setItem("userData", JSON.stringify({
        name: userInfo.name,
        phoneNumber: userInfo.phone,
        timestamp: Date.now(),
      }));
    }
  }, [userInfo]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const setUserInfo = useCallback((info: UserInfo) => {
    setUserInfoState(info);
  }, []);

  const isInCart = useCallback((id: string) => {
    return items.some((i) => i.id === id);
  }, [items]);

  return (
    <CartContext.Provider
      value={{ items, userInfo, addItem, removeItem, clearCart, setUserInfo, itemCount: items.length, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
