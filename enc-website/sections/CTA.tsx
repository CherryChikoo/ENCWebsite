"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Lock, Cpu, Eye } from "lucide-react";

const floatingIcons = [
  { icon: Shield, top: "15%", left: "10%" },
  { icon: Lock, top: "70%", left: "6%" },
  { icon: Cpu, top: "20%", right: "8%" },
  { icon: Eye, top: "65%", right: "10%" },
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/30 to-[#080b12]" />
          <div className="absolute inset-0 bg-[#080b12]/40" />

          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border border-purple-500/30" />

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] bg-purple-600/15 blur-[100px] rounded-full" />
          </div>

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating icons */}
          {floatingIcons.map(({ icon: Icon, ...pos }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, type: "spring" }}
              style={{ position: "absolute", ...pos }}
              className="w-10 h-10 rounded-xl bg-purple-600/15 border border-purple-500/20 flex items-center justify-center hidden md:flex"
            >
              <Icon className="w-4 h-4 text-purple-400/60" />
            </motion.div>
          ))}

          {/* Content */}
          <div className="relative z-10 text-center px-8 py-20 md:py-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="section-label mb-6 inline-flex"
            >
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              Get Started Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">Let AI be the Force so</span>
              <br />
              <span className="gradient-text">you can Encrypt faster.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join 10,000+ security-first companies protecting their data with
              ENC's intelligent encryption platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary px-10 py-4 text-base"
              >
                Encrypt Your Platform <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary px-10 py-4 text-base"
              >
                Schedule a Demo
              </motion.a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10"
            >
              {[
                "No credit card required",
                "14-day free trial",
                "SOC 2 certified",
                "Cancel anytime",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-slate-600">
                  <span className="text-emerald-400">✓</span> {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
