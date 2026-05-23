import React from 'react';
import { Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    tier: "Dasar",
    title: "Undangan Digital",
    subName: "Pernikahan & Acara Spesial",
    price: "Rp 75rb - 150rb",
    priceSuffix: " / proyek",
    duration: "2-3 Hari",
    features: ["1 halaman animasi premium", "Formulir RSVP interaktif", "Notifikasi otomatis WhatsApp", "Tampilan optimal di semua perangkat", "Hosting & SSL sudah termasuk", "1x revisi desain"]
  },
  {
    tier: "Standar",
    title: "Landing Page Bisnis",
    subName: "Bisnis & Personal Branding",
    price: "Rp 300rb - 500rb",
    priceSuffix: " / proyek",
    duration: "3-5 Hari",
    features: ["Minimal 4 seksi konten", "Maksimal 6 seksi konten", "Tombol CTA & formulir kontak", "Integrasi tombol WhatsApp", "SEO dasar & Google Analytics", "Hosting & SSL (tahun pertama)", "2x revisi desain"]
  },
  {
    tier: "Premium",
    title: "Company Profile",
    subName: "Perusahaan & Organisasi",
    price: "Rp 600rb - 1jt",
    priceSuffix: " / proyek",
    duration: "5-7 Hari",
    features: ["5-7 halaman lengkap", "SEO penuh + Google Analytics", "Formulir kontak & Google Maps", "Blog opsional terintegrasi", "Hosting & SSL (tahun pertama)", "3x revisi + dukungan 7 hari"]
  },
  {
    tier: "Tambahan",
    title: "Website Portofolio",
    subName: "Individu & Kreator Konten",
    price: "Rp 250rb - 400rb",
    priceSuffix: " / proyek",
    duration: "3-4 Hari",
    features: ["3-5 halaman profesional", "Galeri karya & proyek pilihan", "Halaman kontak + formulir", "SEO dasar teroptimasi", "Tampilan responsif semua layar", "2x revisi desain"]
  },
  {
    tier: "Bulanan",
    title: "Pemeliharaan Website",
    subName: "Semua Klien Aktif",
    price: "Rp 150rb - 350rb",
    priceSuffix: " / bulan",
    duration: "Dukungan 24/7",
    features: ["Basic: pembaruan konten 2x/bulan", "Basic: backup data rutin", "Full: pembaruan konten tak terbatas", "Full: laporan performa bulanan", "Full: perbaikan bug & error minor"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-accent)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            [ Investasi &amp; Layanan ]
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.25rem)] uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pilih Paket <span className="text-tech">Terbaik</span>
          </h2>
          <p className="text-[var(--clr-text-muted)] max-w-[600px] text-[1.05rem] mt-2">
            Harga transparan dengan kualitas premium. Setiap paket dirancang khusus untuk memenuhi berbagai skala kebutuhan digital Anda — dari usaha rintisan hingga perusahaan berkembang.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {servicesList.map((srv, index) => (
            <motion.div
              key={index}
              className="pixel-corners relative flex flex-col bg-[var(--bg-card)] border border-[var(--clr-border)] rounded-[4px] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[var(--clr-accent)] hover:shadow-[0_0_25px_rgba(0,242,254,0.15)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="halftone-overlay" />

              {/* Card Header */}
              <div>
                <span
                  className="inline-block bg-[var(--bg-card-hover)] text-[var(--clr-text)] px-3 py-1 rounded-full text-[0.75rem] mb-4 border border-[var(--clr-border)] transition-all duration-300 group-hover:bg-[rgba(0,242,254,0.08)] group-hover:border-[var(--clr-accent)] group-hover:text-[var(--clr-accent)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {srv.tier}
                </span>
                <h3
                  className="text-[1.25rem] font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {srv.title}
                </h3>
                <p className="text-[0.85rem] text-[var(--clr-text-muted)] mb-6 min-h-[40px]">
                  {srv.subName}
                </p>
                <div className="mb-6">
                  <span
                    className="text-[1.3rem] font-extrabold text-[var(--clr-text)] leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {srv.price}
                    <span
                      className="text-[0.85rem] text-[var(--clr-text-muted)] font-normal ml-1"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {srv.priceSuffix}
                    </span>
                  </span>
                </div>
                {srv.duration && (
                  <div
                    className="flex items-center gap-2 text-[0.75rem] text-[var(--clr-accent)] opacity-80 mb-0"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    <Clock size={14} className="shrink-0" />
                    <span>{srv.duration}</span>
                  </div>
                )}
              </div>

              <div className="w-full h-px bg-[var(--clr-border)] my-6" />

              {/* Features */}
              <div className="grow mb-10">
                <ul className="flex flex-col gap-4">
                  {srv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[0.9rem] text-white/45 transition-colors duration-300">
                      <Check size={16} strokeWidth={3} className="text-[var(--clr-accent)] shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-auto">
                <motion.a
                  href="#planner"
                  className="pixel-corners w-full flex justify-center items-center gap-2 bg-transparent text-[var(--clr-text)] px-6 py-3 text-[0.78rem] tracking-[0.08em] uppercase rounded-[4px] no-underline border border-[var(--clr-border)] transition-all duration-300 hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ambil Paket
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
