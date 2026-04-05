import { CartProvider } from './components/CartContext';
import { CurrencyProvider } from './components/CurrencyContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Results from './pages/Results';
import AllServices from './pages/AllServices';
import Admin from './pages/Admin';
import CartPanel from './components/CartPanel';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <CurrencyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home onCartClick={() => setIsCartOpen(true)} />} />
          <Route path="/results" element={<Results onCartClick={() => setIsCartOpen(true)} />} />
          <Route path="/all-services" element={<AllServices onCartClick={() => setIsCartOpen(true)} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </BrowserRouter>
      </CurrencyProvider>
      <Toaster position="top-right" richColors closeButton />
    </CartProvider>
  );
}