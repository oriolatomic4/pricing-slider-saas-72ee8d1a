
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart, Product } from "@/context/CartContext";
import { getNextPurchaseStep, setCartSidebarState, getCartSidebarState } from "@/lib/utils";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { purchaseFlowPaths } from "@/lib/utils";
import { CartHeader } from "./CartHeader";
import { CartContent } from "./CartContent";
import { CartFooter } from "./CartFooter";
import { Button } from "@/components/ui/button";

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase, 
    getSubtotal,
    removeFromCart,
    setSelectedPlan,
    setEncoderPurchase
  } = useCart();
  const location = useLocation();
  const path = location.pathname;
  const nextPath = getNextPurchaseStep(path);
  
  // Don't show on non-purchase flow pages
  const shouldShow = purchaseFlowPaths.includes(path);
  
  // Products data
  const [products, setProducts] = useState<Product[]>([]);
  
  // Fetch products data
  useEffect(() => {
    if (window._products) {
      setProducts(window._products);
    }
  }, [cart]);

  // Listen for cart sidebar state changes
  useEffect(() => {
    const handleStorageChange = () => {
      const sidebarState = getCartSidebarState();
      setIsOpen(sidebarState);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Initialize isOpen state from localStorage
    handleStorageChange();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update localStorage whenever isOpen changes
  useEffect(() => {
    setCartSidebarState(isOpen);
  }, [isOpen]);

  if (!shouldShow) return null;

  const handleClose = () => {
    setIsOpen(false);
    setCartSidebarState(false);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleRemovePlan = () => {
    setSelectedPlan(null);
  };

  const handleRemoveEncoder = () => {
    setEncoderPurchase(null);
  };

  return (
    <>
      {/* Overlay backdrop when cart is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 dark:bg-black/60 z-40 transition-opacity duration-300"
          onClick={handleClose}
        />
      )}
      
      {/* Cart sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 transition-all duration-300 ease-in-out h-full w-full sm:w-[360px] md:w-[405px]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full bg-gray-950 dark:bg-gray-950 flex flex-col shadow-xl">
          <div className="relative h-full flex flex-col overflow-hidden">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <CartHeader />
            <CartContent 
              selectedPlan={selectedPlan}
              encoderPurchase={encoderPurchase}
              cart={cart}
              products={products}
              onRemoveItem={handleRemoveItem}
              onRemovePlan={handleRemovePlan}
              onRemoveEncoder={handleRemoveEncoder}
            />
            <CartFooter 
              subtotal={getSubtotal()}
              nextPath={nextPath}
              onClose={handleClose}
            />
          </div>
        </div>
      </div>
    </>
  );
}
