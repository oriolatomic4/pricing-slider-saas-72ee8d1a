
import React from "react";
import { Product } from "@/context/CartContext";
import ProductImage from "./ProductImage";
import PriceDisplay from "./PriceDisplay";
import CartButton from "./CartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
      <ProductImage src={product.image} alt={product.name} />
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-1">{product.name}</h3>
        <PriceDisplay price={product.price} />
        
        <div className="mt-auto">
          <CartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
