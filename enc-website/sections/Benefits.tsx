"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  Wallet,
  ChevronRight,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Unbreakable Data Protection",
    description:
      "ENC uses FIPS 140-3 validated modules ensuring that your encryption meets the highest government and enterprise security standards.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Compromise",
    description:
      "From startup to Fortune 500, ENC's architecture grows with you — handling billions of encryption operations daily with linear scaling.",
  },
  {
    icon: Clock,
    title: "Deploy in Under an Hour",
    description:
      "Prebuilt SDK connectors for Node, Python, Go, Java, and Rust get you production-ready encryption in minutes, not quarters.",
  },
  {
    icon: Wallet,
    title: "Predictable Cost at Scale",
    description:
      "Usage-based pricing with no hidden fees. Only pay for encrypted records — not idle infrastructure or expensive consultants.",
  },
];

const comparisonRows = [
  { feature: "AES-256-GCM Encryption", enc: true, others: false },
  { feature: "Automated Key Rotation", enc: true, others: false },
  { feature: "Zero-Knowledge Architecture", enc: true, others: false },
  { feature: "Real-time Audit Logs", enc: true, others: true },
  { feature: "Quantum-Resistant Algorithms", enc: true, others: false },
  { feature: "Compliance Automation", enc: true, others: false },
  { feature: "Sub-millisecond Latency", enc: true, others: false },
];

export default function BenefitsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Benefits Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-card glow-border rounded-2xl p-8 purple-glow relative overflow-hidden">
                {/* Glow blob */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 blur-[60px] rounded-full pointer-events-none" />

                {/* Shield visual */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-purple-600/15 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <ShieldCheck className="w-10 h-10 text-purple-400" />
                      </div>
                    </div>
                    {/* Orbit rings */}
                    <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: "8s" }} />
                    <div className="absolute -inset-4 rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: "14s", animationDirection: "reverse" }} />
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-3">
                  {[
                    { label: "Encryption Coverage", value: "100%", pct: 100 },
                    { label: "Key Integrity Score", value: "A+", pct: 97 },
                    { label: "Compliance Posture", value: "Active", pct: 88 },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">{m.label}</span>
                        <span className="text-purple-400 font-semibold">{m.value}</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${m.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="mt-6 pt-5 border-t border-white/[0.05]">
                  <p className="text-xs text-slate-600 mb-3">Live Events</p>
                  {[
                    { event: "Key rotated", detail: "vault-prod-001", time: "2s ago" },
                    { event: "Threat blocked", detail: "SQL injection attempt", time: "14s ago" },
                    { event: "Record encrypted", detail: "user_pii_batch_442", time: "28s ago" },
                  ].map((ev, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="text-xs text-slate-400">{ev.event}</span>
                        <span className="text-xs text-slate-600 font-mono">{ev.detail}</span>
                      </div>
                      <span className="text-[10px] text-slate-700">{ev.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Benefits list */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-5 inline-flex">
                The Full Benefits of ENC
              </span>
              <h2
                className="text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                The Top Benefits of AI{" "}
                <span className="gradient-text-purple">
                  for Your Business Security.
                </span>
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Encryption shouldn't be an afterthought. With ENC, security is
                baked in at every layer — giving your team superpowers without
                the complexity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="group glass-card rounded-xl p-5 hover:border-purple-500/25 transition-all duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-9 h-9 bg-purple-600/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-600/25 transition-colors duration-300">
                        <Icon className="w-4.5 h-4.5 text-purple-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2">{b.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{b.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-8 inline-flex"
              >
                Start Encrypting <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={tableRef}
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="section-label mb-5 inline-flex">Competitive Edge</span>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The Best Encryption Platform{" "}
              <span className="gradient-text-purple">at the Right Price.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card glow-border rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-white/[0.03] px-6 py-4 border-b border-white/[0.06]">
              <span className="text-sm font-semibold text-slate-400">Feature</span>
              <span className="text-sm font-semibold text-purple-400 text-center">ENC</span>
              <span className="text-sm font-semibold text-slate-600 text-center">Others</span>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                animate={tableInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm text-slate-400">{row.feature}</span>
                <div className="flex justify-center">
                  {row.enc ? (
                    <span className="text-emerald-400 text-lg">✓</span>
                  ) : (
                    <span className="text-red-500/60 text-lg">✗</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.others ? (
                    <span className="text-emerald-400/50 text-lg">✓</span>
                  ) : (
                    <span className="text-red-500/40 text-lg">✗</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
