
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center border-transparent hover:border-vitruve-purple border-b-2 text-gray-900 dark:text-white transition-colors duration-200"
    >
      <span>{children}</span>
    </a>
  );
}
