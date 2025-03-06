import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Pricing from "./pages/Pricing";
import EncoderSelection from "./pages/EncoderSelection";
import Accessories from "./pages/Accessories";
import Checkout from "./pages/Checkout";
import { TopNav } from "./components/navigation/TopNav";
import { PurchaseStepsNav } from "./components/navigation/PurchaseStepsNav";
import { CartSidebar } from "./components/cart/CartSidebar";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FooterSection from "./components/sections/FooterSection";
import { purchaseFlowPaths } from "./lib/utils";

// Create a client for React Query
const queryClient = new QueryClient();

// Navigation controller component
const NavigationController = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Check if the current path is part of the purchase flow
  const isPurchaseFlow = purchaseFlowPaths.includes(path);
  
  return isPurchaseFlow ? <PurchaseStepsNav /> : <TopNav />;
};

// Layout component
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-200">
      {children}
      <CartSidebar />
    </div>
  );
};

// Global type for product data access
declare global {
  interface Window {
    _products?: any[];
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <MainLayout>
                <Routes>
                  <Route path="*" element={<NavigationController />} />
                </Routes>
                <div>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/encoder-selection" element={<EncoderSelection />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <FooterSection />
              </MainLayout>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
