
import { useState } from "react";
import FeatureTab from "../features/FeatureTab";
import { useTheme } from "@/context/ThemeContext";

const vbtImage = "/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png";

const features = [
  {
    title: "Real-time Velocity Tracking",
    subtitle: "Monitor lift velocity with precision to optimize training intensity",
    image: vbtImage
  }, 
  {
    title: "Personalized Feedback",
    subtitle: "Get instant feedback on form, intensity, and performance metrics",
    image: vbtImage
  }, 
  {
    title: "Fatigue Management",
    subtitle: "Monitor and manage athlete fatigue to prevent injuries and overtraining",
    image: vbtImage
  }
];

const TrainingFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();
  
  return (
    <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Advanced training based on </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">real data</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
            Train with velocity-based metrics to optimize intensity, track progress accurately, and maximize performance gains.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-8 order-2 lg:order-1">
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

            <div className="order-1 lg:order-2">
              <div className="mb-8 text-left">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-vitruve-purple/10 text-vitruve-purple mb-4">VELOCITY BASED TRAINING</span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Training</h3>
                <p className="text-lg text-gray-700 dark:text-white/70 transition-colors duration-200">
                  Track, analyze, and optimize every rep for maximum results.
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingFeaturesSection;
