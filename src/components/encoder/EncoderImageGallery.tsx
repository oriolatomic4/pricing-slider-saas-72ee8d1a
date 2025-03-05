
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EncoderImageGalleryProps {
  images: string[];
}

const EncoderImageGallery = ({ images }: EncoderImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6">
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden aspect-square flex items-center justify-center">
        <img
          src={images[selectedImage]}
          alt="Vitruve Encoder"
          className="object-contain max-h-full max-w-full p-4"
        />
        
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="flex gap-3 overflow-x-auto py-2">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={cn(
              "flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden",
              selectedImage === idx 
                ? "border-vitruve-purple" 
                : "border-gray-200 dark:border-gray-700"
            )}
          >
            <img 
              src={image} 
              alt={`Vitruve Encoder thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EncoderImageGallery;
