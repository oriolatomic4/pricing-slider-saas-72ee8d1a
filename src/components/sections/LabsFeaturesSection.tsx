
import { useState } from "react";
import FeatureTab from "../features/FeatureTab";
import { useTheme } from "@/context/ThemeContext";

const analyticsImage = "/lovable-uploads/2ef15874-d25f-40c0-ae8c-9418dec6b085.png";

const features = [
  {
    title: "Comprehensive Analytics",
    subtitle: "Track and visualize performance data across multiple metrics and timeframes",
    image: analyticsImage
  },
  {
    title: "AI-Powered Insights",
    subtitle: "Get intelligent recommendations based on athlete performance patterns",
    image: analyticsImage
  },
  {
    title: "Progress Reporting",
    subtitle: "Generate detailed reports to share with athletes, teams, and stakeholders",
    image: analyticsImage
  }
];

const LabsFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();
  
  return (
    <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Data-driven decisions for </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">peak performance</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
            Transform raw training data into actionable insights with our advanced analytics platform designed for coaches and athletes.
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-vitruve-purple/10 text-vitruve-purple mb-4">ANALYTICS DASHBOARD</span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Labs</h3>
                <p className="text-lg text-gray-700 dark:text-white/70 transition-colors duration-200">Data-based decisions with all your data in the same place.</p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <FeatureTab 
                    key={index} 
                    feature={feature} 
                    isActive={activeTab === index} 
                    onClick={() => setActiveTab(index)} 
                  />
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl glass">
                {features.map((feature, index) => (
                  <img 
                    key={index} 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`w-full h-full object-cover transition-all duration-500 ${activeTab === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsFeaturesSection;
