"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Leaf, Coffee, Milk, Cherry, Grape, ArrowRight } from "lucide-react";
import Link from "next/link";

const FLAVORS = [
  {
    id: "pandan",
    name: "Pandan",
    description: "Rasa klasik dengan aroma pandan alami yang khas. Favorit sejuta umat.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    icon: Leaf,
    popular: true,
    note: "Best Seller",
  },
  {
    id: "coklat",
    name: "Coklat",
    description: "Coklat Belgia premium dengan rasa rich dan creamy yang sempurna.",
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-50",
    icon: Coffee,
    popular: true,
    note: "Premium",
  },
  {
    id: "keju",
    name: "Keju",
    description: "Perpaduan gurih keju Edam dengan manis bolu yang pas. Unik dan lezat.",
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50",
    icon: Milk,
    popular: false,
    note: "New",
  },
  {
    id: "blueberry",
    name: "Blueberry",
    description: "Rasa buah blueberry segar dengan sentuhan asam manis yang menyegarkan.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    icon: Grape,
    popular: false,
    note: "Limited",
  },
  {
    id: "stroberi",
    name: "Stroberi",
    description: "Stroberi segar yang manis dengan aroma fruity yang menggugah selera.",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    icon: Cherry,
    popular: false,
    note: "Seasonal",
  },
];

export default function FlavorsPage() {
  return (
    <div className="min-h-screen bg-[#f2f4f6] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-4">
              Varian Rasa
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-4 tracking-tight">
              Flavors
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Pilihan rasa autentik yang dibuat dengan bahan alami terbaik. Ada yang cocok untuk setiap selera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flavors Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLAVORS.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${flavor.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <flavor.icon className="w-16 h-16 text-white/30" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {flavor.note}
                    </span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                    <div className={`w-full h-full ${flavor.bgColor} flex items-center justify-center`}>
                      <flavor.icon className="w-12 h-12 text-brand-dark/60" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 pb-8 px-6 text-center">
                  <h3 className="font-serif text-2xl text-brand-dark mb-3">
                    {flavor.name}
                  </h3>
                  <p className="text-brand-dark/60 mb-6">
                    {flavor.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full text-brand-dark font-medium hover:border-brand-primary hover:text-brand-primary transition-colors">
                    Pesan Rasa Ini
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combination Ideas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
              Kombinasi Favorit
            </h2>
            <p className="text-brand-dark/60">
              Pelanggan kami suka memesan kombinasi rasa ini
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Duo Klasik", combo: "Pandan + Coklat", desc: "Kombinasi timeless yang selalu cocok" },
              { name: "Trio Premium", combo: "Pandan + Coklat + Keju", desc: "Nikmati tiga rasa terbaik sekaligus" },
              { name: "Fruit Blast", combo: "Blueberry + Stroberi", desc: "Segarnya buah-buahan segar" },
            ].map((combo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f2f4f6] rounded-2xl p-6 text-center"
              >
                <span className="text-brand-primary font-medium">{combo.name}</span>
                <h4 className="font-serif text-xl text-brand-dark mt-2 mb-2">{combo.combo}</h4>
                <p className="text-sm text-brand-dark/60">{combo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-primary to-[#E8502A] rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Bingung Pilih Rasa?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Tanya AI Assistant kami untuk rekomendasi rasa berdasarkan preferensi Anda.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Chat dengan AI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
