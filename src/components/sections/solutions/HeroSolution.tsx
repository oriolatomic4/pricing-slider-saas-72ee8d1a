
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeroSolutionProps {
  title: string;
  subtitle: string;
  image: string;
  color: "purple" | "blue" | "cyan" | "yellow" | "red";
  icon: React.ReactNode;
}

const HeroSolution = ({ title, subtitle, image, color, icon }: HeroSolutionProps) => {
  const bgGradient = {
    purple: "from-vitruve-purple/20 to-transparent",
    blue: "from-vitruve-blue/20 to-transparent",
    cyan: "from-vitruve-cyan/20 to-transparent",
    yellow: "from-vitruve-yellow/20 to-transparent",
    red: "from-red-500/20 to-transparent",
  };

  const buttonColor = {
    purple: "bg-vitruve-purple hover:bg-vitruve-purple/90",
    blue: "bg-vitruve-blue hover:bg-vitruve-blue/90",
    cyan: "bg-vitruve-cyan hover:bg-vitruve-cyan/90 text-black",
    yellow: "bg-vitruve-yellow hover:bg-vitruve-yellow/90 text-black",
    red: "bg-red-500 hover:bg-red-500/90",
  };

  return (
    <div className={cn(
      "relative py-24 bg-gradient-to-b",
      bgGradient[color]
    )}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              {icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
              {title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-white/70 mb-8 max-w-xl transition-colors duration-200">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className={cn(
                "text-white",
                buttonColor[color]
              )}>
                Get Started
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl glass">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSolution;
