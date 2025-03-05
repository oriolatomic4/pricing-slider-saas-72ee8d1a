
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [{
  company: "factorial",
  saved: "2h a day",
  activity: "manual prospecting",
  since: "since day one"
}, {
  company: "salesforce",
  saved: "4h a day",
  activity: "lead generation",
  since: "in the first month"
}, {
  company: "hubspot",
  saved: "3h a day",
  activity: "sales outreach",
  since: "from the start"
}];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  return <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-vitruve-purple/30 via-black to-vitruve-cyan/30 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{
        loop: true,
        align: "center"
      }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => <CarouselItem key={index} className="flex items-center justify-center">
                <div className="text-center max-w-4xl mx-auto py-12">
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-50 md:text-6xl">
                    
                    saved{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                      {testimonial.saved}
                    </span>
                    <br />
                    on{" "}
                    <span className="bg-gradient-to-r from-vitruve-purple to-purple-400 text-transparent bg-clip-text">
                      {testimonial.activity}
                    </span>
                    <br />
                    {testimonial.since}
                  </h2>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-6 text-gray-200/80 hover:text-white bg-transparent border-0 h-auto w-auto px-2 py-1">
            <span className="text-2xl sm:text-3xl font-bold">&lt;</span>
          </CarouselPrevious>
          <CarouselNext className="right-2 lg:-right-6 text-gray-200/80 hover:text-white bg-transparent border-0 h-auto w-auto px-2 py-1">
            <span className="text-2xl sm:text-3xl font-bold">&gt;</span>
          </CarouselNext>
        </Carousel>
      </div>
    </div>;
};

export default TestimonialsSection;
