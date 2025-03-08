
import React from "react";
import { School, Award, Lightbulb } from "lucide-react";
import HeroSolution from "@/components/sections/solutions/HeroSolution";
import FeaturesSolution from "@/components/sections/solutions/FeaturesSolution";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import LogosSection from "@/components/sections/LogosSection";
import BannerSection from "@/components/sections/BannerSection";

const HighSchools = () => {
  const features = [
    {
      title: "Athlete Development Tracking",
      subtitle: "Monitor growth and progress throughout the school year",
      icon: <School className="w-10 h-10 text-vitruve-purple" />
    },
    {
      title: "Team Performance Analysis",
      subtitle: "Compare team metrics and track improvements over time",
      icon: <Award className="w-10 h-10 text-vitruve-blue" />
    },
    {
      title: "Strength Program Builder",
      subtitle: "Create customized programs for different sports and age groups",
      icon: <Lightbulb className="w-10 h-10 text-vitruve-cyan" />
    }
  ];

  return (
    <>
      <HeroSolution 
        title="High School Athletics Solutions"
        subtitle="Empower your student-athletes with professional-grade training tools"
        image="/lovable-uploads/a234427b-e3bf-474c-9481-4875e7b08873.png"
        color="purple"
        icon={<GraduationCap className="w-16 h-16 text-vitruve-purple" />}
      />
      <FeaturesSolution 
        title="Designed for young athletes"
        subtitle="Help student-athletes reach their potential with easy-to-use tools designed for high school programs"
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

export default HighSchools;
