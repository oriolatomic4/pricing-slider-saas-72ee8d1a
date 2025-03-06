import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const WhatIsVitruveSection = () => {
  return <div className="bg-white dark:bg-black py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img 
          alt="Vitruve platform featuring Builder, VBT, and Lab modules" 
          className="w-full rounded-lg shadow-xl mb-12" 
          src="/lovable-uploads/9eb60e27-22cf-48f3-bf3c-8fa9b0bee7bc.png" 
        />
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">What is </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Vitruve?</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-white/70 max-w-4xl mx-auto mb-8 transition-colors duration-200">
            Vitruve is an all-in-one platform for strength and conditioning that simplifies complex coaching tasks, 
            enhances time efficiency, and provides data clarity, enabling coaches to make informed decisions 
            and boost athlete performance through seamless integration with VBT technology.
          </p>
          
          <div className="flex justify-center space-x-4 mb-16">
            <Button
              variant="ghost"
              className="border border-transparent hover:border-vitruve-purple hover:bg-transparent hover:text-gray-900 dark:hover:text-white text-gray-900 dark:text-white transition-colors duration-200"
              onClick={() => window.location.href = '/contact'}
            >
              Talk to sales
            </Button>
            <Button 
              className="bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90"
              onClick={() => window.location.href = '/pricing'}
            >
              Get Started Free
            </Button>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Vitruve Builder Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-200">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/f05857c3-fe50-4cb4-ba16-dbc769e65b0a.png" 
                    alt="Vitruve Builder" 
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Builder</h3>
                <p className="text-gray-700 dark:text-white/70 mb-6 transition-colors duration-200">
                  Design and customize workout programs with an intuitive builder that simplifies complex training plans and adapts to any athlete's needs.
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider transition-colors duration-200">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-purple" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Drag & drop interface</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-purple" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Template library</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-purple" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Progress tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
                <Button className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Vitruve Training Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-200">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/cb4f7b64-baba-4b66-90f0-01a8c6a869c5.png" 
                    alt="Vitruve Training" 
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Training</h3>
                <p className="text-gray-700 dark:text-white/70 mb-6 transition-colors duration-200">
                  Execute velocity-based training sessions with real-time feedback, enabling coaches to optimize workouts based on immediate performance data.
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider transition-colors duration-200">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-cyan" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Real-time velocity tracking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-cyan" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Auto-adjusting loads</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-cyan" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Athlete monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
                <Button className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white">
                  Learn more
                </Button>
              </div>
            </div>

            {/* Vitruve Labs Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-200">
              <div className="p-6">
                <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 border border-gray-200 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/4b5878f7-4f70-4603-b6ca-c40129e46c8b.png" 
                    alt="Vitruve Labs" 
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-200">Vitruve Labs</h3>
                <p className="text-gray-700 dark:text-white/70 mb-6 transition-colors duration-200">
                  Analyze performance metrics and generate insightful reports to identify trends, make data-driven decisions, and optimize training methodologies.
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider transition-colors duration-200">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-yellow" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-yellow" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Custom reports</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <ChevronRight className="h-3 w-3 text-vitruve-yellow" />
                      </span>
                      <span className="ml-3 text-gray-700 dark:text-white/70 transition-colors duration-200">Team comparisons</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
                <Button className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default WhatIsVitruveSection;
