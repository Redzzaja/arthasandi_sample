"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-6 w-full bg-white/90 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b border-gray-100 md:border-none shadow-sm md:shadow-none"
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif font-bold italic shadow-md">
            B
          </div>
          <span className="hidden sm:inline font-sans font-medium text-brand-dark tracking-tight">/ hello@bolukukus.smg</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-brand-dark/80">
          <Link href="#product" className="hover:text-brand-primary transition-colors">Product <span className="text-brand-primary">.</span></Link>
          <Link href="#flavors" className="hover:text-brand-primary transition-colors">Flavors <span className="text-brand-primary">.</span></Link>
          <Link href="#pricing" className="hover:text-brand-primary transition-colors">Pricing <span className="text-brand-primary">.</span></Link>
          <Link href="/chat" className="hover:text-brand-primary transition-colors">Chatbot <span className="text-brand-primary">.</span></Link>
          <Link href="#story" className="hover:text-brand-primary transition-colors">Our Story</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
          <Link href="#login" className="hidden md:block text-brand-dark hover:text-brand-primary transition-colors">Log in</Link>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-dark/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-sm hover:border-brand-dark/20 transition-all font-sans text-brand-dark">
            Order Now <span className="hidden sm:inline text-black/50">— Fresh Daily</span>
          </button>
          <button 
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md"
          >
            <Menu className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col p-6">
                <button 
                  onClick={() => setMobileOpen(false)}
                  className="self-end w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="mt-8 flex flex-col gap-6 font-sans text-base font-medium text-brand-dark">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Home</Link>
                  <Link href="#product" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Product</Link>
                  <Link href="#flavors" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Flavors</Link>
                  <Link href="#pricing" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Pricing</Link>
                  <Link href="/chat" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Chatbot</Link>
                  <Link href="#story" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Our Story</Link>
                  <Link href="#login" onClick={() => setMobileOpen(false)} className="hover:text-brand-primary transition-colors">Log in</Link>
                </div>
                <button className="mt-8 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-primary text-white font-medium">
                  Order Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
