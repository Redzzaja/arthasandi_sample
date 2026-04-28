"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Check, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#f2f4f6] pt-24 pb-12 px-4 sm:px-6 md:px-8 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Subtle background gradient to match the soft grey vibe */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2f4f6] via-[#ebeef2] to-[#e4e8ec]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="flex flex-col gap-8 max-w-xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-start gap-3"
          >
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center font-serif text-base sm:text-lg shrink-0">
               B
             </div>
            <div>
              <p className="font-serif font-bold text-lg leading-none">20M+ Terjual</p>
              <p className="text-sm text-gray-600 mt-1">Baca <a href="#" className="underline font-medium text-black">Cerita Pelanggan</a></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-serif text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-[0.9] text-brand-dark tracking-[-0.04em] relative">
              Bolu<span className="align-top text-[0.6em] relative -top-2 sm:-top-3 font-sans font-light">+</span>
            </h1>
            <div className="w-full h-px bg-brand-dark/20 mt-8 mb-6"></div>
            <p className="text-xl sm:text-2xl font-sans text-brand-dark/80 leading-relaxed max-w-lg">
              Rasa klasik yang dirindukan, dengan sentuhan modern. — Hingga 50x lebih lembut.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FF7E5F] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                    <Image src="https://i.pravatar.cc/100" alt="Avatar" fill className="object-cover" sizes="40px" />
                </div>
                <div>
                   <p className="text-sm font-medium text-brand-dark flex items-center gap-1">Loved the performance <span className="opacity-40">/</span> <Star className="w-3 h-3 fill-black text-black" /> 4.9</p>
                   <p className="text-xs text-brand-dark/60">100% Satisfied</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-brand-dark/10"></div>
            
            <div className="flex items-center gap-6 w-full sm:w-auto">
               <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition-colors whitespace-nowrap">
                 Pesan Sekarang — <span className="font-normal opacity-80 text-xs">Fresh Daily</span>
               </button>
               <a href="#" className="text-sm font-medium text-black flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap">Our Menu <ArrowUpRight className="w-4 h-4"/></a>
            </div>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full flex items-center justify-center overflow-hidden">

          {/* Main Orange Shape Backdrop */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[85%] h-[85%] bg-gradient-to-br from-[#FF6B4A] to-[#E8502A] rounded-[3rem] sm:rounded-[4rem] lg:rounded-[5rem] shadow-2xl overflow-hidden"
          >
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </motion.div>

          {/* Product Image Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="absolute z-10 w-full h-full"
          >
             <div className="relative w-full h-full max-w-[500px] lg:max-w-[600px] mx-auto flex items-center justify-center">
                 <Image
                    src="/bolu_kukus_hero.png"
                    alt="Premium Bolu Kukus Semarang"
                    fill
                    className="object-contain object-center drop-shadow-2xl scale-100 sm:scale-105 mt-4 sm:mt-8"
                    priority
                 />
                 
                 {/* Play Button Overlay */}
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="absolute left-1/4 top-[45%] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-black hover:bg-brand-light transition-colors z-20"
                 >
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                 </motion.button>
             </div>
          </motion.div>

          {/* Floating Elements - Hidden on small screens to prevent overflow */}
          {/* Top Chat Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute top-[20%] left-[2%] sm:left-[5%] lg:left-[0%] z-20 flex flex-col gap-2 -rotate-3 scale-65 sm:scale-90 lg:scale-100 origin-top-left hidden sm:flex"
          >
             <div className="bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2 text-xs sm:text-sm font-medium animate-float">
                 <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#FF7E5F] rounded flex items-center justify-center"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" /></div>
                 How is the taste?
             </div>
             <div className="bg-white px-3 sm:px-4 py-2 rounded-2xl rounded-tl-sm shadow-md flex items-center gap-2 text-xs sm:text-sm font-medium ml-2 sm:ml-4 animate-float" style={{ animationDelay: '1s' }}>
                 <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#4A90E2] rounded-full flex items-center justify-center text-white text-[8px] sm:text-[10px]"><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
                 Do you like the texture?
             </div>
          </motion.div>

          {/* Right Floating Card (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-[10%] right-[2%] sm:right-[5%] lg:right-[0%] z-20 bg-white/40 backdrop-blur-xl border border-white/40 p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl w-36 sm:w-44 lg:w-48 animate-float-delayed scale-75 sm:scale-90 lg:scale-100 origin-top-right"
          >
            <p className="text-[10px] sm:text-xs font-semibold text-brand-dark/60 tracking-wider">— UP TO</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-dark mt-1">60%</h3>
            <p className="text-xs sm:text-sm font-sans text-brand-dark/80 leading-tight mt-1">More orders this weekend</p>
          </motion.div>

          {/* Bottom Floating Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-[5%] right-[2%] sm:right-[5%] lg:right-[0%] z-30 bg-white/60 backdrop-blur-2xl border border-white/50 p-3 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl flex items-center gap-3 sm:gap-4 pr-6 sm:pr-10 hover:bg-white/80 transition-colors cursor-pointer scale-75 sm:scale-90 lg:scale-100 origin-bottom-right"
          >
             <div className="w-24 h-24 bg-gray-100/80 rounded-2xl overflow-hidden relative border border-white shrink-0">
                 <Image src="/bolu_kukus_hero.png" alt="Bolu Kukus Pandan" fill className="object-cover scale-150" />
             </div>
             <div>
                 <p className="font-medium text-lg text-brand-dark leading-tight">Bolu Pandan<br/>Klasik</p>
                 <p className="font-bold text-xl mt-1">Rp 45.000</p>
                 <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1 w-max mt-2 text-xs font-bold shadow-sm">
                     <Star className="w-3 h-3 fill-black text-black" /> 4.8
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
