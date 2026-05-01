"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface CodeSnippetProps {
  delay?: number;
  x?: string;
  y?: string;
  code?: string;
}

const CodeSnippet = ({ delay = 0, x = "0%", y = "0%", code = "" }: CodeSnippetProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className="absolute hidden md:block select-none pointer-events-none animate-drift"
      style={{ left: x, top: y }}
    >
      <div className={`backdrop-blur-xl border rounded-xl p-4 shadow-2xl transition-colors duration-500 ${
        isDark ? "bg-white/5 border-white/10 shadow-blue-500/10" : "bg-black/5 border-black/10 shadow-blue-500/5"
      }`}>
        <code className={`text-xs font-mono whitespace-pre transition-colors duration-500 ${
          isDark ? "text-primary/70" : "text-primary font-bold"
        }`}>
          {code}
        </code>
      </div>
    </motion.div>
  );
};

interface SyntaxSymbolProps {
  symbol: string;
  x: string;
  y: string;
  delay: number;
  rotate?: number;
}

const SyntaxSymbol = ({ symbol, x, y, delay, rotate = 0 }: SyntaxSymbolProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 1, delay }}
    className="absolute text-2xl font-mono text-foreground font-bold pointer-events-none select-none animate-drift"
    style={{ left: x, top: y }}
  >
    {symbol}
  </motion.div>
);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const heroRotate = useTransform(scrollY, [0, 500], [0, 45]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:bg-none dark:bg-transparent"
    >
      {/* --- ANIMATED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Parallax Mesh Blobs - More colorful & theme-aware */}
        {mounted && (
          <>
            <motion.div 
              style={{ y: y1, rotate: heroRotate }}
              className={`absolute -top-[10%] -left-[10%] w-[60%] h-[60%] blur-[120px] rounded-full transition-colors duration-1000 animate-drift ${
                isDark ? "bg-blue-500/30" : "bg-blue-400/20"
              }`} 
            />
            <motion.div 
              style={{ y: y2, rotate: -heroRotate, animationDelay: '-5s' }}
              className={`absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] blur-[120px] rounded-full transition-colors duration-1000 animate-drift ${
                isDark ? "bg-purple-500/30" : "bg-purple-400/20"
              }`} 
            />
            <motion.div 
              className={`absolute top-[20%] right-[10%] w-[40%] h-[40%] blur-[100px] rounded-full transition-colors duration-1000 animate-drift ${
                isDark ? "bg-cyan-500/20" : "bg-cyan-400/15"
              }`} 
              style={{ animationDelay: '-10s' }}
            />

            <SyntaxSymbol symbol="< />" x="15%" y="25%" delay={0} rotate={-10} />
            <SyntaxSymbol symbol="{ }" x="80%" y="20%" delay={1} rotate={15} />
            <SyntaxSymbol symbol="=>" x="10%" y="70%" delay={2} rotate={-5} />
            <SyntaxSymbol symbol="( )" x="85%" y="60%" delay={3} rotate={10} />
            <SyntaxSymbol symbol=";" x="45%" y="15%" delay={4} rotate={0} />

            <CodeSnippet 
              x="12%" y="40%" delay={0}
              code={`const dev = {\n  name: "Hasibul",\n  role: "Fullstack"\n};`} 
            />
            <CodeSnippet 
              x="75%" y="35%" delay={2}
              code={`while(alive) {\n  eat();\n  sleep();\n  code();\n}`} 
            />
            <CodeSnippet 
              x="40%" y="75%" delay={4}
              code={`<NextLevel />`} 
            />
          </>
        )}
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-foreground/60 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              Hasibul Hasan
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gradient block"
            >
              Fullstack Developer
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto"
          >
            MERN + Modern Next.js Stack Specialist crafting high-performance, 
            scalable web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 h-12 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 text-white font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] border-0">
              <Link href={'https://drive.google.com/file/d/18xoX_1_2lhDBZxvzxUFLIRZk-zVy9Fu_/view'} target="_blank" rel="noopener noreferrer">
                 Download Resume <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="default" size="lg" className="rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90 transition-opacity">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-foreground/10 bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm">
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold mb-1">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};
