"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Junior Java Developer",
    company: "MV",
    location: "Recife, Brazil",
    type: "On-site",
    period: "May 2025 \u2013 Present",
    tasks: [
      "Development of new features using Java and Spring Boot",
      "Containerization and deployment with Docker",
      "Design and maintenance of REST APIs",
      "SQL development and optimization using Oracle Database",
      "Creation and maintenance of procedures, views, and triggers (PL/SQL)",
      "Log analysis and debugging",
      "Version control with Git and GitLab",
    ],
    tags: ["Java", "Spring Boot", "Docker", "Oracle", "PL/SQL", "REST APIs"],
  },
  {
    title: "AI Research Engineer",
    company: "NEES",
    location: "Remote",
    type: "Temporary",
    period: "Mar 2025 \u2013 Sep 2025",
    tasks: [
      "Research and implementation of allocation algorithms",
      "Automation workflows using LLMs and AI APIs",
      "Version control with Git and GitLab",
    ],
    tags: ["Python", "LLMs", "AI APIs", "Algorithms"],
  },
  {
    title: "Computer Vision Researcher",
    company: "AiBox Lab",
    location: "Remote",
    type: "Temporary",
    period: "Jan 2024 \u2013 Dec 2024",
    tasks: [
      "Evaluation of deep learning models for shrimp segmentation",
      "Authored a scientific paper on computer vision and segmentation",
      "Version control with Git and GitHub",
    ],
    tags: ["Python", "Deep Learning", "Computer Vision", "Research"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-glow-center pointer-events-none" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-[#F5A623] mb-3 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-fire text-balance">
            {"Where I've Worked"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A timeline of my professional journey across backend engineering and
            AI research.
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#FBBC04] via-[#FF6B35] to-[#C2185B] opacity-40" />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Glowing timeline dot */}
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-[#F5A623] to-[#E63F4C] shadow-[0_0_12px_rgba(245,166,35,0.5)]" />
                <div className="absolute left-2.5 top-2.5 h-3 w-3 rounded-full bg-background" />
                <div className="absolute left-[11px] top-[11px] h-2 w-2 rounded-full bg-[#F5A623]" />

                <div className="glass rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(245,166,35,0.12)] transition-all duration-500 group hover:scale-[1.01]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#F5A623] font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass">
                      <Briefcase className="h-3 w-3" />
                      {exp.type}
                    </span>
                  </div>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {exp.tasks.map((task) => (
                      <li
                        key={task}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F5A623] to-[#E63F4C] shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#F5A623]/10 to-[#C2185B]/10 border border-[#F5A623]/10 px-3 py-1 text-xs font-medium text-[#F5A623] hover:border-[#F5A623]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
