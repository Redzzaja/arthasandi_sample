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
    <section className="w-full bg-white py-12 border-t border-brand-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex items-center gap-12 sm:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-12 sm:gap-24 whitespace-nowrap"
        >
          {/* Duplicate for seamless infinite scrolling */}
          {[...CLOUD_LOGOS, ...CLOUD_LOGOS, ...CLOUD_LOGOS].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 font-serif font-bold text-xl text-brand-dark">
               <div className="w-8 h-8 bg-brand-dark text-white rounded-md flex items-center justify-center text-sm font-sans">{logo.icon}</div>
               {logo.name}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
