import { useRef, useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Check, Clock, ArrowRight, X, ChevronRight } from 'lucide-react';

const servicesList = [
{
  tier: "01",
  title: "Undangan Digital",
  price: "Mulai dari Rp 99rb",
  duration: "2–3 Hari",
  features: [
    "1 halaman desain premium",
    "RSVP 1-Klik ke WhatsApp",
    "Buku tamu & ucapan digital",
    "Desain responsif",
    "Hosting & SSL gratis (aktif 1 tahun)"
  ],
  detail: {
    includes: [
      { label: "Desain", items: [
        "Kustomisasi warna & font sesuai tema acara",
        "Foto & video galeri",
        "Countdown timer"
      ]},
      { label: "Fungsionalitas", items: [
        "Form RSVP → 1-klik kirim ke WhatsApp",
        "Buku tamu digital (ucapan & doa)",
        "Peta lokasi Google Maps",
        "Tombol simpan ke kalender",
      ]},
      { label: "Layanan", items: [
        "2x revisi desain",
        "Emergency edit gratis sampai H-3",
        "Domain custom .my.id"
      ]}
    ],
    note: "Cocok untuk pernikahan, ulang tahun, wisuda, reuni, dan acara spesial lainnya. *Hosting selamanya selama layanan Kabin Code tersedia."
  }
},
{
  tier: "02",
  title: "Landing Page",
  subName: "Bisnis & Personal Branding",
  price: "Mulai Rp 1.099.000",
  duration: "3–5 Hari",
  features: [
    "4–6 seksi konten terstruktur",
    "CMS — edit konten sendiri",
    "Domain .com (1 tahun)",
    "Hosting + SSL (1 tahun)",
    "SEO dasar & Google Analytics",
  ],
  detail: {
    description:
      "Halaman pemasaran satu tujuan yang dirancang untuk mengubah pengunjung menjadi pelanggan. Dilengkapi CMS agar Anda bisa memperbarui konten kapan saja tanpa perlu bantuan developer.",
    includes: [
      {
        label: "Struktur Halaman",
        items: [
          "4–6 seksi konten terstruktur",
          "Hero section yang menarik perhatian",
          "Seksi layanan / produk",
          "Testimoni / social proof",
          "Seksi FAQ",
          "Call-to-Action yang jelas",
        ],
      },
      {
        label: "Integrasi",
        items: [
          "Tombol WhatsApp float",
          "Formulir kontak",
          "Google Analytics",
          "Facebook Pixel (opsional)",
          "Instagram feed (opsional)",
        ],
      },
      {
        label: "Teknis & Infrastruktur",
        items: [
          "Domain .com (1 tahun, atas nama klien)",
          "Hosting NVMe SSD (1 tahun)",
          "SSL gratis (HTTPS)",
          "Loading < 3 detik",
          "Mobile responsive",
          "CMS — kelola konten sendiri tanpa coding",
        ],
      },
      {
        label: "Layanan & Garansi",
        items: [
          "2x revisi konten & desain",
          "SEO dasar (meta title, deskripsi, sitemap)",
          "Dukungan teknis gratis 7 hari setelah live",
          "Akun hosting & domain diserahkan ke klien",
        ],
      },
    ],
    note: "Ideal untuk usaha baru, peluncuran produk, promo event, atau personal branding profesional. *Perpanjangan hosting + domain tahun berikutnya Rp 500.000/tahun.",
  },
},
{
  tier: "03",
  title: "Company Profile",
  subName: "Perusahaan & Organisasi",
  price: "Mulai Rp 1.999.000",
  duration: "5–7 Hari",
  features: [
    "5–7 halaman profesional",
    "CMS — kelola konten sendiri",
    "Domain .com + Hosting (1 tahun)",
    "SEO penuh & Google Analytics",
    "3x revisi + dukungan 7 hari",
  ],
  detail: {
    includes: [
      {
        label: "Halaman Utama",
        items: [
          "Beranda (Home)",
          "Tentang Kami (About)",
          "Layanan / Produk",
          "Portofolio / Proyek",
          "Tim & Struktur",
          "Kontak lengkap",
        ],
      },
      {
        label: "Fitur & Integrasi",
        items: [
          "Formulir kontak + notifikasi email",
          "Embed Google Maps",
          "Google Analytics terintegrasi",
          "SEO penuh (meta, sitemap, semua halaman)",
          "CMS — admin panel untuk kelola konten",
        ],
      },
      {
        label: "Teknis & Infrastruktur",
        items: [
          "Domain .com (1 tahun, atas nama klien)",
          "Hosting NVMe SSD (1 tahun)",
          "SSL gratis (HTTPS)",
          "Loading < 3 detik",
          "Mobile responsive",
        ],
      },
      {
        label: "Layanan & Garansi",
        items: [
          "3x revisi konten & desain",
          "Dukungan teknis gratis 7 hari setelah live",
          "Panduan pengelolaan konten",
          "Akun hosting & domain diserahkan ke klien",
        ],
      },
    ],
    note: "Direkomendasikan untuk perusahaan, CV, PT, yayasan, organisasi, dan lembaga yang ingin tampil profesional.",
  },
},
{
  tier: "04",
  title: "Web Portofolio",
  subName: "Individu & Kreator",
  price: "Mulai Rp 350.000",
  duration: "2–3 Hari",
  features: [
    "Single page scroll",
    "Grid karya + modal preview",
    "Domain .my.id (1 tahun)",
    "SEO dasar & mobile-first",
    "2x revisi desain",
  ],
  detail: {
    description:
      "Etalase digital satu halaman yang menampilkan karya terbaik Anda dengan tampilan bersih dan berkesan. Dirancang agar recruiter dan klien langsung menemukan semua informasi tanpa perlu berpindah halaman.",
    includes: [
      {
        label: "Struktur Halaman",
        items: [
          "Hero section — nama, tagline, foto/avatar",
          "Grid galeri karya dengan modal preview",
          "Filter kategori karya",
          "Tentang saya — bio singkat & keahlian",
          "Kontak & tautan media sosial",
        ],
      },
      {
        label: "Galeri & Media",
        items: [
          "Grid responsif (2–3 kolom)",
          "Modal lightbox saat karya diklik",
          "Embed video YouTube/Vimeo (opsional)",
          "Animasi scroll ringan",
        ],
      },
      {
        label: "Teknis & Infrastruktur",
        items: [
          "Domain .my.id (1 tahun, atas nama klien)",
          "Hosting gratis (cloud infrastructure)",
          "SSL gratis (HTTPS)",
          "Loading < 3 detik",
          "Mobile-first design",
        ],
      },
      {
        label: "Layanan",
        items: [
          "SEO dasar (meta title, deskripsi)",
          "2x revisi desain",
          "Dukungan teknis 7 hari setelah live",
        ],
      },
    ],
    note:
      "Cocok untuk fotografer, desainer grafis, ilustrator, videografer, developer, dan profesional kreatif.",
  },
},
  {
    tier: "05",
    title: "Pemeliharaan",
    subName: "Semua Klien Aktif",
    price: "Rp 150rb – 350rb",
    duration: "Ongoing",
    features: ["Pembaruan konten", "Backup rutin", "Laporan bulanan", "Perbaikan bug", "Dukungan prioritas"],
    detail: {
      description: "Layanan perawatan website bulanan agar website Anda selalu dalam kondisi prima, aman, dan up-to-date tanpa perlu repot mengurus sendiri.",
      includes: [
        { label: "Paket Basic (Rp 150rb/bln)", items: ["Pembaruan konten 2x per bulan", "Backup data mingguan", "Monitoring uptime", "Laporan kondisi website bulanan"] },
        { label: "Paket Full (Rp 350rb/bln)", items: ["Pembaruan konten tidak terbatas", "Backup data harian", "Perbaikan bug & error minor", "Update plugin / tema", "Laporan performa & analitik bulanan", "Dukungan prioritas via WhatsApp"] },
        { label: "Garansi Layanan", items: ["Respons dalam 24 jam kerja", "Tidak ada biaya tambahan untuk perbaikan rutin", "Konsultasi gratis 1x per bulan"] },
      ],
      note: "Tersedia untuk semua website yang dikerjakan oleh Kabin Code maupun website dari vendor lain.",
    }
  }
];

