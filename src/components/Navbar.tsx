"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-500",
        scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-2 md:gap-4 px-5 md:px-6 py-2 rounded-full transition-all duration-500 border border-border",
          scrolled ? "bg-background/80 backdrop-blur-xl shadow-2xl md:scale-95" : "bg-background/40 backdrop-blur-md",
          "w-full max-w-[95vw] lg:w-auto"
        )}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsOpen(false)}>
          HASIB<span className="text-primary">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 md:gap-2">
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

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <div className="w-px h-6 bg-border mx-1" />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-background/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl flex flex-col gap-2 lg:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "relative px-4 py-3 text-base font-bold transition-colors duration-300 rounded-2xl flex items-center justify-center",
                    isActive ? "text-white" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-2xl -z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
