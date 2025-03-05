
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart, Product } from "@/context/CartContext";
import { getNextPurchaseStep, setCartSidebarState, getCartSidebarState } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { purchaseFlowPaths } from "@/lib/utils";
import { CartHeader } from "./CartHeader";
import { CartContent } from "./CartContent";
import { CartFooter } from "./CartFooter";

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase, 
    getSubtotal
  } = useCart();
  const location = useLocation();
  const path = location.pathname;
  const nextPath = getNextPurchaseStep(path);
  
  // Don't show on pricing page or non-purchase flow pages
  const shouldShow = purchaseFlowPaths.includes(path) && path !== '/pricing';
  
  // Products data
  const [products, setProducts] = useState<Product[]>([]);
  
  // Fetch products data
  useEffect(() => {
    if (window._products) {
      setProducts(window._products);
    }
  }, [cart]);

  // Initialize isOpen state from localStorage
  useEffect(() => {
    const sidebarState = getCartSidebarState();
    setIsOpen(sidebarState);
  }, []);

  if (!shouldShow) return null;

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setCartSidebarState(newState);
  };

  return (
    <div 
      className={cn(
        "fixed inset-y-0 right-0 z-40 transition-all duration-300 ease-in-out h-screen pt-16",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-full bg-vitruve-purple text-white p-2 rounded-l-md"
        aria-label={isOpen ? "Close cart" : "Open cart"}
      >
        {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
      
      {/* Cart sidebar */}
      <div className="w-80 sm:w-96 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col">
        <CartHeader />
        <CartContent 
          selectedPlan={selectedPlan}
          encoderPurchase={encoderPurchase}
          cart={cart}
          products={products}
        />
        <CartFooter 
          subtotal={getSubtotal()}
          nextPath={nextPath}
        />
      </div>
    </div>
  );
}
