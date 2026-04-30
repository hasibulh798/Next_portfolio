"use client";

import { useParams, useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code, CheckCircle2, Rocket, Code2, AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => router.push("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      <Navbar />
      
      {/* Hero Section for Project */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button 
              onClick={() => router.back()} 
              variant="ghost" 
              className="mb-8 text-white/60 hover:text-white rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-white/5 border-white/10 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                <Link href={project.liveUrl} target="_blank">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link href={project.githubUrl} target="_blank">
                  GitHub Repository <Code className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 mt-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-16">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Rocket size={20} />
                </div>
                <h2 className="text-2xl font-bold">Project Overview</h2>
              </div>
              <p className="text-white/60 text-lg leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-2xl font-bold">Key Features</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="mt-1 text-primary"><CheckCircle2 size={16} /></div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Challenges Faced */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-2xl font-bold">Technical Challenges Faced</h2>
              </div>
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-red-500/[0.02] border border-red-500/10">
                    <div className="mt-1 text-red-400/60"><AlertTriangle size={18} /></div>
                    <p className="text-white/60 text-sm leading-relaxed font-medium">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Tech Stack */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 sticky top-32"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Code2 size={20} />
                </div>
                <h2 className="text-xl font-bold">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/5 border-white/10 text-white/60">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                      <Lightbulb size={18} />
                    </div>
                    <h3 className="font-bold text-sm">Future Plans</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.futureImprovements.map((item, i) => (
                      <li key={i} className="text-xs text-white/40 flex gap-2">
                        <span className="text-green-500/60">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
