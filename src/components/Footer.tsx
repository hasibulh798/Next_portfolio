import { AnimatedSquaresBg } from "./AnimatedSquaresBg";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <AnimatedSquaresBg />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            HASIB<span className="text-primary">.</span>
          </div>
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
