"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Shield, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Solutions", href: "#features", hasDropdown: true },
  { label: "Protocol", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company", hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#080b12]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600/30 rounded-lg blur-sm group-hover:bg-purple-600/50 transition-all duration-300" />
              <Shield className="w-5 h-5 text-purple-400 relative z-10" />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">ENC</span>
              <span className="text-purple-500">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 px-3 py-2"
            >
              Log in
            </a>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-sm py-2 px-5"
            >
              Encrypt Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-[#080b12]/95 backdrop-blur-xl border-b border-white/[0.06]"
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3 py-3 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </a>
          ))}
          <div className="divider my-3" />
          <div className="flex flex-col gap-2">
            <a href="#" className="btn-secondary justify-center text-sm py-2.5">
              Log in
            </a>
            <a href="#cta" className="btn-primary justify-center text-sm py-2.5">
              Encrypt Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
