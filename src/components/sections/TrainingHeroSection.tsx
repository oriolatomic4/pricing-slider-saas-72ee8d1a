
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState, useRef } from "react";

const TrainingHeroSection = () => {
  const { theme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScrollForAnimation = 200;
      const limitedPosition = Math.min(position, maxScrollForAnimation);
      setScrollPosition(limitedPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate rotation, scale and vertical position based on scroll position
  const rotationDegree = 15 - scrollPosition / 200 * 15;
  const scaleValue = 0.97 + scrollPosition / 200 * 0.03;
  const translateY = -50 + scrollPosition / 200 * 50;

  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")'
      }} />
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/40'}`} />
      
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-vitruve-purple to-vitruve-cyan bg-clip-text text-transparent">Intelligent </span> 
              <span className="text-white">velocity-based</span>
              <br />
              <span className="text-white">training </span> 
              <span className="bg-gradient-to-r from-vitruve-cyan to-vitruve-yellow bg-clip-text text-transparent">platform.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Transform your training with real-time velocity tracking and feedback.
              <br />Coach smarter, optimize performance, and reduce injury risk.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-vitruve-purple hover:bg-vitruve-purple/90 text-white">
                Start Training
                <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-vitruve-purple/30 text-vitruve-purple bg-white/10 backdrop-blur-sm hover:bg-vitruve-purple/10 hover:border-vitruve-purple/50">
                Book a Demo
              </Button>
            </div>
          </div>

          <div ref={videoContainerRef} className="max-w-5xl mx-auto transition-all duration-300 ease-out shadow-2xl" style={{
            transform: `perspective(1000px) rotateX(${rotationDegree}deg) scale(${scaleValue}) translateY(${translateY}px)`,
            transformOrigin: 'center top'
          }}>
            <div className="relative rounded-[2rem] overflow-hidden bg-[#222222] border-[14px] border-[#222222]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] opacity-30"></div>
              
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#333333] mx-1"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333333] mx-2"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#333333] mx-1"></div>
              </div>
              
              <div className="rounded-[1.5rem] overflow-hidden border border-[#333333] shadow-inner bg-[#121212]">
                <div className="h-6 w-full bg-[#0f0f0f] flex items-center justify-between px-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-vitruve-cyan mr-2"></div>
                    <div className="text-white/60 text-xs">Vitruve Training Dashboard</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                </div>
                
                <div style={{
                  position: 'relative',
                  paddingBottom: '56.42633228840126%',
                  height: 0
                }}>
                  <img 
                    src="/lovable-uploads/035766f7-5a81-4264-915a-b05bba259675.png" 
                    alt="Vitruve training interface" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="h-8 w-full bg-[#0f0f0f] flex items-center justify-around px-4">
                  <div className="w-6 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/50"></div>
                  <div className="w-1 h-1 rounded-full bg-white/50"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-6 inset-x-8 h-6 bg-black/20 blur-xl rounded-full"></div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-white/50 mb-8 text-xl">Trusted by premier coaches, embraced by athletes worldwide</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 1" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/68e9fe83-2f67-4890-85b2-d35ff41fa251.png" />
              </div>
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 2" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/76b2f2a3-49ab-454f-b89b-e028a80e8dc7.png" />
              </div>
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 3" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/f6e2c49b-ca3f-48e7-a1b9-8165a0307aea.png" />
              </div>
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 4" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/6bb31a8b-b7e0-41c6-b54f-9b51f5be2ed1.png" />
              </div>
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 5" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/a234427b-e3bf-474c-9481-4875e7b08873.png" />
              </div>
              <div className="h-12 w-24 bg-white/5 rounded-lg flex items-center justify-center p-2">
                <img alt="Partner logo 6" className="w-full h-full object-contain hover:opacity-100 transition-opacity" src="/lovable-uploads/105421a7-80ad-47a3-a05d-1c1b649ef7e7.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHeroSection;
