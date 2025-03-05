
import React, { useEffect } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import CheckoutBar from "@/components/products/CheckoutBar";
import { Product } from "@/context/CartContext";

// Define the product data with proper typing for 'category'
const accessories: Product[] = [
  {
    id: "roller-hook",
    name: "Roller Hook",
    price: 19.65,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "accessory",
  },
  {
    id: "velcro-strap",
    name: "Velcro Strap",
    price: 16.80,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "accessory",
  },
  {
    id: "smartphone-mount",
    name: "Smartphone Mount",
    price: 29.00,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "accessory",
  },
  {
    id: "neoprene-bag",
    name: "Neoprene Bag",
    price: 16.80,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "accessory",
  },
];

const latestReleases: Product[] = [
  {
    id: "powerlifting-vbt",
    name: "Powerlifting VBT Training Program/Guide",
    price: 55.00,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "software",
  },
  {
    id: "vitruve-teams-app",
    name: "Vitruve Teams App",
    price: 380.00,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "software",
  },
  {
    id: "vitruve-pack",
    name: "Vitruve Pack for Athletes/Individuals",
    price: 678.00,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "software",
  },
  {
    id: "course-intermediate",
    name: "Course Intermediate VBT",
    price: 202.00,
    image: "/lovable-uploads/0a920eb3-af1f-4f54-94cf-4e2eae220145.png",
    category: "software",
  },
];

const Accessories = () => {
  // Make products available globally for the cart sidebar
  useEffect(() => {
    window._products = [...accessories, ...latestReleases];
  }, []);

  return (
    <div className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-10 bg-gradient-to-r from-vitruve-purple via-vitruve-cyan to-vitruve-yellow bg-clip-text text-transparent text-center">
          Select your accessories
        </h1>
      
        <ProductGrid title="Accessories" products={accessories} />
        <ProductGrid title="Latest Releases" products={latestReleases} centerTitle uppercase />
      </div>
      
      <CheckoutBar />
    </div>
  );
};

export default Accessories;
