"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const GlobalBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-700">
      {/* Animated Gradient Base - More Vibrant & Colorful */}
      <div className="absolute inset-0 opacity-50">
        <div
          className={`absolute top-[-25%] left-[-15%] w-[80%] h-[80%] blur-[140px] rounded-full transition-colors duration-1000 animate-drift ${
            isDark ? "bg-blue-600/30" : "bg-blue-500/20"
          }`}
          style={{ animationDuration: '18s' }}
        />
        
        <div
          className={`absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] blur-[140px] rounded-full transition-colors duration-1000 animate-drift ${
            isDark ? "bg-purple-600/30" : "bg-purple-500/20"
          }`}
          style={{ animationDuration: '22s', animationDelay: '-5s' }}
        />

        <div
          className={`absolute top-[15%] right-[5%] w-[60%] h-[60%] blur-[120px] rounded-full transition-colors duration-1000 animate-drift ${
            isDark ? "bg-cyan-600/20" : "bg-cyan-500/15"
          }`}
          style={{ animationDuration: '20s', animationDelay: '-10s' }}
        />
        
        {/* Extra Glow Blob for Color Variety */}
        <div
          className={`absolute top-[40%] left-[30%] w-[40%] h-[40%] blur-[150px] rounded-full transition-colors duration-1000 animate-drift ${
            isDark ? "bg-emerald-600/10" : "bg-emerald-500/10"
          }`}
          style={{ animationDuration: '25s', animationDelay: '-15s' }}
        />
      </div>

      {/* Noise Texture (Inline SVG Filter) */}
      <svg className={`absolute inset-0 w-full h-full contrast-150 brightness-100 mix-blend-overlay transition-opacity duration-1000 ${isDark ? "opacity-[0.06]" : "opacity-[0.03]"}`}>
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Vignette */}
      <div className={`absolute inset-0 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_85%)] ${isDark ? "opacity-100" : "opacity-60"}`} />
    </div>
  );
};
