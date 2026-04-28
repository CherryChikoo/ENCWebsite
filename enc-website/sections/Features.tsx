"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lock,
  Key,
  ShieldCheck,
  Fingerprint,
  Globe,
  Zap,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";

const features = [
  {
    icon: Lock,
    title: "Adaptive Encryption Engine",
    description:
      "Dynamically selects the optimal cipher suite for each workload — AES-256-GCM, ChaCha20-Poly1305, or RSA-OAEP — ensuring maximum security at runtime.",
    tag: "Core",
    highlight: true,
  },
  {
    icon: Key,
    title: "Automated Key Rotation",
    description:
      "Cryptographic keys rotate on a configurable schedule with zero downtime. All rotation events are cryptographically audited and tamper-proof.",
    tag: "Keys",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Automation",
    description:
      "Maintain continuous HIPAA, SOC 2, GDPR, and PCI-DSS compliance with automated policy enforcement and real-time audit trails.",
    tag: "Compliance",
  },
  {
    icon: Fingerprint,
    title: "Asymmetric Data Controls",
    description:
      "Role-based decryption policies ensure only authorized identities access sensitive data — even inside your own infrastructure.",
    tag: "Access",
  },
  {
    icon: Globe,
    title: "Global Encryption Mesh",
    description:
      "Deploy encryption at the edge with zero-latency key resolution via 300+ globally distributed PoPs and encrypted transit channels.",
    tag: "Infrastructure",
  },
  {
    icon: Zap,
    title: "Sub-Millisecond Performance",
    description:
      "Hardware-accelerated encryption via AES-NI and AVX-512 delivers <0.5ms overhead — invisible to your application stack.",
    tag: "Performance",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={clsx(
        "group relative glass-card rounded-2xl p-6 cursor-default transition-all duration-300",
        feature.highlight
          ? "glow-border"
          : "hover:border-white/[0.1]"
      )}
    >
      {feature.highlight && (
        <div className="absolute inset-0 bg-purple-600/[0.04] rounded-2xl pointer-events-none" />
      )}
      {/* Icon */}
      <div className="relative mb-4">
        <div
          className={clsx(
            "w-10 h-10 rounded-xl flex items-center justify-center",
            feature.highlight
              ? "bg-purple-600/25"
              : "bg-white/[0.05] group-hover:bg-purple-600/15 transition-colors duration-300"
          )}
        >
          <Icon
            className={clsx(
              "w-5 h-5",
              feature.highlight ? "text-purple-400" : "text-slate-400 group-hover:text-purple-400 transition-colors duration-300"
            )}
          />
        </div>
      </div>
      {/* Tag */}
      <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-widest mb-2 block">
        {feature.tag}
      </span>
      {/* Title */}
      <h3 className="text-base font-semibold text-white mb-2 leading-snug">
        {feature.title}
      </h3>
      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed">
        {feature.description}
      </p>
      {/* Learn more */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mt-4 flex items-center gap-1.5 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="section-label mb-5 inline-flex">
            <Lock className="w-3 h-3" /> Security Protocols
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AI Solutions That Turn Your{" "}
            <span className="gradient-text-purple">Security into Advantage.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every component is purpose-built for cryptographic performance,
            compliance automation, and seamless developer integration.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
