export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter">
            HASIB<span className="text-primary">.</span>
          </div>
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
