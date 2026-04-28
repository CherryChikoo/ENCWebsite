"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Mail } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const footerLinks = {
  Solutions: [
    "Symmetric Encryption",
    "Asymmetric Encryption",
    "Zero-Knowledge Proofs",
    "Secure Key Exchange",
    "Data Tokenization",
  ],
  Company: [
    "About ENC",
    "Our Protocol",
    "Careers",
    "Security Blog",
    "Press Kit",
  ],
  Resources: [
    "Documentation",
    "API Reference",
    "SDK Libraries",
    "Compliance",
    "Status Page",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "SOC 2 Report",
  ],
};

const socials = [
  { icon: FaXTwitter, href: "#", label: "X / Twitter" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#060910]">
      {/* Newsletter band */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">
                Security Digest
              </p>
              <h3 className="text-xl font-semibold text-white">
                Stay ahead of cyber threats.
              </h3>
            </div>
            <div className="flex items-center gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary py-2.5 px-5 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600/30 rounded-lg blur-sm" />
                <Shield className="w-5 h-5 text-purple-400 relative z-10" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-white">ENC</span>
                <span className="text-purple-500">.</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Military-grade encryption infrastructure for modern enterprises.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-purple-400 hover:border-purple-500/30 transition-colors duration-200"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© 2025 ENC Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
