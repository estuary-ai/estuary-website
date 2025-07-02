import { useEffect, useRef } from "react";

export function EstuaryLogo({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main character body */}
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="hsl(180, 39%, 29%)"
          strokeWidth="6"
          fill="hsl(51, 40%, 95%)"
        />
        
        {/* Eyes */}
        <circle cx="42" cy="45" r="3" fill="hsl(180, 39%, 29%)" />
        <circle cx="58" cy="45" r="3" fill="hsl(180, 39%, 29%)" />
        
        {/* Smile */}
        <path
          d="M 40 55 Q 50 65 60 55"
          stroke="hsl(180, 39%, 29%)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Left appendages (like axolotl gills) */}
        <ellipse
          cx="20"
          cy="35"
          rx="8"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(45 20 35)"
        />
        <ellipse
          cx="15"
          cy="45"
          rx="6"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(15 15 45)"
        />
        <ellipse
          cx="20"
          cy="55"
          rx="8"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(-30 20 55)"
        />
        
        {/* Right appendages */}
        <ellipse
          cx="80"
          cy="35"
          rx="8"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(-45 80 35)"
        />
        <ellipse
          cx="85"
          cy="45"
          rx="6"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(-15 85 45)"
        />
        <ellipse
          cx="80"
          cy="55"
          rx="8"
          ry="2"
          fill="hsl(180, 39%, 29%)"
          transform="rotate(30 80 55)"
        />
      </svg>
    </div>
  );
}

export function EstuaryLogoSimple({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`bg-estuary-teal rounded-full flex items-center justify-center ${className}`}>
      <div className="text-estuary-cream text-sm font-bold">E</div>
    </div>
  );
}
