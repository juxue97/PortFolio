import Link from "next/link";
import React from "react";

interface HomePageRouterLinkProps {
  href: string;
  label: string; // Add label prop for the button text
  className: string;
}
export const HomePageRouterLink: React.FC<HomePageRouterLinkProps> = ({
  href,
  label,
  className,
}) => {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};
