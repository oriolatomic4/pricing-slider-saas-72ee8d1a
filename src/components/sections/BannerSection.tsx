
import { Button } from "@/components/ui/button";
import { Phone, Store } from "lucide-react";

const BannerSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Banner image - updated to the requested Unsplash image */}
      <img 
        src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&q=80" 
        alt="Person lifting weights painting" 
        className="w-full h-[400px] object-cover object-center"
      />

      {/* Content positioned over the image */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            EMPOWER YOUR<br />
            COACHING TODAY WITH<br />
            VITRUVE
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              variant="ghost"
              className="border border-transparent hover:border-vitruve-purple hover:bg-transparent hover:text-gray-900 dark:hover:text-white text-white transition-colors duration-200"
              onClick={() => window.location.href = '/contact'}
            >
              Talk to sales
            </Button>
            
            <Button 
              className="bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90"
              onClick={() => window.location.href = '/pricing'}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
