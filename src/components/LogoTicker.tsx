"use client";

import { motion } from "framer-motion";

const CLOUD_LOGOS = [
  { name: "Gojudge", icon: "G" },
  { name: "GrabFood", icon: "GF" },
  { name: "ShopeeFood", icon: "SF" },
  { name: "TikTokShop", icon: "TT" },
  { name: "Tokopedia", icon: "TP" }
];

export function LogoTicker() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 border-t border-brand-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative flex items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Gradient masks for seamless edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-8 sm:gap-12 md:gap-24 whitespace-nowrap"
          >
            {/* Duplicate 4 times for truly seamless infinite scrolling */}
            {[...CLOUD_LOGOS, ...CLOUD_LOGOS, ...CLOUD_LOGOS, ...CLOUD_LOGOS].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 font-serif font-bold text-lg sm:text-xl text-brand-dark">
                 <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-dark text-white rounded-md flex items-center justify-center text-xs sm:text-sm font-sans">{logo.icon}</div>
                 <span className="hidden sm:inline">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
