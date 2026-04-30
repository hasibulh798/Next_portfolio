import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
