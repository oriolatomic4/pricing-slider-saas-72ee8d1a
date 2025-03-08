
import React from "react";

interface TopBarLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function TopBarLink({ href, children, external = false }: TopBarLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center text-sm border-transparent hover:border-vitruve-purple border-b-2 text-gray-700 dark:text-gray-300 hover:text-vitruve-purple dark:hover:text-white transition-colors duration-200"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
    </a>
  );
}
