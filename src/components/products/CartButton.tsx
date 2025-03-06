
import React from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/context/CartContext";
import { setCartSidebarState } from "@/lib/utils";

interface CartButtonProps {
  product: Product;
}

const CartButton = ({ product }: CartButtonProps) => {
  const { cart, addToCart } = useCart();
  const isInCart = cart[product.id] > 0;
  const itemCount = cart[product.id] || 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Open the cart sidebar when adding products
    setCartSidebarState(true);
  };
  
  return (
    <Button 
      onClick={handleAddToCart}
      className="w-full bg-vitruve-cyan hover:bg-vitruve-cyan/90 text-black relative"
    >
      {isInCart ? (
        <>
          <Check className="w-4 h-4 mr-1" /> ADDED TO CART
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4 mr-1" /> ADD TO CART
        </>
      )}
    </Button>
  );
};

export default CartButton;
