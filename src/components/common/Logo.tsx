"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "icon" | "dark" | "horizontal-dark" | "full";
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
  width,
  height,
}) => {
  // Pure emblem icon
  if (variant === "icon") {
    return (
      <Link href="#top" className={`inline-flex items-center gap-2 shrink-0 group ${className}`} aria-label="NexoraTech Home">
        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/assets/logo/nexora-emblem.png"
            alt="NexoraTech Icon"
            width={60}
            height={52}
            className="w-full h-full object-contain filter drop-shadow-sm"
            priority
          />
        </div>
      </Link>
    );
  }

  // Dark variant for dark-grounded footer (horizontal)
  if (variant === "dark" || variant === "horizontal-dark") {
    return (
      <Link
        href="#top"
        className={`inline-flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg ${className}`}
        aria-label="NexoraTech - Building Smarter Tomorrow"
      >
        <div className="relative transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src="/assets/logo/nexora-logo-horizontal-dark.png"
            alt="NexoraTech - Building Smarter Tomorrow"
            width={width || 230}
            height={height || 52}
            className="h-10 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(41,211,232,0.25)] shrink-0"
            priority
          />
        </div>
      </Link>
    );
  }

  // Stacked tightly cropped version
  if (variant === "stacked") {
    return (
      <Link
        href="#top"
        className={`inline-flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg ${className}`}
        aria-label="NexoraTech - Building Smarter Tomorrow"
      >
        <div className="relative transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src="/assets/logo/nexora-logo-tight.png"
            alt="NexoraTech - Building Smarter Tomorrow"
            width={width || 220}
            height={height || 132}
            className="h-14 w-auto object-contain shrink-0"
            priority
          />
        </div>
      </Link>
    );
  }

  // Default: Sharp, Proportional Horizontal Lockup
  return (
    <Link
      href="#top"
      className={`inline-flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg ${className}`}
      aria-label="NexoraTech - Building Smarter Tomorrow"
    >
      <div className="relative transition-transform duration-300 group-hover:scale-[1.02] flex items-center">
        <Image
          src="/assets/logo/nexora-logo-horizontal.png"
          alt="NexoraTech - Building Smarter Tomorrow"
          width={width || 205}
          height={height || 42}
          className="h-9 sm:h-10 w-auto object-contain shrink-0"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;