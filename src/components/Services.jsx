import { useRef, useCallback } from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    tier: "01", title: "Undangan Digital", subName: "Pernikahan & Acara Spesial",
    price: "Rp 75rb – 200rb", duration: "2–3 Hari",
    features: ["1 halaman animasi premium", "Formulir RSVP interaktif", "Notifikasi WhatsApp", "Desain responsif", "Hosting & SSL"]
  },
  {
    tier: "02", title: "Landing Page", subName: "Bisnis & Personal Branding",
    price: "Rp 400rb – 800rb", duration: "3–5 Hari",
    features: ["4–6 seksi konten", "Tombol CTA & kontak", "Integrasi WhatsApp", "SEO & Analytics", "Hosting (1 tahun)"]
  },
  {
    tier: "03", title: "Company Profile", subName: "Perusahaan & Organisasi",
    price: "Rp 700rb – 1.5jt", duration: "5–7 Hari",
    features: ["5–7 halaman lengkap", "SEO penuh", "Formulir & Google Maps", "Blog opsional", "3x revisi + support"]
  },
  {
    tier: "04", title: "Web Portofolio", subName: "Individu & Kreator",
    price: "Rp 300rb – 600rb", duration: "3–4 Hari",
    features: ["3–5 halaman web", "Galeri karya", "Halaman kontak", "SEO dasar", "Desain responsif"]
  },
  {
    tier: "05", title: "Pemeliharaan", subName: "Semua Klien Aktif",
    price: "Rp 150rb – 350rb", duration: "Ongoing",
    features: ["Pembaruan konten", "Backup rutin", "Laporan bulanan", "Perbaikan bug", "Dukungan prioritas"]
  }
];

/* ── ServiceCard ──────────────────────────────────────────────────────────── */
const ServiceCard = ({ srv }) => {
  const cardRef   = useRef(null);
  const glowRef   = useRef(null);
  const frameRef  = useRef(null);

  // Mouse spotlight — runs on rAF to avoid layout thrash
  const onMouseMove = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect  = card.getBoundingClientRect();
      const x     = e.clientX - rect.left;
      const y     = e.clientY - rect.top;

      // Spotlight gradient follows cursor
      glow.style.background =
        `radial-gradient(320px circle at ${x}px ${y}px, rgba(200,241,53,0.10) 0%, transparent 65%)`;

      // Subtle tilt — max ±6deg
      const cx    = rect.width  / 2;
      const cy    = rect.height / 2;
      const rotX  = ((y - cy) / cy) * -6;
      const rotY  = ((x - cx) / cx) *  6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const card = cardRef.current;
    const glow = glowRef.current;
    if (card) card.style.transform = '';
    if (glow) glow.style.background = 'transparent';
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="service-card"
    >
      {/* Spotlight layer */}
      <div ref={glowRef} className="service-card__glow" aria-hidden="true" />

      {/* Top accent line — grows on hover via CSS */}
      <div className="service-card__topline" aria-hidden="true" />

      {/* Tier */}
      <div className="label service-card__tier">{srv.tier}</div>

      {/* Title */}
      <h3 className="service-card__title">{srv.title}</h3>

      {/* Subtitle */}
      <p className="service-card__sub">{srv.subName}</p>

      {/* Price */}
      <div className="service-card__price">{srv.price}</div>

      {/* Duration */}
      <div className="service-card__duration">
        <Clock size={11} />
        <span className="label">{srv.duration}</span>
      </div>

      {/* Divider */}
      <div className="service-card__divider" />

      {/* Features */}
      <ul className="service-card__features">
        {srv.features.map((feat, idx) => (
          <li key={idx} className="service-card__feature-item">
            <Check size={13} strokeWidth={2.5} className="service-card__check" />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#planner" className="service-card__cta">
        <span className="service-card__cta-text">Pilih Paket</span>
        <ArrowRight size={13} className="service-card__cta-arrow" />
      </a>
    </div>
  );
};

/* ── Services section ────────────────────────────────────────────────────── */
const Services = () => {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-grid">

        <header className="col-full section-header" data-reveal>
          <span className="label">01</span>
          <hr className="section-rule" />
          <span className="label">Paket Layanan</span>
        </header>

        <div className="col-left-7" style={{ marginBottom: 'var(--s12)' }}>
          <h2 className="headline" data-reveal>
            Investasi &amp; Layanan
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)' }}>
              yang transparan.
            </span>
          </h2>
          <p className="body" style={{ marginTop: 'var(--s4)' }} data-reveal>
            Setiap paket dirancang khusus untuk berbagai kebutuhan digital — dari usaha rintisan hingga perusahaan berkembang.
          </p>
        </div>

        <div
          className="col-full grid"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--s4)' }}
          data-reveal
        >
          {servicesList.map((srv, i) => (
            <ServiceCard key={i} srv={srv} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
