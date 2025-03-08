
import React from "react";
import { Trophy, Activity, Shield } from "lucide-react";
import HeroSolution from "@/components/sections/solutions/HeroSolution";
import FeaturesSolution from "@/components/sections/solutions/FeaturesSolution";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import LogosSection from "@/components/sections/LogosSection";
import BannerSection from "@/components/sections/BannerSection";

const ProfessionalTeams = () => {
  const features = [
    {
      title: "Elite Performance Analytics",
      subtitle: "Cutting-edge metrics for professional sports performance",
      icon: <Trophy className="w-10 h-10 text-vitruve-yellow" />
    },
    {
      title: "Load Management",
      subtitle: "Advanced monitoring to optimize training load and prevent injuries",
      icon: <Activity className="w-10 h-10 text-vitruve-blue" />
    },
    {
      title: "Injury Prevention",
      subtitle: "Predictive analytics to identify potential injury risks",
      icon: <Shield className="w-10 h-10 text-vitruve-purple" />
    }
  ];

  return (
    <>
      <HeroSolution 
        title="Professional Sports Team Solutions"
        subtitle="Give your team the competitive edge with elite sports science technology"
        image="/lovable-uploads/2ef15874-d25f-40c0-ae8c-9418dec6b085.png"
        color="yellow"
        icon={<Trophy className="w-16 h-16 text-vitruve-yellow" />}
      />
      <FeaturesSolution 
        title="Designed for elite performance"
        subtitle="Maximize athlete potential and team success with professional-grade training tools"
        features={features}
        image="/lovable-uploads/cfb70c1e-e311-437b-93b8-f818b6b62999.png"
      />
      <TestimonialsSection />
      <LogosSection />
      <CallToActionSection />
      <BannerSection />
    </>
  );
};

export default ProfessionalTeams;
