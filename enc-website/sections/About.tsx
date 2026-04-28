"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScanLine,
  Database,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Threat Analysis",
    description:
      "Our AI engine continuously scans your data environment to identify vulnerabilities, classify sensitive assets, and map your encryption attack surface.",
    bullets: ["Automated asset discovery", "Risk scoring per data class", "Real-time CVE correlation"],
  },
  {
    number: "02",
    icon: Database,
    title: "Encryption Deployment",
    description:
      "Apply field-level, database-level, or full-disk encryption policies in minutes — not months. SDK-native with zero refactoring required.",
    bullets: ["One-line SDK integration", "Policy-as-code support", "Blue-green key rotation"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Continuous Monitoring",
    description:
      "Live cryptographic health dashboards, anomaly detection, and automated incident response keep your posture hardened around the clock.",
    bullets: ["Real-time audit logs", "SIEM integration", "Automated remediation"],
  },
];

const highlights = [
  { value: "300+", label: "Edge PoPs Worldwide" },
  { value: "<0.5ms", label: "Encryption Latency" },
  { value: "99.99%", label: "Platform Uptime SLA" },
  { value: "40+", label: "Compliance Frameworks" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Process Section */}
      <section id="about" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-700/6 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="section-label mb-5 inline-flex">
              <Layers className="w-3 h-3" /> Our Process
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Go Simple, Smart,{" "}
              <span className="gradient-text-purple">and Scalable Process.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              From vulnerability discovery to continuous monitoring — ENC secures
              your entire data lifecycle in three steps.
            </p>
          </motion.div>

          {/* Steps */}
          <div ref={stepsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: i * 0.14,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative glass-card rounded-2xl p-7 hover:border-purple-500/25 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 bg-purple-600/15 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span
                      className="text-5xl font-black text-white/[0.04] select-none"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Connector arrow (not last) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-[#080b12] border border-white/[0.08] rounded-full items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <p
                  className="text-4xl font-bold gradient-text-purple mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {h.value}
                </p>
                <p className="text-sm text-slate-500">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
