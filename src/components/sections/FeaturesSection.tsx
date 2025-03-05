import { useState } from "react";
import FeatureTab from "../features/FeatureTab";
import { useTheme } from "@/context/ThemeContext";
const workoutImage = "/lovable-uploads/cfb70c1e-e311-437b-93b8-f818b6b62999.png";
const vbtImage = "/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png";
const analyticsImage = "/lovable-uploads/2ef15874-d25f-40c0-ae8c-9418dec6b085.png";
const features = [{
  title: "30+ databases in just 1 search",
  subtitle: "Access comprehensive data across multiple sources instantly",
  image: workoutImage
}, {
  title: "No more missed opportunities",
  subtitle: "Access more qualified leads, get verified emails, and accurate phone numbers.",
  image: workoutImage
}, {
  title: "Build a CRM your team trusts",
  subtitle: "Create reliable, trustworthy databases for your entire organization",
  image: workoutImage
}];
const secondFeatures = [{
  title: "Multiple channels, one platform",
  subtitle: "Automatically connect and engage with leads using LinkedIn& Email.",
  image: vbtImage
}, {
  title: "Ice-breakers that convert",
  subtitle: "AI-generated conversation starters that engage prospects and drive responses.",
  image: vbtImage
}, {
  title: "Warm up leads automatically",
  subtitle: "Let AI nurture your leads with personalized follow-ups and engagement.",
  image: vbtImage
}];
const thirdFeatures = [{
  title: "Performance Analytics",
  subtitle: "Get detailed insights into your athlete's progress with advanced analytics.",
  image: analyticsImage
}, {
  title: "Team Collaboration",
  subtitle: "Work seamlessly with your coaching staff and share progress reports.",
  image: analyticsImage
}, {
  title: "Custom Training Plans",
  subtitle: "Create and adjust training programs based on real-time performance data.",
  image: analyticsImage
}];
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSecondTab, setActiveSecondTab] = useState(0);
  const [activeThirdTab, setActiveThirdTab] = useState(0);
  const {
    theme
  } = useTheme();
  return <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Everything you need for </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">S&C</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
            Create full individualized workouts in minutes, get reliable data from your trainings, compare and get performance insights.
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
                {features.map((feature, index) => <FeatureTab key={index} feature={feature} isActive={activeTab === index} onClick={() => setActiveTab(index)} />)}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl glass">
                {features.map((feature, index) => <img key={index} src={feature.image} alt={feature.title} className={`w-full h-full object-cover transition-all duration-500 ${activeTab === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"}`} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-8 order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl glass">
                {secondFeatures.map((feature, index) => <img key={index} src={feature.image} alt={feature.title} className={`w-full h-full object-cover transition-all duration-500 ${activeSecondTab === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"}`} />)}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-8 text-left">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-vitruve-purple/10 text-vitruve-purple mb-4">VELOCTY BASED TRAINING</span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Training</h3>
                <p className="text-lg text-gray-700 dark:text-white/70 transition-colors duration-200">
                  Book more meetings in one click with personalised AI messages that feel human.
                </p>
              </div>

              <div className="space-y-4">
                {secondFeatures.map((feature, index) => <FeatureTab key={index} feature={feature} isActive={activeSecondTab === index} onClick={() => setActiveSecondTab(index)} />)}
              </div>
            </div>
          </div>
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
                {thirdFeatures.map((feature, index) => <FeatureTab key={index} feature={feature} isActive={activeThirdTab === index} onClick={() => setActiveThirdTab(index)} />)}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl glass">
                {thirdFeatures.map((feature, index) => <img key={index} src={feature.image} alt={feature.title} className={`w-full h-full object-cover transition-all duration-500 ${activeThirdTab === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default FeaturesSection;