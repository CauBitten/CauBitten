"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Calendar, MapPin, Code, GraduationCap } from "lucide-react";

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [count, value]);

  return (
    <span className="flex items-baseline justify-center">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

const stats = [
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Research Papers", value: 1, suffix: "" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "Projects", value: 10, suffix: "+" },
];

const details = [
  { icon: MapPin, label: "Based in Recife, Brazil" },
  { icon: GraduationCap, label: "Computer Science @ UFRPE" },
  { icon: Code, label: "Junior Java Developer @ MV" },
  { icon: Calendar, label: "Available for opportunities" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative">
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
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-fire text-balance">
            Who I Am
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl p-6 text-center hover:shadow-[0_0_20px_rgba(245,166,35,0.15)] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient-fire mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                A bit about me
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "I'm a French-Brazilian Computer Science student at UFRPE with a strong focus on backend engineering, data science, and artificial intelligence. Currently working as a Junior Java Developer at MV, where I build and maintain enterprise healthcare systems using Java, Spring Boot, and Oracle Database."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mt-4">
                My research experience spans AI algorithms and computer vision,
                including a published paper on deep learning for shrimp
                segmentation. I&apos;m driven by building scalable systems and
                exploring how AI can solve real-world problems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {details.map((detail, i) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-xl glass hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#F5A623]/20 to-[#C2185B]/20">
                      <Icon className="h-4 w-4 text-[#F5A623]" />
                    </div>
                    <span className="text-sm text-foreground/80">
                      {detail.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
