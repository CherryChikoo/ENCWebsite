"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What encryption standards does ENC use?",
    a: "ENC uses FIPS 140-3 validated cryptographic modules including AES-256-GCM for symmetric encryption, RSA-4096 and ECC P-384 for asymmetric operations, and ChaCha20-Poly1305 for high-performance mobile contexts. All implementations are audited by NCC Group annually.",
  },
  {
    q: "How does zero-knowledge architecture work?",
    a: "With ENC's zero-knowledge design, your plaintext data never traverses our infrastructure unencrypted. Encryption and decryption happen client-side using keys that you control. Even our own engineers cannot access your data — cryptographically impossible, not just policy.",
  },
  {
    q: "Can ENC integrate with my existing stack?",
    a: "Yes. ENC provides native SDKs for Node.js, Python, Go, Java, Rust, and .NET. We also offer REST and GraphQL APIs, Terraform providers, and pre-built connectors for AWS, Azure, GCP, Kubernetes secrets managers, and popular databases like Postgres, MongoDB, and MySQL.",
  },
  {
    q: "How does automated key rotation work?",
    a: "ENC generates new cryptographic keys on your configured schedule, re-encrypts any affected data using envelope encryption, and atomically retires old keys — all with zero application downtime. Every rotation is logged to an immutable audit trail.",
  },
  {
    q: "Which compliance frameworks does ENC support?",
    a: "ENC provides automated compliance evidence for SOC 2 Type II, HIPAA, GDPR, PCI-DSS, ISO 27001, NIST 800-53, FedRAMP Moderate, and more. Our dashboard generates audit-ready reports on demand.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "Your encryption services never stop. We'll notify you when you reach 80% of your limit. Overages are billed at a transparent per-record rate shown on your pricing page. You can upgrade or set hard caps anytime from your dashboard.",
  },
  {
    q: "Is there a self-hosted or on-premise option?",
    a: "Yes — our Enterprise plan includes a fully containerized on-premise deployment with dedicated HSM support, air-gapped environments, and optional disconnected operation for classified workloads. Contact our sales team for a tailored architecture review.",
  },
];

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 pr-4">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 0 }}
          className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-600/10 transition-all duration-200"
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-purple-400" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-5 inline-flex">FAQ</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              We've Got the Answers{" "}
              <span className="gradient-text-purple">You're Looking For.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Everything you need to know about deploying ENC in your
              infrastructure. Can't find your answer?{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                Talk to our security team.
              </a>
            </p>

            {/* Contact card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card glow-border rounded-2xl p-6"
            >
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-2">
                Security Consultation
              </p>
              <p className="text-white font-semibold mb-1">
                Need a custom architecture review?
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Our security engineers will map your encryption posture and recommend a deployment strategy.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm py-2.5"
              >
                Book a Security Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                item={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
