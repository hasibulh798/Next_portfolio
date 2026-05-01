export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gradient-to-br from-teal-100 to-cyan-100 dark:bg-none dark:bg-transparent">
      <div className="container mx-auto px-6">
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