/* ── Modal Detail ─────────────────────────────────────────────── */
const ServiceModal = ({ srv, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const modal = (
    /* Backdrop — fixed full-screen, di luar flow section */
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'rgba(30, 19, 10, 0.6)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Panel */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-surface)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '680px',
          /* Tinggi maksimal 90% viewport, sisanya scroll */
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(30, 19, 10, 0.25)',
          overflow: 'hidden', /* panel sendiri tidak overflow */
        }}
      >
        {/* ── Sticky Header ── */}
        <div style={{
          flexShrink: 0, /* tidak ikut scroll */
          padding: '24px 32px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          background: 'var(--bg-surface)',
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--accent)', display: 'block', marginBottom: '8px',
            }}>
              Paket {srv.tier}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '1.4rem', letterSpacing: '-0.02em',
              color: 'var(--text-primary)', marginBottom: '4px',
            }}>
              {srv.title}
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{srv.subName}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-muted)',
              cursor: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* ── Scrollable Body ── */}
        <div style={{
          flex: 1,           /* ambil sisa tinggi */
          overflowY: 'auto', /* scroll hanya di sini */
          padding: '24px 32px',
          /* Scrollbar tipis agar rapi */
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--border) transparent',
        }}>
          {/* Harga + Durasi */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <div style={{
              background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
              borderRadius: '8px', padding: '12px 16px',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Harga</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '-0.02em' }}>{srv.price}</span>
            </div>
            <div style={{
              background: 'var(--bg-secondary)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '12px 16px',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Estimasi Waktu</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                <Clock size={13} style={{ color: 'var(--accent-warm)' }} /> {srv.duration}
              </span>
            </div>
          </div>

          {/* Deskripsi */}
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px' }}>
            {srv.detail.description}
          </p>

          {/* Kelompok detail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            {srv.detail.includes.map((group, gi) => (
              <div key={gi}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    {group.label}
                  </span>
                </div>
                <ul style={{
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '8px',
                  paddingLeft: '22px',
                }}>
                  {group.items.map((item, ii) => (
                    <li key={ii} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '8px',
                      fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45,
                    }}>
                      <Check size={12} strokeWidth={2.5} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Catatan */}
          {srv.detail.note && (
            <div style={{
              padding: '16px',
              background: 'var(--accent-light)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: '0 8px 8px 0',
              fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6,
              marginBottom: '32px',
            }}>
              <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '4px', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>
                Cocok untuk
              </strong>
              {srv.detail.note}
            </div>
          )}

          {/* CTA */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#planner"
              onClick={onClose}
              className="btn--primary"
              style={{ flex: 1, justifyContent: 'center', minWidth: '160px' }}
            >
              Pilih Paket Ini <ArrowRight size={14} />
            </a>
            <button
              onClick={onClose}
              className="btn--ghost"
              style={{ padding: '12px 24px' }}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /* Portal ke document.body — bebas dari context CSS apapun */
  return createPortal(modal, document.body);
};

/* ── ServiceCard ──────────────────────────────────────────────── */
const ServiceCard = ({ srv, onDetail }) => {
  const cardRef  = useRef(null);
  const frameRef = useRef(null);

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (cardRef.current) cardRef.current.style.transform = '';
  }, []);

  return (
    <div ref={cardRef} onMouseLeave={onMouseLeave} className="service-card">
      <div className="service-card__topline" aria-hidden="true" />

      <div className="label service-card__tier">{srv.tier}</div>
      <h3 className="service-card__title">{srv.title}</h3>
      <p className="service-card__sub">{srv.subName}</p>
      <div className="service-card__price">{srv.price}</div>

      <div className="service-card__duration">
        <Clock size={11} style={{ color: 'var(--text-muted)' }} />
        <span className="label">{srv.duration}</span>
      </div>

      <div className="service-card__divider" />

      <ul className="service-card__features">
        {srv.features.map((feat, idx) => (
          <li key={idx} className="service-card__feature-item">
            <Check size={13} strokeWidth={2.5} className="service-card__check" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Dua tombol */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s2)', marginTop: 'auto' }}>
        {/* Lihat Detail */}
        <button
          onClick={() => onDetail(srv)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'var(--s2)',
            padding: 'var(--s3) var(--s6)',
            background: 'transparent',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem', fontWeight: 500,
            width: '100%',
            transition: 'border-color 0.2s, color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.background = 'var(--accent-dim)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          Lihat Detail
        </button>

        {/* Pilih Paket */}
        <a href="#planner" className="service-card__cta">
          <span className="service-card__cta-text">Pilih Paket</span>
          <ArrowRight size={13} className="service-card__cta-arrow" />
        </a>
      </div>
    </div>
  );
};

/* ── Services section ─────────────────────────────────────────── */
const Services = () => {
  const [activeService, setActiveService] = useState(null);

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
            Apa yang kami
            <br />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400, fontStyle: 'italic',
              color: 'var(--accent)',
            }}>
              bangun untuk Anda.
            </span>
          </h2>
          <p className="body" style={{ marginTop: 'var(--s4)' }} data-reveal>
            Setiap proyek adalah kabin baru — kami membangunnya dari fondasi yang kuat, dengan harga yang selalu jelas sejak awal.
          </p>
        </div>

        <div
          className="col-full grid"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--s4)' }}
          data-reveal
        >
          {servicesList.map((srv, i) => (
            <ServiceCard key={i} srv={srv} onDetail={setActiveService} />
          ))}
        </div>

      </div>

      {/* Modal dirender via Portal ke document.body — di luar section */}
      {activeService && (
        <ServiceModal srv={activeService} onClose={() => setActiveService(null)} />
      )}
    </section>
  );
};

export default Services;
