"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Lock, Cpu } from "lucide-react";

const trustedLogos = [
  "Cloudflare",
  "HashiCorp",
  "Datadog",
  "Vercel",
  "Stripe",
  "GitHub",
];

const floatingBadges = [
  {
    icon: Shield,
    label: "AES-256 Encrypted",
    sub: "Military-grade",
    top: "18%",
    left: "5%",
  },
  {
    icon: Lock,
    label: "Zero-Knowledge",
    sub: "No data exposure",
    top: "60%",
    right: "4%",
  },
  {
    icon: Cpu,
    label: "Quantum-Resistant",
    sub: "Post-quantum ready",
    top: "28%",
    right: "5%",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/8 blur-[100px] rounded-full" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating badges */}
      {floatingBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.2, duration: 0.6, ease: "backOut" }}
            style={{
              position: "absolute",
              top: badge.top,
              left: badge.left,
              right: badge.right,
            }}
            className="hidden lg:flex items-center gap-2.5 glass-card glow-border rounded-xl px-3.5 py-2.5"
          >
            <div className="w-7 h-7 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-none mb-0.5">
                {badge.label}
              </p>
              <p className="text-[10px] text-slate-500">{badge.sub}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="section-label">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            Next-Generation Cybersecurity Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-white">Intelligent Encryption</span>
          <br />
          <span className="text-white">for Modern</span>{" "}
          <span className="gradient-text">Businesses.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ENC delivers enterprise-grade encryption infrastructure that protects
          your data, secures your systems, and ensures compliance — without
          slowing you down.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-8 py-3.5 text-base"
          >
            Encrypt Your Platform <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary px-8 py-3.5 text-base"
          >
            <Play className="w-4 h-4 fill-current" /> Watch Demo
          </motion.a>
        </motion.div>

        {/* Trusted by */}
        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-5">
            Trusted by security teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedLogos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.08 }}
                className="text-slate-600 font-semibold text-sm tracking-wide hover:text-slate-400 transition-colors cursor-default"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Hero dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto"
      >
        <div className="glass-card glow-border rounded-2xl overflow-hidden purple-glow">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <div className="flex-1 mx-4">
              <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-slate-600 flex items-center gap-2 max-w-sm">
                <Lock className="w-3 h-3 text-emerald-400" />
                app.enc.io/dashboard
              </div>
            </div>
          </div>
          {/* Dashboard content */}
          <div className="p-6 bg-[#0a0d14] min-h-[280px] grid grid-cols-3 gap-4">
            {/* Stat cards */}
            {[
              { label: "Keys Active", value: "12,847", change: "+4.2%", color: "text-emerald-400" },
              { label: "Events Encrypted", value: "99.98%", change: "Uptime", color: "text-purple-400" },
              { label: "Threats Blocked", value: "3,291", change: "Today", color: "text-blue-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4"
              >
                <p className="text-[11px] text-slate-600 mb-2">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-[11px] text-slate-600">{stat.change}</p>
              </div>
            ))}
            {/* Code block */}
            <div className="col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 font-mono text-xs">
              <div className="text-slate-600 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                encryption_log.enc
              </div>
              {[
                { text: "const key = await ENC.generateKey('AES-256-GCM');", color: "text-purple-400" },
                { text: 'const cipher = await ENC.encrypt(payload, key);', color: "text-blue-400" },
                { text: '// ✓ Encrypted in 0.4ms — zero exposure', color: "text-slate-600" },
                { text: 'await ENC.store(cipher, { vault: "prod" });', color: "text-emerald-400" },
              ].map((line, i) => (
                <div key={i} className={`leading-relaxed ${line.color}`}>
                  {line.text}
                </div>
              ))}
            </div>
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex flex-col justify-between">
              <p className="text-[11px] text-slate-600">Encryption Health</p>
              <div className="space-y-2">
                {[90, 78, 95].map((pct, i) => (
                  <div key={i}>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b12] to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
