
import { useState } from "react";
import FeatureTab from "../features/FeatureTab";
import { useTheme } from "@/context/ThemeContext";

const workoutImage = "/lovable-uploads/cfb70c1e-e311-437b-93b8-f818b6b62999.png";

const features = [
  {
    title: "Smart Workout Templates",
    subtitle: "Access 100+ professionally designed workout templates for any fitness goal",
    image: workoutImage
  }, 
  {
    title: "Drag & Drop Builder",
    subtitle: "Create custom workouts with our intuitive drag-and-drop interface",
    image: workoutImage
  }, 
  {
    title: "Exercise Database",
    subtitle: "Browse our comprehensive library of exercises with video demonstrations",
    image: workoutImage
  }
];

const BuilderFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();
  
  return (
    <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Everything you need to </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">build better workouts</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
            Create full individualized workouts in minutes, customize every aspect of your training program, and incorporate scientific principles with ease.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-vitruve-purple/10 text-vitruve-purple mb-4">WORKOUT BUILDER</span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Builder</h3>
                <p className="text-lg text-gray-700 dark:text-white/70 transition-colors duration-200">Build smart, train better.</p>
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

export default BuilderFeaturesSection;
