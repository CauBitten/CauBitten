"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/CauBitten",
    icon: Github,
    description: "Check out my projects",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/caubitten/",
    icon: Linkedin,
    description: "Let's connect",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#C2185B] rounded-full opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#F5A623] rounded-full opacity-[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-mono text-sm text-[#F5A623] mb-3 tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-fire-animate text-balance">
            {"Let\u2019s build something meaningful together."}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {"I\u2019m always open to discussing new opportunities, research collaborations, or engineering challenges. Feel free to reach out."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="mailto:caua.fb@gmail.com"
            className="group relative inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(245,166,35,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#C2185B] via-[#FF6B35] to-[#FBBC04] opacity-90" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#FBBC04] via-[#FF6B35] to-[#C2185B] opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
            <Mail className="relative h-4 w-4" />
            <span className="relative">caua.fb@gmail.com</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {socials.map(({ name, href, icon: Icon, description }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl px-6 py-4 flex items-center gap-4 hover:shadow-[0_0_20px_rgba(245,166,35,0.12)] transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#F5A623]/15 to-[#C2185B]/15 group-hover:from-[#F5A623]/25 group-hover:to-[#C2185B]/25 transition-colors">
                <Icon className="h-5 w-5 text-[#F5A623]" />
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold text-foreground flex items-center gap-1">
                  {name}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs text-muted-foreground">
                  {description}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
