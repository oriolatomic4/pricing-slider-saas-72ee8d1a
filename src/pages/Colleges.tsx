
import React from "react";
import { University, Target, Brain } from "lucide-react";
import HeroSolution from "@/components/sections/solutions/HeroSolution";
import FeaturesSolution from "@/components/sections/solutions/FeaturesSolution";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import LogosSection from "@/components/sections/LogosSection";
import BannerSection from "@/components/sections/BannerSection";

const Colleges = () => {
  const features = [
    {
      title: "Elite Performance Metrics",
      subtitle: "Advanced analytics for collegiate-level performance",
      icon: <University className="w-10 h-10 text-vitruve-blue" />
    },
    {
      title: "Multi-Sport Management",
      subtitle: "Unified platform for all athletic programs",
      icon: <Target className="w-10 h-10 text-vitruve-purple" />
    },
    {
      title: "Research Integration",
      subtitle: "Support for sports science research projects",
      icon: <Brain className="w-10 h-10 text-vitruve-cyan" />
    }
  ];

  return (
    <>
      <HeroSolution 
        title="College Athletics Solutions"
        subtitle="Take your collegiate athletics program to the next level with data-driven training"
        image="/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png"
        color="blue"
        icon={<Users className="w-16 h-16 text-vitruve-blue" />}
      />
      <FeaturesSolution 
        title="Comprehensive collegiate solutions"
        subtitle="Optimize training, reduce injuries, and enhance performance across all college sports programs"
        features={features}
        image="/lovable-uploads/2ef15874-d25f-40c0-ae8c-9418dec6b085.png"
      />
      <TestimonialsSection />
      <LogosSection />
      <CallToActionSection />
      <BannerSection />
    </>
  );
};

export default Colleges;
