
import React from 'react';

const LogosSection = () => {
  return <div className="py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">Connect your </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200">
              favorite tools
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/70 max-w-3xl mx-auto transition-colors duration-200">Adapt Vitruve to your needs with 30+ tools and data providers.</p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Logo 1 - TeamBuildr */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 20C55.8 20 20 55.8 20 100C20 144.2 55.8 180 100 180C144.2 180 180 144.2 180 100C180 55.8 144.2 20 100 20Z" fill="#F37E2F"/>
                <path d="M135 75H125V125H135V75Z" fill="white"/>
                <path d="M110 60H100V140H110V60Z" fill="white"/>
                <path d="M85 75H75V125H85V75Z" fill="white"/>
                <path d="M60 85H50V115H60V85Z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Logo 2 - Hawking Dynamics */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 50H165V150H35V50Z" fill="#1A73E8"/>
                <path d="M60 75L100 125L140 75" stroke="white" strokeWidth="10"/>
                <path d="M60 125H140" stroke="white" strokeWidth="10"/>
              </svg>
            </div>
          </div>

          {/* Logo 3 - FYTT */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 50H150V80H50V50Z" fill="#00C851"/>
                <path d="M50 90H150V110H50V90Z" fill="#00C851"/>
                <path d="M50 120H150V150H50V120Z" fill="#00C851"/>
                <path d="M65 60L85 70L65 80" fill="white"/>
                <path d="M65 130L85 140L65 150" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Logo 4 - Rock Daisy */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="60" fill="#FFCC00"/>
                <path d="M100 40C120 40 135 65 135 100C135 135 120 160 100 160C80 160 65 135 65 100C65 65 80 40 100 40Z" fill="#FF9900"/>
                <circle cx="85" cy="80" r="10" fill="white"/>
                <circle cx="115" cy="80" r="10" fill="white"/>
                <path d="M85 120C90 130 110 130 115 120" stroke="white" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Logo 5 - Apple Health */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="40" fill="#FF2D55"/>
                <path d="M100 50C115 70 140 70 150 90C160 110 140 150 100 150C60 150 40 110 50 90C60 70 85 70 100 50Z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Logo 6 - Polar */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="60" fill="#D10026"/>
                <path d="M70 80H130V120H70V80Z" fill="white"/>
                <path d="M85 95H115V105H85V95Z" fill="#D10026"/>
              </svg>
            </div>
          </div>

          {/* Logo 7 - Garmin */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 80H160V120H40V80Z" fill="#000066"/>
                <path d="M60 90H140V110H60V90Z" fill="white"/>
                <path d="M70 95L85 105L100 95L115 105L130 95" stroke="#000066" strokeWidth="3"/>
              </svg>
            </div>
          </div>

          {/* Logo 8 - Whoop/Oura */}
          <div className="bg-white dark:bg-white/5 rounded-xl shadow-lg p-4 aspect-square flex items-center justify-center hover:scale-105 transition-all">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="60" fill="#000000"/>
                <circle cx="100" cy="100" r="45" stroke="#FFFFFF" strokeWidth="6"/>
                <circle cx="100" cy="100" r="30" stroke="#FFFFFF" strokeWidth="6"/>
                <circle cx="100" cy="100" r="15" fill="#FFFFFF"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default LogosSection;
