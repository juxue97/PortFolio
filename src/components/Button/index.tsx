"use client"; // Mark this as a Client Component

import { scrollToSection } from "@/utils/scrollUtils";
import React from "react";

interface ScrollerButtonProps {
  id: string;
  label: string; // Add label prop for the button text
  className: string;
}

interface DownloadButtonProps {
  href: string;
  label: string; // Add label prop for the button text
  className: string;
}

export const ScrollerButton: React.FC<ScrollerButtonProps> = ({
  id,
  label,
  className,
}) => {
  return (
    <button onClick={() => scrollToSection(id)} className={className}>
      {label}
    </button>
  );
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  label,
  className,
}) => {
  return (
    <a href={href} download className={className}>
      <button>{label}</button>
    </a>
  );
};
