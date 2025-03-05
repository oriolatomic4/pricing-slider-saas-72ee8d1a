
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { setCartSidebarState } from "@/lib/utils";

export const CartButton = () => {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();
  
  const handleOpenCart = () => {
    setCartSidebarState(true);
  };
  
  return (
    <Button
      variant="ghost"
      className="relative p-2"
      onClick={handleOpenCart}
      aria-label="Open Cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-vitruve-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  );
};
