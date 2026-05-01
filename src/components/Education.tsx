"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-br from-yellow-100 via-lime-50 to-green-100 dark:bg-none dark:bg-transparent">
      {/* --- EDUCATION SPECIFIC ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.02)_0%,transparent_70%)]" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Background</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 pb-2">Education Journey</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                />

                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="bg-card/40 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 shadow-xl group">
                    <span className="text-primary font-bold text-sm mb-2 block group-hover:translate-x-1 transition-transform">{edu.period}</span>
                    <h4 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-foreground/70 font-semibold mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
