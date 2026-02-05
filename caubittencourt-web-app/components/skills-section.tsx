"use client";

import { motion } from "framer-motion";
import { Code2, Database, Box, Globe, Braces } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C / C++"],
    color: "#FBBC04",
  },
  {
    title: "Frameworks & Tools",
    icon: Braces,
    skills: ["Spring Boot", "FastAPI", "React"],
    color: "#F5A623",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Oracle", "PostgreSQL", "SQL & PL/SQL"],
    color: "#FF6B35",
  },
  {
    title: "DevOps & Other",
    icon: Box,
    skills: [
      "Docker",
      "Git (GitHub & GitLab)",
      "APIs & Microservices",
      "AI / LLM APIs",
    ],
    color: "#E63F4C",
  },
];

const languages = [
  { lang: "Portuguese", level: "Native", progress: 100 },
  { lang: "English", level: "B2\u2013C1", progress: 80 },
  { lang: "French", level: "A1 (Beginner)", progress: 20 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-glow-top pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-[#F5A623] mb-3 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-fire text-balance">
            Technologies &amp; Tools
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            The stack I work with to build scalable backend systems and
            AI-powered solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(245,166,35,0.12)] transition-all duration-500 group hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${category.color}15` }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2.5"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: category.color }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-[#F5A623]/10">
              <Globe className="h-5 w-5 text-[#F5A623]" />
            </div>
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>

          <div className="flex flex-col gap-5">
            {languages.map((lang) => (
              <div key={lang.lang} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground font-medium">
                    {lang.lang}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {lang.level}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#C2185B] via-[#FF6B35] to-[#FBBC04]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
