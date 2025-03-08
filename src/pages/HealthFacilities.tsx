
import React from "react";
import { HeartPulse, Activity, FlaskConical } from "lucide-react";
import HeroSolution from "@/components/sections/solutions/HeroSolution";
import FeaturesSolution from "@/components/sections/solutions/FeaturesSolution";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import LogosSection from "@/components/sections/LogosSection";
import BannerSection from "@/components/sections/BannerSection";

const HealthFacilities = () => {
  const features = [
    {
      title: "Rehabilitation Tracking",
      subtitle: "Monitor patient progress through recovery and rehabilitation",
      icon: <HeartPulse className="w-10 h-10 text-red-500" />
    },
    {
      title: "Clinical Assessment",
      subtitle: "Objective measurement tools for clinical evaluations",
      icon: <Activity className="w-10 h-10 text-vitruve-blue" />
    },
    {
      title: "Research & Development",
      subtitle: "Tools to support clinical research and evidence-based practice",
      icon: <FlaskConical className="w-10 h-10 text-vitruve-purple" />
    }
  ];

  return (
    <>
      <HeroSolution 
        title="Health & Clinical Facility Solutions"
        subtitle="Enhance rehabilitation outcomes with precise measurement and tracking"
        image="/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png"
        color="red"
        icon={<HeartPulse className="w-16 h-16 text-red-500" />}
      />
      <FeaturesSolution 
        title="Clinical excellence through precision"
        subtitle="Improve patient outcomes with objective data and evidence-based protocols"
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

export default HealthFacilities;
