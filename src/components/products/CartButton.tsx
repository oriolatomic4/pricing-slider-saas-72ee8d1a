
import React from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/context/CartContext";

interface CartButtonProps {
  product: Product;
}

const CartButton = ({ product }: CartButtonProps) => {
  const { cart, addToCart } = useCart();
  const isInCart = cart[product.id] > 0;
  
  return (
    <Button 
      onClick={() => addToCart(product)}
      className="w-full bg-vitruve-cyan hover:bg-vitruve-cyan/90 text-black"
    >
      {isInCart ? (
        <>
          <Check className="w-4 h-4 mr-1" /> ADDED TO CART
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
