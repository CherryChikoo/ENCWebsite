"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Building2, Shield } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for startups securing their first data assets.",
    icon: Zap,
    features: [
      "Up to 1M encrypted records",
      "AES-256-GCM & RSA-2048",
      "Automated key rotation (monthly)",
      "REST API + SDK access",
      "Community support",
      "Basic audit logs",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$199",
    period: "/month",
    description: "For growing teams that need compliance and scale.",
    icon: Shield,
    badge: "Most Popular",
    features: [
      "Up to 50M encrypted records",
      "Full cipher suite access",
      "Automated key rotation (daily)",
      "Zero-knowledge architecture",
      "SOC 2 & GDPR compliance",
      "SIEM integration",
      "Priority support (4h SLA)",
      "Real-time audit logs",
    ],
    cta: "Encrypt Your Platform",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated encryption infrastructure for large organizations.",
    icon: Building2,
    features: [
      "Unlimited encrypted records",
      "Quantum-resistant algorithms",
      "Dedicated key management HSM",
      "On-premise & hybrid deploy",
      "Custom compliance reporting",
      "Dedicated security engineer",
      "99.99% uptime SLA",
      "24/7 white-glove support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      "ENC reduced our encryption implementation time from 6 months to 2 days. The SDK just works, and the compliance dashboards saved our entire SOC 2 audit.",
    author: "Sarah Chen",
    title: "Head of Security, Stripe",
    initials: "SC",
  },
  {
    quote:
      "We process 2 billion records daily. ENC's sub-millisecond latency means our users never notice the encryption layer — but our compliance team certainly does.",
    author: "Marcus Webb",
    title: "CTO, DataBridge",
    initials: "MW",
  },
  {
    quote:
      "After a breach at our previous provider, we moved to ENC's zero-knowledge architecture. We haven't had a single incident in 18 months.",
    author: "Priya Nair",
    title: "CISO, MedVault",
    initials: "PN",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={testimonialsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="section-label mb-5 inline-flex">Testimonials</span>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Businesses Love{" "}
              <span className="gradient-text-purple">Our ENC Solutions.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 40 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-7 hover:border-purple-500/20 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-purple-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <div className="w-9 h-9 rounded-full bg-purple-600/25 flex items-center justify-center text-purple-300 text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-slate-600">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-28 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="section-label mb-5 inline-flex">Pricing</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              AI Automation for Any Size.{" "}
              <span className="gradient-text-purple">For Anybody.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Transparent, usage-based pricing. No hidden fees. Start free and
              scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  whileHover={{ y: -4 }}
                  className={`relative rounded-2xl p-7 flex flex-col ${
                    plan.highlighted
                      ? "bg-purple-600/[0.12] border border-purple-500/40 purple-glow"
                      : "glass-card hover:border-white/[0.12] transition-all duration-300"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${plan.highlighted ? "bg-purple-600/30" : "bg-white/[0.05]"}`}>
                      <Icon className={`w-4.5 h-4.5 ${plan.highlighted ? "text-purple-300" : "text-slate-400"}`} />
                    </div>
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      {plan.name}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-white"}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-purple-400" : "text-emerald-500/70"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25"
                        : "border border-white/[0.1] text-slate-300 hover:border-white/20 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
