"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSquaresBg } from "./AnimatedSquaresBg";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <AnimatedSquaresBg />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Featured Work</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 pb-2">Creative Projects</h3>
          </div>
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="https://github.com/hasibulh798" target="_blank">
              View All on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-2 gap-8 items-center bg-card/40 backdrop-blur-md border border-border rounded-[2.5rem] p-6 md:p-10 hover:border-primary/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-all duration-500 shadow-2xl"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button asChild size="icon" variant="secondary" className="rounded-full bg-white text-black">
                    <Link href={project.liveUrl} target="_blank"><ExternalLink size={20} /></Link>
                  </Button>
                  <Button asChild size="icon" variant="outline" className="rounded-full border-white/20 bg-black/40 text-white backdrop-blur-md">
                    <Link href={project.githubUrl} target="_blank"><Code size={20} /></Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col h-full justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-foreground/5 border border-border rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <Button asChild className="rounded-full px-8 h-12 bg-primary text-primary-foreground font-bold hover:opacity-90 shadow-lg shadow-primary/20">
                    <Link href={project.liveUrl} target="_blank">Live Demo</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-8 h-12 border-border bg-foreground/5 hover:bg-foreground/10 font-bold transition-all hover:border-primary/50">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
