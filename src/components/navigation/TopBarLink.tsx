
import React from "react";

interface TopBarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function TopBarLink({ href, children }: TopBarLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center text-sm border-transparent hover:border-vitruve-purple border-b-2 text-gray-700 dark:text-gray-300 hover:text-vitruve-purple dark:hover:text-vitruve-cyan transition-colors duration-200"
    >
      <span>{children}</span>
    </a>
  );
}
