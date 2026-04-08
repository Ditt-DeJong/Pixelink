import React from 'react';
import { Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesList = [
  {
    tier: "Basic",
    title: "Undangan Digital",
    subName: "Pernikahan & acara",
    price: "Rp 200rb - 400rb",
    priceSuffix: " / proyek",
    duration: "2-3 Hari",
    features: ["1 halaman animasi", "RSVP form", "Notifikasi WhatsApp", "Mobile-responsive", "Hosting & SSL included", "1x revisi"]
  },
  {
    tier: "Standard",
    title: "Landing Page Bisnis",
    subName: "Bisnis & personal brand",
    price: "Rp 600rb - 1,2 jt",
    priceSuffix: " / proyek",
    duration: "3-5 Hari",
    features: ["Min 4 Section", "Maks 6 section", "CTA & form kontak", "WhatsApp button", "SEO dasar & Analytics", "Hosting & SSL (tahun pertama)", "2x revisi"]
  },
  {
    tier: "Premium",
    title: "Company Profile",
    subName: "Perusahaan & organisasi",
    price: "Rp 1,2 jt - 2,1 jt",
    priceSuffix: " / proyek",
    duration: "5-7 Hari",
    features: ["5-7 halaman", "Full SEO + Google Analytics", "Form kontak & Google Maps", "Blog opsional", "Hosting & SSL (tahun pertama)", "3x revisi + 7-day support"]
  },
  {
    tier: "Tambahan",
    title: "Portfolio Website",
    subName: "Individu & kreator",
    price: "Rp 450rb - 800rb",
    priceSuffix: " / proyek",
    duration: "3-4 Hari",
    features: ["3-5 halaman", "Galeri karya & proyek", "Halaman kontak + form", "SEO dasar", "Mobile-responsive", "2x revisi"]
  },
  {
    tier: "Bulanan",
    title: "Maintenance",
    subName: "Semua klien aktif",
    price: "Rp 150rb - 350rb",
    priceSuffix: " / bulan",
    duration: "24/7 Support",
    features: ["Basic: update konten 2x/bln", "Basic: backup rutin", "Full: update unlimited", "Full: laporan performa", "Full: perbaikan bug minor"]
  }
];

const Services = () => {
  return (
    <section id="services" className="pricing-section">
      <div className="container">
        
        <motion.div 
          className="section-head text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="label label--accent">[ Investasi & Layanan ]</span>
          <h2 className="section-title">Pilih Paket <span className="text-tech">Terbaik</span></h2>
          <p className="section-desc">Transparansi harga dengan kualitas kelas premium. Kami menyediakan paket yang telah dikalibrasi untuk berbagai skala kebutuhan digital Anda.</p>
        </motion.div>

        <div className="pricing-grid">
          {servicesList.map((srv, index) => (
            <motion.div 
              className="pricing-card" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="card-header">
                <span className="tier-badge">{srv.tier}</span>
                <h3 className="card-title">{srv.title}</h3>
                <p className="card-desc">{srv.subName}</p>
                <div className="card-price">
                  <div className="price-value">{srv.price}<span className="price-suffix">{srv.priceSuffix}</span></div>
                </div>
                {srv.duration && (
                  <div className="card-duration">
                    <Clock size={14} className="duration-icon" />
                    <span>{srv.duration}</span>
                  </div>
                )}
              </div>

              <div className="card-divider"></div>

              <div className="card-features">
                <ul>
                  {srv.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} strokeWidth={3} className="check-icon" /> 
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <motion.a 
                  href="#contact" 
                  className="btn btn-ghost w-100"
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
