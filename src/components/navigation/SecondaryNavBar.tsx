
import React from "react";
import { cn } from "@/lib/utils";
import { TopBarLink } from "./TopBarLink";
import { useIsMobile } from "@/hooks/use-mobile";

interface SecondaryNavBarProps {
  theme: "light" | "dark";
  showTopBar: boolean;
}

export function SecondaryNavBar({ theme, showTopBar }: SecondaryNavBarProps) {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-200",
        theme === "dark"
          ? "border-white/5 bg-black/90 backdrop-blur-sm"
          : "border-gray-100 bg-white/90 backdrop-blur-sm"
      )}
      style={{ transform: showTopBar ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-9">
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <TopBarLink href="https://academy.vitruve.fit" external>
                Academy
              </TopBarLink>
              <TopBarLink href="https://support.vitruve.fit" external>
                Support
              </TopBarLink>
              <TopBarLink href="https://app.vitruve.fit" external>
                Login
              </TopBarLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
