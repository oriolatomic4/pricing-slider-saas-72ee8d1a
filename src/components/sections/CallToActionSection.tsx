import { cn } from "@/lib/utils";
const CallToActionSection = () => {
  return <div className="relative py-24 bg-gray-100 dark:bg-black transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Vitruve is designed </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">for </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">everyone.</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">
        </p>
        </div>

        <div className="grid gap-8">
          {/* First Row - Large Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fixed square card */}
            <div className="h-[400px] md:col-span-1 glass rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-vitruve-purple/30 to-transparent">
              <div className="h-full flex flex-col">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight transition-colors duration-200">
                  +80% success rate in finding the right connections.
                </h3>
                <div className="mt-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-white/20 transition-colors duration-200" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-gray-900 dark:text-white transition-colors duration-200">alex.smith@vitruve.ai</p>
                          <svg className="w-5 h-5 text-vitruve-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-900 dark:text-white transition-colors duration-200">+1 555 555-1234</p>
                          <svg className="w-5 h-5 text-vitruve-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive width card */}
            <div className="h-[400px] md:col-span-2 glass rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-black dark:to-black/80 transition-colors duration-200">
              <div className="h-full flex flex-col">
                <img src="/lovable-uploads/ff0ee14e-6628-4a5d-af85-c94689fab843.png" alt="Workflow diagram" className="w-full rounded-xl mb-8" />
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                    Build complex workflows easily.
                  </h3>
                  <p className="text-gray-700 dark:text-white/70 transition-colors duration-200">
                    Automate actions based on any condition, exactly how you need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Small Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stats card */}
            <div className="h-[300px] md:col-span-2 glass rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-black dark:to-black/80 transition-colors duration-200">
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                    Over 20% of leads reply - because great outreach gets great responses.
                  </h3>
                  <div className="mt-4">
                    <div className="bg-white/5 dark:bg-white/5 rounded-lg p-4 transition-colors duration-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-white/70 transition-colors duration-200">Week 4</span>
                        <span className="text-gray-900 dark:text-white transition-colors duration-200">100,000</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden transition-colors duration-200">
                        <div className="h-full w-3/4 bg-gradient-to-r from-vitruve-purple to-vitruve-cyan" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Square feature card */}
            <div className="h-[300px] md:col-span-1 glass rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-vitruve-purple/30 to-transparent">
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                    Simple. Powerful. Built for everyone.
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-white/70 mb-6 transition-colors duration-200">
                    No complexity, just results.
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <img src="/lovable-uploads/ff0ee14e-6628-4a5d-af85-c94689fab843.png" alt="Application interface" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CallToActionSection;