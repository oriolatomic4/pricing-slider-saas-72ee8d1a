
import React from "react";
import { ToggleTheme } from "./ToggleTheme";
import { Link } from "react-router-dom";

export function MinimalTopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png" 
                alt="Vitruve Logo" 
                className="h-12"
              />
            </Link>
          </div>
          
          <div className="flex items-center">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}
