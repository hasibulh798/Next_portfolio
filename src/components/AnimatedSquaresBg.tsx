"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AnimatedSquaresBg = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Removed dark mode block so gradient is visible (with lower opacity) in dark mode as well

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background spanning the whole section */}
      <div className="absolute inset-0 animate-gradient-bg opacity-[0.15] dark:opacity-[0.05] mix-blend-normal"></div>
      
      {/* Optional subtle noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};
