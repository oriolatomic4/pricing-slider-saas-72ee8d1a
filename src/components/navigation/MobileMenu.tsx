
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="space-y-4">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
          <Link
            to="/vitruve-builder"
            className="flex items-start px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img 
              src="/lovable-uploads/f05857c3-fe50-4cb4-ba16-dbc769e65b0a.png" 
              alt="Builder" 
              className="w-6 h-6 mr-3 mt-1 flex-shrink-0" 
            />
            <div>
              <span className="font-medium">Vitruve Builder</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Build your strength profile</span>
            </div>
          </Link>
          <Link
            to="/vitruve-training"
            className="flex items-start px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img 
              src="/lovable-uploads/cb4f7b64-baba-4b66-90f0-01a8c6a869c5.png" 
              alt="Training" 
              className="w-6 h-6 mr-3 mt-1 flex-shrink-0" 
            />
            <div>
              <span className="font-medium">Vitruve Training</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Personalized training programs</span>
            </div>
          </Link>
          <Link
            to="/vitruve-labs"
            className="flex items-start px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img 
              src="/lovable-uploads/4b5878f7-4f70-4603-b6ca-c40129e46c8b.png" 
              alt="Labs" 
              className="w-6 h-6 mr-3 mt-1 flex-shrink-0" 
            />
            <div>
              <span className="font-medium">Vitruve Labs</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Research and innovation</span>
            </div>
          </Link>
        </div>
        
        <Link
          to="/academy"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Academy
        </Link>
        <Link
          to="/support"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Support
        </Link>
        <Link
          to="/login"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Login
        </Link>
        <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
        <Link
          to="/customers"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Customers
        </Link>
        <Link
          to="/resources"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Resources
        </Link>
        <Link
          to="/blog"
          className="flex items-center px-4 py-3 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Blog
        </Link>
        <div className="mt-5 space-y-3">
          <Button 
            className="w-full justify-start" 
            variant="outline"
          >
            <Phone className="w-5 h-5 mr-3" />
            Talk to sales
          </Button>
          <Button 
            className="w-full justify-start bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90"
            onClick={() => window.location.href = '/pricing'}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  );
}
