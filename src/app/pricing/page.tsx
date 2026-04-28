"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Check, Star, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const PACKAGES = [
  {
    id: "single",
    name: "Single Box",
    price: 45000,
    originalPrice: null,
    description: "Cocok untuk coba-coba atau hadiah pribadi",
    items: "1 varian rasa",
    pieces: "6 pcs bolu kukus",
    popular: false,
    features: [
      "Pilih 1 rasa favorit",
      "Free kartu ucapan",
      "Packaging cantik",
      "Garansi fresh",
    ],
  },
  {
    id: "duo",
    name: "Duo Package",
    price: 85000,
    originalPrice: 90000,
    description: "Kombinasi 2 rasa, hemat Rp 5.000",
    items: "2 varian rasa",
    pieces: "12 pcs bolu kukus",
    popular: true,
    features: [
      "Pilih 2 rasa bebas",
      "Free kartu ucapan",
      "Premium packaging",
      "Hemat Rp 5.000",
      "Garansi fresh",
    ],
  },
  {
    id: "family",
    name: "Family Box",
    price: 160000,
    originalPrice: 180000,
    description: "Hemat besar untuk acara keluarga",
    items: "4 varian rasa",
    pieces: "24 pcs bolu kukus",
    popular: false,
    features: [
      "Semua rasa tersedia",
      "Free kartu ucapan",
      "Premium packaging",
      "Hemat Rp 20.000",
      "Free delivery < 5km",
      "Garansi fresh",
    ],
  },
  {
    id: "party",
    name: "Party Pack",
    price: 350000,
    originalPrice: 420000,
    description: "Paket lengkap untuk acara besar",
    items: "5 varian rasa + minuman",
    pieces: "50 pcs bolu kukus",
    popular: false,
    features: [
      "Semua varian rasa",
      "Free 10 botol teh",
      "Custom kartu ucapan",
      "Premium gift box",
      "Free delivery < 10km",
      "Garansi fresh",
      "Diskon 15% next order",
    ],
  },
];

export default function PricingPage() {
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
              Harga & Paket
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-dark mb-4 tracking-tight">
              Pricing
            </h1>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket include packaging cantik dan garansi kepuasan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? "ring-2 ring-brand-primary shadow-xl scale-105 z-10"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-brand-primary text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className={`p-6 ${pkg.popular ? "pt-12" : ""}`}>
                  <div className="mb-4">
                    <h3 className="font-serif text-xl text-brand-dark mb-1">{pkg.name}</h3>
                    <p className="text-sm text-brand-dark/60">{pkg.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-brand-dark">
                        Rp {pkg.price.toLocaleString()}
                      </span>
                    </div>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        Rp {pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="mb-6 p-4 bg-[#f2f4f6] rounded-xl">
                    <div className="flex items-center gap-2 text-sm text-brand-dark">
                      <Sparkles className="w-4 h-4 text-brand-primary" />
                      <span>{pkg.items}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-dark mt-1">
                      <Star className="w-4 h-4 text-brand-primary" />
                      <span>{pkg.pieces}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-dark/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-medium transition-colors ${
                      pkg.popular
                        ? "bg-brand-primary text-white hover:bg-brand-primary/90"
                        : "bg-gray-100 text-brand-dark hover:bg-gray-200"
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pengiriman",
                desc: "Kami kirim setiap hari jam 08.00-20.00. Pesanan di atas Rp 100.000 free delivery < 5km.",
              },
              {
                title: "Pre-Order",
                desc: "Untuk pesanan > 50 box, mohon pre-order H-2 agar kami bisa siapkan dengan baik.",
              },
              {
                title: "Custom Order",
                desc: "Butuh custom untuk event? Hubungi kami untuk harga khusus dan packaging custom.",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <h3 className="font-serif text-xl text-brand-dark mb-3">{info.title}</h3>
                <p className="text-brand-dark/60">{info.desc}</p>
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
              Butuh Bantuan Memilih?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Chat dengan AI Assistant kami untuk rekomendasi paket yang sesuai dengan kebutuhan Anda.
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
