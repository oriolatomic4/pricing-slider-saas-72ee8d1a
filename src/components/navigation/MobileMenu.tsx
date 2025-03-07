
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-gray-900 p-4 pt-2 pb-6 border-t border-gray-200 dark:border-gray-700">
      <div className="space-y-3">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
          <h3 className="px-3 py-1 font-medium text-sm text-gray-500 dark:text-gray-400">Product</h3>
          <a
            href="/vitruve-builder"
            className="flex flex-col px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="font-medium">Vitruve Builder</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Build your strength profile</span>
          </a>
          <a
            href="/vitruve-training"
            className="flex flex-col px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="font-medium">Vitruve Training</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Personalized training programs</span>
          </a>
          <a
            href="/vitruve-labs"
            className="flex flex-col px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="font-medium">Vitruve Labs</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Research and innovation</span>
          </a>
        </div>
        
        <a
          href="/academy"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Academy
        </a>
        <a
          href="/support"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Support
        </a>
        <a
          href="/login"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Login
        </a>
        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
        <a
          href="/customers"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Customers
        </a>
        <a
          href="/resources"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Resources
        </a>
        <a
          href="/blog"
          className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Blog
        </a>
        <div className="mt-4 space-y-2">
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
