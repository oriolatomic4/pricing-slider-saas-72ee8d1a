
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  title: string;
  products: Product[];
  centerTitle?: boolean;
  uppercase?: boolean;
}

const ProductGrid = ({
  title,
  products,
  centerTitle = false,
  uppercase = false
}: ProductGridProps) => {
  return (
    <div className="mb-12">
      <h2 className={cn(
        "text-xl font-bold mb-6",
        centerTitle ? "text-center" : "text-left",
        uppercase ? "uppercase" : ""
      )}>
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
