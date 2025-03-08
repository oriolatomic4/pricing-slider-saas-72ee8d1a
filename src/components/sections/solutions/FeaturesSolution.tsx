
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface FeaturesSolutionProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  image: string;
}

const FeaturesSolution = ({ title, subtitle, features, image }: FeaturesSolutionProps) => {
  return (
    <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
            {title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white/70 transition-colors duration-200">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSolution;
