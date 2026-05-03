"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Database, 
  Globe, 
  CheckCircle2, 
  Settings, 
  Workflow, 
  Terminal, 
  Zap, 
  Container,
  Layout,
  Server,
  ShieldCheck
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiShadcnui, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPrisma, 
  SiReactquery, 
  SiZod, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiNpm,
  SiFramer,
  SiGo,
  SiMysql,
  SiJsonwebtokens,
  SiVercel,
  SiRailway,
  SiPostgresql
} from "react-icons/si";
import { AnimatedSquaresBg } from "./AnimatedSquaresBg";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    color: "blue",
    skills: [
      { name: "React", level: 90, icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> },
      { name: "Shadcn UI", level: 80, icon: <SiShadcnui className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Framer Motion", level: 85, icon: <SiFramer className="w-5 h-5 text-black dark:text-white" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "purple",
    skills: [
      { name: "Node.js", level: 85, icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
      { name: "Express.js", level: 80, icon: <SiExpress className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Go", level: 70, icon: <SiGo className="w-5 h-5 text-[#00ADD8]" /> },
    ],
  },
  {
    title: "Database / ORM",
    icon: <Database className="w-6 h-6" />,
    color: "emerald",
    skills: [
      { name: "MongoDB", level: 85, icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
      { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
      { name: "Prisma", level: 75, icon: <SiPrisma className="w-5 h-5 text-[#2D3748] dark:text-white" /> },
      { name: "MySQL", level: 80, icon: <SiMysql className="w-5 h-5 text-[#4479A1]" /> },
    ],
  },
  {
    title: "State / Data",
    icon: <Globe className="w-6 h-6" />,
    color: "cyan",
    skills: [
      { name: "TanStack Query", level: 80, icon: <SiReactquery className="w-5 h-5 text-[#FF4154]" /> },
      { name: "REST API", level: 90, icon: <Globe className="w-5 h-5 text-blue-500" /> },
    ],
  },
  {
    title: "Validation & Auth",
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "orange",
    skills: [
      { name: "Zod", level: 75, icon: <SiZod className="w-5 h-5 text-[#3E67B1]" /> },
      { name: "JWT", level: 85, icon: <SiJsonwebtokens className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Better Auth", level: 80, icon: <ShieldCheck className="w-5 h-5 text-orange-500" /> },
    ],
  },
  {
    title: "Tools",
    icon: <Settings className="w-6 h-6" />,
    color: "slate",
    skills: [
      { name: "Git", level: 85, icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
      { name: "GitHub", level: 90, icon: <SiGithub className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Postman", level: 80, icon: <SiPostman className="w-5 h-5 text-[#FF6C37]" /> },
      { name: "npm", level: 90, icon: <SiNpm className="w-5 h-5 text-[#CB3837]" /> },
      { name: "Vercel", level: 85, icon: <SiVercel className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Railway", level: 80, icon: <SiRailway className="w-5 h-5 text-black dark:text-white" /> },
    ],
  },
];

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: React.ReactNode }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center drop-shadow-sm">{icon}</span>
          <span className="text-sm font-bold text-foreground/80">{name}</span>
        </div>
        <span className="text-xs font-extrabold text-primary">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-foreground/5 rounded-full overflow-hidden border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-transparent">
      <AnimatedSquaresBg />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-primary font-bold mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-2"
          >
            Skills & Proficiency
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-card/40 backdrop-blur-md border border-border rounded-[2.5rem] p-8 hover:border-primary/60 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.3)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Lighting Glow */}
              <div className={`absolute top-0 right-0 w-40 h-40 blur-[80px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-primary/30 opacity-20 group-hover:opacity-100 ${
                category.color === "blue" ? "bg-blue-500/10" :
                category.color === "purple" ? "bg-purple-500/10" :
                category.color === "emerald" ? "bg-emerald-500/10" :
                category.color === "cyan" ? "bg-cyan-500/10" :
                category.color === "orange" ? "bg-orange-500/10" : "bg-slate-500/10"
              }`} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
