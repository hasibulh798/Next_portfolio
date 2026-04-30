"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection observer logic for active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 rounded-full transition-all duration-500 border border-border",
          scrolled ? "bg-background/80 backdrop-blur-xl shadow-2xl scale-95" : "bg-background/40 backdrop-blur-md"
        )}
      >
        <Link href="/" className="text-lg font-bold tracking-tighter mr-4 hidden md:block">
          HASIB<span className="text-primary">.</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-xs md:text-sm font-bold transition-colors duration-300 rounded-full",
                  isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
          
          <div className="w-px h-6 bg-border mx-2" />
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
