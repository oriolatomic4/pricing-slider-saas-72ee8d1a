
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  dropdown?: boolean;
  dropdownContent?: React.ReactNode;
}

export function NavLink({ href, children, dropdown, dropdownContent }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (dropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <button
          className="flex items-center gap-1 border-transparent hover:border-vitruve-purple border-b-2 text-gray-900 dark:text-white hover:text-vitruve-purple dark:hover:text-white transition-colors duration-200"
        >
          <span>{children}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {isOpen && (
          <div className="absolute left-0 top-full w-64 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg z-50 animate-slide-up-and-fade">
            {dropdownContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center border-transparent hover:border-vitruve-purple border-b-2 text-gray-900 dark:text-white hover:text-vitruve-purple dark:hover:text-white transition-colors duration-200"
    >
      <span>{children}</span>
    </a>
  );
}

// Dropdown menu components for consistent styling
export function DropdownItem({ 
  href, 
  title, 
  description, 
  icon 
}: { 
  href: string; 
  title: string; 
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            className={cn(
              "flex items-start px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            )}
          >
            {icon && (
              <div className="flex-shrink-0 mr-3 mt-1">
                {icon}
              </div>
            )}
            <div>
              <span className="font-medium text-gray-900 dark:text-white">{title}</span>
              {description && <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</span>}
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p className="text-sm">{description || title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
