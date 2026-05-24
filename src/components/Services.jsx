import React from 'react';
import { Check, Clock } from 'lucide-react';

const servicesList = [
  {
    tier: "01",
    title: "Undangan Digital",
    subName: "Pernikahan & Acara Spesial",
    price: "Rp 75rb – 150rb",
    duration: "2–3 Hari",
    features: ["1 halaman animasi premium", "Formulir RSVP interaktif", "Notifikasi WhatsApp", "Desain responsif", "Hosting & SSL"]
  },
  {
    tier: "02",
    title: "Landing Page",
    subName: "Bisnis & Personal Branding",
    price: "Rp 300rb – 500rb",
    duration: "3–5 Hari",
    features: ["4–6 seksi konten", "Tombol CTA & kontak", "Integrasi WhatsApp", "SEO & Analytics", "Hosting (1 tahun)"]
  },
  {
    tier: "03",
    title: "Company Profile",
    subName: "Perusahaan & Organisasi",
    price: "Rp 600rb – 1jt",
    duration: "5–7 Hari",
    features: ["5–7 halaman lengkap", "SEO penuh", "Formulir & Google Maps", "Blog opsional", "3x revisi + support"]
  },
  {
    tier: "04",
    title: "Web Portofolio",
    subName: "Individu & Kreator",
    price: "Rp 250rb – 400rb",
    duration: "3–4 Hari",
    features: ["3–5 halaman web", "Galeri karya", "Halaman kontak", "SEO dasar", "Desain responsif"]
  },
  {
    tier: "05",
    title: "Pemeliharaan",
    subName: "Semua Klien Aktif",
    price: "Rp 150rb – 350rb",
    duration: "Ongoing",
    features: ["Pembaruan konten", "Backup rutin", "Laporan bulanan", "Perbaikan bug", "Dukungan prioritas"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-grid">

        {/* Editorial Header */}
        <header className="col-full section-header" data-reveal>
          <span className="label">01</span>
          <hr className="section-rule" />
          <span className="label">Paket Layanan</span>
        </header>

        {/* Title block */}
        <div className="col-left-7 mb-12">
          <h2 className="headline" data-reveal>
            Investasi &amp; Layanan
            <br />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--accent)',
              }}
            >
              yang transparan.
            </span>
          </h2>
          <p className="body mt-4" data-reveal>
            Setiap paket dirancang khusus untuk berbagai kebutuhan digital — dari usaha rintisan hingga perusahaan berkembang.
          </p>
        </div>

        {/* Grid */}
        <div
          className="col-full grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
          data-reveal
        >
          {servicesList.map((srv, index) => (
            <div
              key={index}
              className="card flex flex-col p-6 group"
              style={{ transition: 'border-color 0.4s, transform 0.4s' }}
            >
              {/* Tier number */}
              <div
                className="label mb-4"
                style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}
              >
                {srv.tier}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {srv.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {srv.subName}
              </p>

              {/* Price */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.015em',
                }}
              >
                {srv.price}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 mb-5">
                <Clock size={11} style={{ color: 'var(--text-muted)' }} />
                <span className="label">{srv.duration}</span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.25rem' }} />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 grow mb-6">
                {srv.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.4',
                    }}
                  >
                    <Check
                      size={13}
                      strokeWidth={2.5}
                      style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#planner"
                className="btn--ghost"
                style={{ fontSize: '0.75rem', padding: '0.6em 1.4em', justifyContent: 'center' }}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
