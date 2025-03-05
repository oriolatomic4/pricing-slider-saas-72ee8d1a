import { Button } from "@/components/ui/button";
import * as React from "react";
import { ToggleTheme } from "./ToggleTheme";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import {
  Phone,
  MenuIcon,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function TopNav() {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      className="flex items-center border-transparent hover:border-vitruve-purple border-b-2 text-gray-900 dark:text-white transition-colors duration-200"
    >
      <span>{children}</span>
    </a>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200",
        theme === "dark"
          ? "border-white/10 bg-black/80 backdrop-blur-sm"
          : "border-gray-200 bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="flex-shrink-0"
            >
              <img 
                src="/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png" 
                alt="Vitruve Logo" 
                className="h-12"
              />
            </a>
          </div>

          {!isMobile && (
            <div className="hidden md:flex items-center justify-between flex-1 ml-10">
              <div className="flex items-center space-x-8">
                <NavLink href="/customers">
                  Customers
                </NavLink>
                <NavLink href="/solutions">
                  Solutions
                </NavLink>
                <NavLink href="/resources">
                  Resources
                </NavLink>
                <NavLink href="/blog">
                  Blog
                </NavLink>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  className="border border-transparent hover:border-vitruve-purple hover:bg-transparent hover:text-gray-900 dark:hover:text-white text-gray-900 dark:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to sales
                </Button>
                <Button 
                  className="bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Get Started Free
                </Button>
                <ToggleTheme />
              </div>
            </div>
          )}

          {isMobile && (
            <div className="flex items-center">
              <ToggleTheme />
              <Button
                variant="ghost"
                className="ml-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 pt-2 pb-6 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-3">
            <a
              href="/customers"
              className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Customers
            </a>
            <a
              href="/solutions"
              className="flex items-center px-3 py-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Solutions
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
      )}
    </nav>
  );
}
