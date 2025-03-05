
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CheckoutBar = () => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="outline"
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" /> 
            <span>View Cart {itemCount > 0 && `(${itemCount})`}</span>
          </Button>
        </div>
        
        <Button 
          asChild
          size="lg"
          className="bg-vitruve-purple hover:bg-vitruve-purple/90 text-white px-8"
        >
          <Link to="/checkout" className="flex items-center justify-center">
            Continue <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutBar;
