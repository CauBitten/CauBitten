"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative py-8 px-6"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />

      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"\u00A9 2026 Cau\u00E3 Bittencourt. All rights reserved."}
        </p>
        <a
          href="#"
          className="font-mono text-xs text-gradient-fire hover:opacity-80 transition-opacity"
        >
          {"<CB />"}
        </a>
      </div>
    </motion.footer>
  );
}
