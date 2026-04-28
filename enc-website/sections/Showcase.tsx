"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Terminal, Network, Lock } from "lucide-react";

const cards = [
  {
    icon: Terminal,
    title: "Encryption CLI",
    desc: "Manage keys, rotate certs, and audit logs from your terminal with ENC's powerful developer CLI.",
    code: "$ enc encrypt --input data.json\n  ✓ AES-256-GCM applied\n  ✓ Key ID: kms-prod-0x4f2\n  ✓ Stored in vault",
  },
  {
    icon: Network,
    title: "API Gateway Shield",
    desc: "Automatic TLS 1.3 termination, request signing, and payload encryption for every API endpoint.",
    code: "POST /api/vault/encrypt HTTP/2\nAuthorization: Bearer enc_****\n\n{ ciphertext: 'eyJhbGci...', \n  kid: 'kms-prod-0x4f2' }",
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main display box */}
            <div className="relative glass-card glow-border rounded-2xl overflow-hidden purple-glow">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                <span className="ml-3 text-xs text-slate-600 font-mono">enc-vault — secure terminal</span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 min-h-[320px] bg-[#080b12]">
                {/* Glowing shield in center */}
                <div className="flex items-center justify-center py-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full scale-150" />
                    <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-900/80 to-indigo-900/60 border border-purple-500/30 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-purple-400" />
                    </div>
                    {/* Animated rings */}
                    {[1, 2, 3].map((ring) => (
                      <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border border-purple-500/20"
                        animate={{ scale: [1, 1 + ring * 0.3], opacity: [0.6, 0] }}
                        transition={{
                          duration: 2,
                          delay: ring * 0.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        style={{ borderRadius: "1.5rem" }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white font-semibold mb-1">Vault Status: Encrypted</p>
                  <p className="text-xs text-slate-600">Last rotation: 14 minutes ago</p>
                </div>

                {/* Progress rows */}
                <div className="space-y-2 pt-2">
                  {[
                    { label: "Encryption Engine", pct: 100, status: "Active" },
                    { label: "Key Rotation", pct: 88, status: "Scheduled" },
                    { label: "Threat Detection", pct: 94, status: "Scanning" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/[0.03] rounded-lg px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-xs text-slate-400">{item.label}</span>
                      </div>
                      <span className="text-xs text-purple-400 font-medium">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.7 }}
                  className={`absolute glass-card glow-border rounded-xl p-4 max-w-[200px] ${
                    i === 0 ? "-bottom-8 -left-6" : "-bottom-4 -right-6"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-semibold text-white">{card.title}</span>
                  </div>
                  <pre className="text-[9px] text-slate-600 font-mono leading-relaxed overflow-hidden">
                    {card.code}
                  </pre>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-8"
          >
            <span className="section-label mb-5 inline-flex">
              <Lock className="w-3 h-3" /> Smart Encryption
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How Smart AI Encryption{" "}
              <span className="gradient-text-purple">
                Transforms Businesses.
              </span>
            </h2>

            <p className="text-slate-500 leading-relaxed mb-8">
              ENC's AI-driven threat intelligence continuously adapts your
              encryption posture to emerging attack vectors — so your security
              evolves faster than threats do.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Real-time Threat Adaptation",
                  desc: "Machine learning models retrain daily on new CVEs and attack patterns to automatically harden your encryption policies.",
                },
                {
                  title: "Intelligent Key Lifecycle",
                  desc: "AI predicts optimal rotation schedules based on usage patterns, risk scores, and regulatory requirements.",
                },
                {
                  title: "Anomaly-Driven Alerts",
                  desc: "Statistical baselines detect abnormal decryption patterns — potential exfiltration triggers immediate automated responses.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 group cursor-default"
                >
                  <div className="w-1 flex-shrink-0 bg-purple-600/40 rounded-full group-hover:bg-purple-500/70 transition-colors duration-200" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex"
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
