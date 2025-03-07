
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, MenuIcon, X } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";
import { NavLink, DropdownSection, DropdownItem } from "./NavLink";
import { CartButton } from "@/components/cart/CartButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileMenu } from "./MobileMenu";

interface MainNavBarProps {
  theme: "light" | "dark";
  showTopBar: boolean;
  isPurchasePage: boolean;
}

export function MainNavBar({ theme, showTopBar, isPurchasePage }: MainNavBarProps) {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Product dropdown content
  const productDropdownContent = (
    <>
      <DropdownSection title="Vitruve Builder">
        <DropdownItem 
          href="/vitruve-builder" 
          title="Vitruve Builder" 
          description="Build your strength profile" 
        />
      </DropdownSection>
      <div className="border-t border-gray-200 dark:border-gray-800"></div>
      <DropdownSection title="Vitruve Training">
        <DropdownItem 
          href="/vitruve-training" 
          title="Vitruve Training" 
          description="Personalized training programs" 
        />
      </DropdownSection>
      <div className="border-t border-gray-200 dark:border-gray-800"></div>
      <DropdownSection title="Vitruve Labs">
        <DropdownItem 
          href="/vitruve-labs" 
          title="Vitruve Labs" 
          description="Research and innovation" 
        />
      </DropdownSection>
    </>
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
                  <NavLink 
                    dropdown 
                    dropdownContent={productDropdownContent}
                  >
                    Product
                  </NavLink>
                  <NavLink href="/customers">
                    Customers
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
