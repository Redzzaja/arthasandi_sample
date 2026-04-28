"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    
    // Show/hide based on scroll direction
    if (direction === "down" && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    // Track if scrolled for styling changes
    setIsScrolled(latest > 50);
    setLastScrollY(latest);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/products", label: "Product" },
    { href: "/flavors", label: "Flavors" },
    { href: "/pricing", label: "Pricing" },
    { href: "/chat", label: "Chatbot" },
    { href: "/story", label: "Our Story" },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.35, 
          ease: [0.4, 0, 0.2, 1] 
        }}
        className="fixed top-4 left-4 right-4 z-50 hidden md:block"
      >
        <div 
          className={`mx-auto max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border border-white/20" 
              : "bg-white/70 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif font-bold italic shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <span className="font-sans font-medium text-brand-dark tracking-tight">
              Bolu Kukus
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-dark/80 hover:text-brand-dark transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/products"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary/90 transition-all hover:shadow-lg hover:shadow-brand-primary/25 hover:scale-105 active:scale-95"
          >
            Order Now
          </Link>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -80, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1] 
        }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
      >
        <div 
          className={`flex items-center justify-between px-4 py-3 transition-all duration-300 ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-xl shadow-md" 
              : "bg-white/80 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif font-bold italic shadow-md">
              B
            </div>
            <span className="font-sans font-medium text-brand-dark text-sm">
              Bolu Kukus
            </span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md active:scale-95 transition-transform"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white font-serif font-bold italic">
                      B
                    </div>
                    <span className="font-sans font-medium text-brand-dark">
                      Bolu Kukus
                    </span>
                  </Link>
                  
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors active:scale-95"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6 px-5">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-4 px-4 text-lg font-medium text-brand-dark hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-colors group"
                        >
                          <span>{link.label}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-5 border-t border-gray-100 space-y-3">
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-colors active:scale-95"
                  >
                    Order Now
                  </Link>
                  
                  <p className="text-center text-xs text-gray-400">
                    © 2024 Bolu Kukus Semarang
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
