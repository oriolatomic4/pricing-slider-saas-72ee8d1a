
import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="relative h-48 bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-center">
      <img 
        src={src} 
        alt={alt} 
        className="h-full object-contain"
      />
    </div>
  );
};

export default ProductImage;
