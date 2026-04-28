import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import About from "@/sections/About";
import Showcase from "@/sections/Showcase";
import Benefits from "@/sections/Benefits";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080b12] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Showcase />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
