
import React from "react";
import { Building, LayoutDashboard, Users } from "lucide-react";
import HeroSolution from "@/components/sections/solutions/HeroSolution";
import FeaturesSolution from "@/components/sections/solutions/FeaturesSolution";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import LogosSection from "@/components/sections/LogosSection";
import BannerSection from "@/components/sections/BannerSection";

const PrivateFacilities = () => {
  const features = [
    {
      title: "Client Management",
      subtitle: "Track progress for multiple clients with individualized programs",
      icon: <Users className="w-10 h-10 text-vitruve-cyan" />
    },
    {
      title: "Business Insights",
      subtitle: "Analytics to help grow your training business",
      icon: <LayoutDashboard className="w-10 h-10 text-vitruve-blue" />
    },
    {
      title: "Facility Optimization",
      subtitle: "Tools to maximize space and equipment utilization",
      icon: <Building className="w-10 h-10 text-vitruve-purple" />
    }
  ];

  return (
    <>
      <HeroSolution 
        title="Private Training Facility Solutions"
        subtitle="Elevate your training center with professional tools that impress clients and improve results"
        image="/lovable-uploads/cfb70c1e-e311-437b-93b8-f818b6b62999.png"
        color="cyan"
        icon={<Building className="w-16 h-16 text-vitruve-cyan" />}
      />
      <FeaturesSolution 
        title="Grow your training business"
        subtitle="Provide premium services and stand out from competitors with cutting-edge technology"
        features={features}
        image="/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png"
      />
      <TestimonialsSection />
      <LogosSection />
      <CallToActionSection />
      <BannerSection />
    </>
  );
};

export default PrivateFacilities;
