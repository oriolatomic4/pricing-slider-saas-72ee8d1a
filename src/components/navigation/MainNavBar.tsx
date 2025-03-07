
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, MenuIcon, X, GraduationCap, Building, Trophy, Users, HeartPulse } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";
import { NavLink, DropdownItem } from "./NavLink";
import { CartButton } from "@/components/cart/CartButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

interface MainNavBarProps {
  theme: "light" | "dark";
  showTopBar: boolean;
  isPurchasePage: boolean;
}

export function MainNavBar({ theme, showTopBar, isPurchasePage }: MainNavBarProps) {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Product dropdown content with PNG icons
  const productDropdownContent = (
    <div className="py-2">
      <DropdownItem 
        href="/vitruve-builder" 
        title="Vitruve Builder" 
        description="Build your strength profile" 
        icon={<img src="/lovable-uploads/f05857c3-fe50-4cb4-ba16-dbc769e65b0a.png" alt="Builder" className="w-6 h-6" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/vitruve-training" 
        title="Vitruve Training" 
        description="Personalized training programs" 
        icon={<img src="/lovable-uploads/cb4f7b64-baba-4b66-90f0-01a8c6a869c5.png" alt="Training" className="w-6 h-6" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/vitruve-labs" 
        title="Vitruve Labs" 
        description="Research and innovation" 
        icon={<img src="/lovable-uploads/4b5878f7-4f70-4603-b6ca-c40129e46c8b.png" alt="Labs" className="w-6 h-6" />}
      />
    </div>
  );

  // Solutions dropdown content with Lucide icons
  const solutionsDropdownContent = (
    <div className="py-2">
      <DropdownItem 
        href="/solutions/high-schools" 
        title="High Schools" 
        description="Solutions for high school athletics" 
        icon={<GraduationCap className="w-6 h-6 text-vitruve-purple" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/solutions/colleges" 
        title="Colleges" 
        description="Solutions for college athletics" 
        icon={<Users className="w-6 h-6 text-vitruve-blue" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/solutions/private-facilities" 
        title="Private Facilities" 
        description="Solutions for private training centers" 
        icon={<Building className="w-6 h-6 text-vitruve-cyan" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/solutions/professional-teams" 
        title="Professional Teams" 
        description="Solutions for professional sports teams" 
        icon={<Trophy className="w-6 h-6 text-vitruve-yellow" />}
      />
      <div className="border-t border-gray-200 dark:border-gray-800 my-2"></div>
      <DropdownItem 
        href="/solutions/health-facilities" 
        title="Health Facilities" 
        description="Solutions for clinical settings" 
        icon={<HeartPulse className="w-6 h-6 text-red-500" />}
      />
    </div>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 border-b transition-all duration-200",
          theme === "dark"
            ? "border-white/10 bg-black/80 backdrop-blur-sm"
            : "border-gray-200 bg-white/80 backdrop-blur-sm",
          showTopBar ? "top-9" : "top-0"  // This moves the main nav up when the top bar is hidden
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0"
              >
                <img 
                  src="/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png" 
                  alt="Vitruve Logo" 
                  className="h-12"
                />
              </Link>
            </div>

            {!isMobile && (
              <div className="hidden md:flex items-center justify-between flex-1 ml-10">
                <div className="flex items-center space-x-8">
                  <NavLink 
                    dropdown 
                    dropdownContent={productDropdownContent}
                  >
                    Product
                  </NavLink>
                  <NavLink 
                    dropdown
                    dropdownContent={solutionsDropdownContent}
                  >
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
                  {isPurchasePage && <CartButton />}
                  <ToggleTheme />
                </div>
              </div>
            )}

            {isMobile && (
              <div className="flex items-center">
                {isPurchasePage && <CartButton />}
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
        <MobileMenu isOpen={isMobile && mobileMenuOpen} />
      </nav>
    </>
  );
}
