
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/context/CartContext";
import { getNextPurchaseStep } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { purchaseFlowPaths } from "@/lib/utils";

interface CartItemProps {
  name: string;
  description: string;
  price: number | string;
  quantity?: number;
  image?: string;
}

const CartItem = ({ name, description, price, quantity = 1, image }: CartItemProps) => {
  return (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        {image && (
          <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        
        <div className="text-right">
          <div className="font-semibold">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </div>
          {quantity > 1 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Qty: {quantity}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function CartSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase, 
    getSubtotal,
    getCartItemCount
  } = useCart();
  const location = useLocation();
  const path = location.pathname;
  const nextPath = getNextPurchaseStep(path);
  
  // Don't show on pricing page or non-purchase flow pages
  const shouldShow = purchaseFlowPaths.includes(path) && path !== '/pricing';
  
  // Products data (this would normally come from a global context or API)
  const [products, setProducts] = useState<Product[]>([]);
  const accessoryItems = Object.keys(cart).length;
  
  // Fetch products data
  useEffect(() => {
    // In a real app, this would be a more robust solution
    // For now, we'll get the products from the window object that we'll populate in Accessories.tsx
    if (window._products) {
      setProducts(window._products);
    }
  }, [cart]);

  if (!shouldShow) return null;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={cn(
        "fixed top-20 right-0 h-[calc(100vh-5rem)] z-40 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-0 transform -translate-x-full bg-vitruve-purple text-white p-2 rounded-l-md"
        aria-label={isOpen ? "Close cart" : "Open cart"}
      >
        {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
      
      {/* Cart sidebar */}
      <div className="w-80 sm:w-96 h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            YOUR CART
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Plan selection */}
          {selectedPlan && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Software Plan</h3>
              <CartItem 
                name={selectedPlan.name} 
                description="Software subscription"
                price={selectedPlan.price}
              />
            </div>
          )}
          
          {/* Encoder selection */}
          {encoderPurchase && encoderPurchase.count > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Hardware</h3>
              <CartItem 
                name={`Vitruve Encoder${encoderPurchase.count > 1 ? 's' : ''}`} 
                description={`${encoderPurchase.count} unit${encoderPurchase.count > 1 ? 's' : ''}`}
                price={encoderPurchase.count * encoderPurchase.pricePerUnit}
              />
            </div>
          )}
          
          {/* Accessories */}
          {accessoryItems > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Accessories</h3>
              {Object.entries(cart).map(([productId, quantity]) => {
                const product = products.find(p => p.id === productId);
                if (!product) return null;
                
                return (
                  <CartItem 
                    key={productId}
                    name={product.name}
                    description={product.category}
                    price={product.price * quantity}
                    quantity={quantity}
                    image={product.image}
                  />
                );
              })}
            </div>
          )}
          
          {/* Empty state */}
          {!selectedPlan && !encoderPurchase && accessoryItems === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              Your cart is empty
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">€{getSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 dark:text-gray-400">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2 border-t border-gray-200 dark:border-gray-700">
              <span>Total</span>
              <span>€{getSubtotal().toFixed(2)}</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-black hover:bg-black/90 text-white font-bold py-3 text-lg"
            asChild
          >
            <Link to={nextPath}>
              CONTINUE
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
