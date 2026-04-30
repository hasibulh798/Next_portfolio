"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Briefcase, Heart, Coffee, Globe, Trophy, Timer } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "20+", icon: <Trophy className="w-4 h-4" /> },
  { label: "Technologies Known", value: "15+", icon: <Globe className="w-4 h-4" /> },
  { label: "Years of Coding", value: "3+", icon: <Timer className="w-4 h-4" /> },
  { label: "Cups of Coffee", value: "∞", icon: <Coffee className="w-4 h-4" /> },
];

const journeyCards = [
  {
    title: "My Journey",
    icon: <Code2 className="w-5 h-5" />,
    text: "Since then, I've worked with modern JavaScript frameworks, built RESTful APIs, and designed databases that power real-world applications. I enjoy the full spectrum of web development — from pixel-perfect UIs to optimized backend logic.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    shadow: "shadow-emerald-500/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "How I Work",
    icon: <Briefcase className="w-5 h-5" />,
    text: "I thrive on clean code, thoughtful architecture, and collaborative problem-solving. Whether it's building a complex dashboard or an elegant landing page, I bring the same level of care and attention to every project.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    shadow: "shadow-blue-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Beyond Code",
    icon: <Heart className="w-5 h-5" />,
    text: "Outside of coding, you'll find me playing football on weekends, exploring street food around Dhaka, or deep-diving into tech YouTube at 2am. I also enjoy reading about software architecture and the occasional sci-fi novel.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    shadow: "shadow-orange-500/20",
    border: "group-hover:border-orange-500/50",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-bold text-primary mb-2"
          >
            Get to know me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Me</span>
          </motion.h2>
          <div className="w-full h-px bg-border mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-card/40 backdrop-blur-md border border-border rounded-[2rem] p-8 relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(52,211,153,0.15)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Introduction</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I&apos;m a passionate Full Stack Developer from Dhaka, Bangladesh, with a deep love for turning ideas into seamless digital experiences. My journey into programming started when I was curious about how websites worked — I opened DevTools for the first time and never looked back.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-6 text-center group hover:bg-card hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {journeyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className={`bg-card/40 backdrop-blur-md border border-border rounded-[2rem] p-8 flex gap-6 group hover:bg-card ${card.border} hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] ${card.shadow} transition-all duration-500`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shadow-inner`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
