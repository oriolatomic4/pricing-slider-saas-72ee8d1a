
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Purchase flow navigation paths in sequence
export const purchaseFlowPaths = [
  "/pricing",
  "/encoder-selection", 
  "/accessories"
];

// Get the next step in the purchase flow
export function getNextPurchaseStep(currentPath: string): string {
  const currentIndex = purchaseFlowPaths.indexOf(currentPath);
  
  // If current path is not in the flow or is the last step, return the current path
  if (currentIndex === -1 || currentIndex === purchaseFlowPaths.length - 1) {
    return currentPath;
  }
  
  // Return the next path in the flow
  return purchaseFlowPaths[currentIndex + 1];
}

// Get the previous step in the purchase flow
export function getPreviousPurchaseStep(currentPath: string): string {
  const currentIndex = purchaseFlowPaths.indexOf(currentPath);
  
  // If current path is not in the flow or is the first step, return the current path
  if (currentIndex <= 0) {
    return currentPath;
  }
  
  // Return the previous path in the flow
  return purchaseFlowPaths[currentIndex - 1];
}
