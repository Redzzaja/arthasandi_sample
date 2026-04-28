"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Heart, Award, Users, Clock, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MILESTONES = [
  {
    year: "2010",
    title: "Awal Mulanya",
    description:
      "Dimulai dari dapur kecil di Semarang, kami mulai membuat bolu kukus dengan resep warisan keluarga.",
  },
  {
    year: "2015",
    title: "Pertumbuhan",
    description:
      "Dari 10 box per hari menjadi 500 box. Kami mulai dikenal sebagai Bolu Kukus Semarang favorit.",
  },
  {
    year: "2018",
    title: "Ekspansi Rasa",
    description:
      "Menambahkan varian baru seperti Keju dan Mega Mendung untuk memenuhi permintaan pelanggan.",
  },
  {
    year: "2022",
    title: "20 Juta Terjual",
    description:
      "Mencapai milestone 20 juta bolu kukus terjual. Terima kasih atas kepercayaan pelanggan kami.",
  },
  {
    year: "2024",
    title: "Sentuhan Modern",
    description:
      "Memperkenalkan AI Assistant dan sistem pemesanan online untuk pengalaman pelanggan yang lebih baik.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description:
      "Setiap bolu kukus dibuat dengan penuh perhatian dan cinta, seperti memasak untuk keluarga sendiri.",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description:
      "Hanya menggunakan bahan pilihan terbaik. Tidak ada kompromi dalam kualitas.",
  },
  {
    icon: Users,
    title: "Pelanggan adalah Keluarga",
    description:
      "Kami percaya setiap pelanggan adalah bagian dari keluarga besar Bolu Kukus Semarang.",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description:
      "Dibuat setiap pagi dengan bahan segar. Kami tidak menyimpan stok dari hari sebelumnya.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#f2f4f6] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-dark mb-6 tracking-tight">
                Rasa Klasik, Sentuhan Modern
              </h1>
              <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
                Dari dapur kecil di Semarang, kami memulai perjalanan dengan satu misi sederhana: membuat bolu kukus terbaik yang pernah ada. 14 tahun kemudian, kami masih memegang teguh komitmen tersebut.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand-dark">20M+</p>
                    <p className="text-sm text-brand-dark/60">Terjual</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand-dark">14</p>
                    <p className="text-sm text-brand-dark/60">Tahun</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF7E5F]/20 to-[#E8502A]/20">
                <Image
                  src="/bolu_kukus_hero.png"
                  alt="Bolu Kukus Semarang"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-brand-dark/60">
              14 tahun melayani dengan cinta
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/20"></div>

            <div className="space-y-12">
              {MILESTONES.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                    <span className="inline-block px-3 py-1 bg-brand-primary text-white text-sm font-medium rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif text-xl text-brand-dark mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-brand-dark/60">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
              Nilai Kami
            </h2>
            <p className="text-brand-dark/60">
              Prinsip yang kami pegang teguh setiap hari
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="font-serif text-lg text-brand-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-brand-dark/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium mb-4">
                Lokasi
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
                Kunjungi Kami
              </h2>
              <p className="text-brand-dark/70 mb-6">
                Kami berlokasi di pusat kota Semarang. Silakan mampir untuk mencoba bolu kukus langsung dari oven!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-brand-dark">Alamat</p>
                    <p className="text-sm text-brand-dark/60">
                      Jalan Pandanaran No. 123, Semarang
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-brand-dark">Jam Operasional</p>
                    <p className="text-sm text-brand-dark/60">
                      Senin - Minggu: 08.00 - 20.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f2f4f6] rounded-3xl p-8"
            >
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-primary/40 mx-auto mb-2" />
                  <p className="text-brand-dark/60">Peta Interaktif</p>
                </div>
              </div>
            </motion.div>
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
              Jadi Bagian dari Cerita Kami
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Rasakan sendiri kelezatan bolu kukus yang telah dinikmati jutaan pelanggan.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Lihat Produk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
