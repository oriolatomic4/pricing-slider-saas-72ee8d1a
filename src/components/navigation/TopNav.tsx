
import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLocation } from "react-router-dom";
import { purchaseFlowPaths } from "@/lib/utils";
import { SecondaryNavBar } from "./SecondaryNavBar";
import { MainNavBar } from "./MainNavBar";

export function TopNav() {
  const { theme } = useTheme();
  const location = useLocation();
  const [showTopBar, setShowTopBar] = React.useState(true);
  
  // Check if current path is in the purchase flow
  const isPurchasePage = purchaseFlowPaths.includes(location.pathname);

  // Handle scroll to hide top bar and move main nav up
  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setShowTopBar(true);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <SecondaryNavBar theme={theme} showTopBar={showTopBar} />
      <MainNavBar theme={theme} showTopBar={showTopBar} isPurchasePage={isPurchasePage} />
    </>
  );
}
