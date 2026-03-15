"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 w-full max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif font-bold italic shadow-md">
          B
        </div>
        <span className="font-sans font-medium text-brand-dark tracking-tight">/ hello@bolukukus.smg</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-brand-dark/80">
        <Link href="#product" className="hover:text-brand-primary transition-colors">Product <span className="text-brand-primary">.</span></Link>
        <Link href="#flavors" className="hover:text-brand-primary transition-colors">Flavors <span className="text-brand-primary">.</span></Link>
        <Link href="#pricing" className="hover:text-brand-primary transition-colors">Pricing <span className="text-brand-primary">.</span></Link>
        <Link href="#story" className="hover:text-brand-primary transition-colors">Our Story</Link>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="#login" className="hidden md:block text-brand-dark hover:text-brand-primary transition-colors">Log in</Link>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-dark/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-sm hover:border-brand-dark/20 transition-all font-sans text-brand-dark">
          Order Now <span className="text-black/50">— Fresh Daily</span>
        </button>
      </div>
    </motion.nav>
  );
}
