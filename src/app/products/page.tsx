"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ShoppingBag, Star, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "pandan-klasik",
    name: "Bolu Kukus Pandan Klasik",
    price: 45000,
    description: "Rasa autentik pandan yang harum dengan tekstur selembut awan. Favorit sejak 2010.",
    image: "/bolu_kukus_hero.png",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 15200,
  },
  {
    id: "coklat-premium",
    name: "Bolu Kukus Coklat",
    price: 48000,
    description: "Coklat Belgia premium dengan lapisan glaze coklat yang menggugah selera.",
    image: "/bolu_kukus_hero.png",
    badge: "Popular",
    rating: 4.8,
    reviews: 8900,
  },
  {
    id: "keju-edam",
    name: "Bolu Kukus Keju",
    price: 50000,
    description: "Paduan sempurna keju Edam lokal yang gurih dengan adonan lembut.",
    image: "/bolu_kukus_hero.png",
    badge: "New",
    rating: 4.9,
    reviews: 5600,
  },
  {
    id: "mega-mendung",
    name: "Bolu Kukus Mega Mendung",
    price: 55000,
    description: "Motif mega mendung yang indah dengan rasa pandan istimewa. Edisi terbatas.",
    image: "/bolu_kukus_hero.png",
    badge: "Limited",
    rating: 5.0,
    reviews: 3200,
  },
];

export default function ProductsPage() {
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
              20 Juta+ Terjual
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-4 tracking-tight">
              Produk Kami
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Setiap gigitan adalah pengalaman. Dibuat dengan bahan premium dan resep warisan keluarga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-[#FFF5F0] to-[#FFE8E0] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-primary text-white text-xs font-medium rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-brand-dark">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews.toLocaleString()})</span>
                  </div>
                  <h3 className="font-serif text-xl text-brand-dark mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-dark/60 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-brand-dark">
                      Rp {product.price.toLocaleString()}
                    </span>
                    <button className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center hover:bg-brand-primary/90 transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fresh Daily", desc: "Dibuat setiap pagi dengan bahan segar" },
              { title: "Premium Quality", desc: "Bahan pilihan dan resep rahasia" },
              { title: "50x Lebih Lembut", desc: "Tekstur seperti awan di mulut" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-serif text-xl text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-brand-dark/60">{feature.desc}</p>
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
              Masih Bingung Memilih?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Chat dengan AI Assistant kami untuk rekomendasi rasa yang cocok untuk Anda.
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
