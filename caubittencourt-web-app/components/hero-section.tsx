"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C2185B] rounded-full opacity-[0.04] blur-[120px] animate-[orb-float_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F5A623] rounded-full opacity-[0.06] blur-[100px] animate-[orb-float_25s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35] rounded-full opacity-[0.03] blur-[150px]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#F5A623]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [
              p.opacity,
              p.opacity * 1.5,
              p.opacity * 0.5,
              p.opacity * 1.2,
              p.opacity,
            ],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-[#F5A623] mb-6 tracking-widest uppercase">
            {"Hello, I'm"}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-gradient-fire-animate text-balance"
        >
          {"Cauã Bittencourt"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground font-mono"
        >
          Software Engineer &middot; Backend &middot; AI &amp; Research
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto"
        >
          French-Brazilian Computer Science student and Junior Software Engineer
          passionate about building robust backend systems, applying AI to solve
          real-world problems, and exploring how technology can create meaningful
          impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,166,35,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#C2185B] via-[#FF6B35] to-[#FBBC04]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#FBBC04] via-[#FF6B35] to-[#C2185B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Get in touch</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-foreground/90 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105"
          >
            View experience
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {[
            { href: "https://github.com/CauBitten", label: "GitHub", icon: Github },
            { href: "https://www.linkedin.com/in/caubitten/", label: "LinkedIn", icon: Linkedin },
            { href: "mailto:caua.fb@gmail.com", label: "Email", icon: Mail },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              className="p-3 rounded-xl glass text-muted-foreground hover:text-[#F5A623] hover:shadow-[0_0_15px_rgba(245,166,35,0.15)] transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex text-muted-foreground hover:text-[#F5A623] transition-colors duration-300"
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
