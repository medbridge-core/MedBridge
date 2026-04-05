import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Results from './pages/Results';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}
