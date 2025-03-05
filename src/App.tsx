
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Pricing from "./pages/Pricing";
import EncoderSelection from "./pages/EncoderSelection";
import Accessories from "./pages/Accessories";
import { TopNav } from "./components/navigation/TopNav";
import { PurchaseStepsNav } from "./components/navigation/PurchaseStepsNav";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FooterSection from "./components/sections/FooterSection";

// Create a client for React Query
const queryClient = new QueryClient();

// Navigation controller component
const NavigationController = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Check if the current path is part of the purchase flow
  const isPurchaseFlow = ['/pricing', '/encoder-selection', '/accessories', '/checkout'].includes(path);
  
  return isPurchaseFlow ? <PurchaseStepsNav /> : <TopNav />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-200">
              <Routes>
                <Route path="*" element={<NavigationController />} />
              </Routes>
              <div>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/encoder-selection" element={<EncoderSelection />} />
                  <Route path="/accessories" element={<Accessories />} />
                  <Route path="/checkout" element={<div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center justify-center">
                    <h1 className="text-3xl font-bold">Checkout Page Coming Soon</h1>
                  </div>} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <FooterSection />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
