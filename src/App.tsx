
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Pricing from "./pages/Pricing";
import EncoderSelection from "./pages/EncoderSelection";
import Accessories from "./pages/Accessories";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import { TopNav } from "./components/navigation/TopNav";
import { PurchaseStepsNav } from "./components/navigation/PurchaseStepsNav";
import { CartSidebar } from "./components/cart/CartSidebar";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FooterSection from "./components/sections/FooterSection";
import { purchaseFlowPaths } from "./lib/utils";
import { MinimalTopNav } from "./components/navigation/MinimalTopNav";
import BannerSection from "./components/sections/BannerSection";
import VitruveBuilder from "./pages/VitruveBuilder";
import VitruveTraining from "./pages/VitruveTraining";
import VitruveLabs from "./pages/VitruveLabs";
import HighSchools from "./pages/HighSchools";
import Colleges from "./pages/Colleges";
import PrivateFacilities from "./pages/PrivateFacilities";
import ProfessionalTeams from "./pages/ProfessionalTeams";
import HealthFacilities from "./pages/HealthFacilities";

// Create a client for React Query
const queryClient = new QueryClient();

// Navigation controller component
const NavigationController = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Don't show any navigation on payment success/failure pages
  if (path === "/payment-success" || path === "/payment-failed") {
    return null;
  }
  
  // Pages that should use the minimal navigation - REMOVE the Vitruve product pages from this list
  const minimalNavPaths = [
    "/resources",
    "/blog"
  ];
  
  // Check if the current path is part of the purchase flow
  const isPurchaseFlow = purchaseFlowPaths.includes(path);
  
  // Check if the current path should use the minimal navigation
  const useMinimalNav = minimalNavPaths.includes(path);
  
  if (useMinimalNav) {
    return <MinimalTopNav />;
  }
  
  return isPurchaseFlow ? <PurchaseStepsNav /> : <TopNav />;
};

// Simple page component for product pages
const ProductPage = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="container mx-auto px-4 py-16 mt-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{description}</p>
      <BannerSection />
    </div>
  );
};

// Layout component
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-200 pt-[6.25rem]">
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
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/payment-failed" element={<PaymentFailed />} />
                    
                    {/* Product pages */}
                    <Route path="/vitruve-builder" element={<VitruveBuilder />} />
                    <Route path="/vitruve-training" element={<VitruveTraining />} />
                    <Route path="/vitruve-labs" element={<VitruveLabs />} />
                    
                    {/* Solution pages */}
                    <Route path="/solutions/high-schools" element={<HighSchools />} />
                    <Route path="/solutions/colleges" element={<Colleges />} />
                    <Route path="/solutions/private-facilities" element={<PrivateFacilities />} />
                    <Route path="/solutions/professional-teams" element={<ProfessionalTeams />} />
                    <Route path="/solutions/health-facilities" element={<HealthFacilities />} />
                    
                    {/* Simple pages for other navigation items */}
                    <Route 
                      path="/resources" 
                      element={<ProductPage 
                        title="Resources" 
                        description="Access guides, tutorials, and other helpful resources." 
                      />} 
                    />
                    <Route 
                      path="/blog" 
                      element={<ProductPage 
                        title="Blog" 
                        description="Read the latest news and insights from Vitruve." 
                      />} 
                    />
                    
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
