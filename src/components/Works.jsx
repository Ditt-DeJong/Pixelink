import { useState, useMemo, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = ['Semua', 'Web App', 'Landing Page', 'Company Profile', 'Undangan'];

const projects = [
  {
    id: 1,
    title: "Kolaborasi Ardata",
    category: "Landing Page", subcategory: "Colaboration Platform",
    categoryKey: "Landing Page", year: "2025",
    techs: ["WordPress", "Elementor", "PHP"],
    thumbnail: "/images/projects/porto10.png",
    link: "https://kolaborasi.ardata.co.id/"
  },
  {
    id: 2,
    title: "Optik Pandanaran",
    category: "Company Profile", subcategory: "Kesehatan & Retail",
    categoryKey: "Company Profile", year: "2025",
    techs: ["WordPress", "PHP", "Elementor"],
    thumbnail: "/images/projects/porto11.png",
    link: "https://optikpandanaran.com/"
  },
  {
    id: 3,
    title: "Cogmap Brainfit",
    category: "Landing Page", subcategory: "Health & Parenting",
    categoryKey: "Landing Page", year: "2025",
    techs: ["HTML", "CSS", "Vanilla JS"],
    thumbnail: "/images/projects/porto9.png",
    link: "https://cogmap.brainfitonline.co.id/"
  },
  {
    id: 4,
    title: "Widya Medika",
    category: "Landing Page", subcategory: "Education (Bimbel)",
    categoryKey: "Landing Page", year: "2025",
    techs: ["WordPress", "CSS", "JavaScript"],
    thumbnail: "/images/projects/porto8.png",
    link: "https://widyamedika.co.id/"
  },
  {
    id: 5,
    title: "Rumah Binlat Official",
    category: "Landing Page", subcategory: "Education (Try-out)",
    categoryKey: "Landing Page", year: "2025",
    techs: ["WordPress", "Elementor", "PHP"],
    thumbnail: "/images/projects/porto12.png",
    link: "https://rumahbinlatofficial.com/"
  },
  {
    id: 6,
    title: "KTA Perwakab Batam",
    category: "Company Profile", subcategory: "Membership System",
    categoryKey: "Company Profile", year: "2025",
    techs: ["Vue.js", "PHP", "MySQL"],
    thumbnail: "/images/projects/porto7.png",
    link: "https://kta.perwakabbatam.com/login"
  },
  {
    id: 7,
    title: "Haven Indonesia",
    category: "Landing Page", subcategory: "Sistem Penyewaan Kos",
    categoryKey: "Landing Page", year: "2025",
    techs: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/porto14.png",
    link: "https://haven.co.id/"
  },
  {
    id: 8,
    title: "AGPAII Digital",
    category: "Company Profile", subcategory: "Manajemen Keanggotaan",
    categoryKey: "Company Profile", year: "2025",
    techs: ["React", "Node.js", "Next.js"],
    thumbnail: "/images/projects/porto6.png",
    link: "https://web.agpaiidigital.org/getting-started"
  },
  {
    id: 9,
    title: "Sertifikasi Kadin Jateng",
    category: "Landing Page", subcategory: "Layanan Sertifikasi",
    categoryKey: "Landing Page", year: "2025",
    techs: ["Next.js", "React", "Tailwind"],
    thumbnail: "/images/projects/porto5.png",
    link: "https://sertifikasi.kadinjateng.com/"
  },
  {
    id: 10,
    title: "GAMA College",
    category: "Landing Page", subcategory: "Education (Bimbel)",
    categoryKey: "Landing Page", year: "2025",
    techs: ["WordPress", "Elementor", "PHP"],
    thumbnail: "/images/projects/porto13.png",
    link: "https://gama-college.com/"
  },
  {
    id: 11,
    title: "Neura Web Apps",
    category: "Landing Page", subcategory: "Konsultasi Kesehatan",
    categoryKey: "Landing Page", year: "2025",
    techs: ["Next.js", "Tailwind", "React"],
    thumbnail: "/images/projects/porto2.png",
    link: "https://neura-webapps.vercel.app"
  },
  {
    id: 12,
    title: "Tekodeko",
    category: "Landing Page", subcategory: "F&B Cafe",
    categoryKey: "Landing Page", year: "2025",
    techs: ["Next.js", "Tailwind", "React"],
    thumbnail: "/images/projects/porto4.png",
    link: "https://tekodeko.vercel.app"
  },
  {
    id: 13,
    title: "Portfolio Website",
    category: "Web App", subcategory: "Personal Branding",
    categoryKey: "Web App", year: "2025",
    techs: ["React", "GSAP", "Three.js"],
    thumbnail: "/images/projects/porto1.png",
    link: "https://site-checker-five.vercel.app"
  },
  {
    id: 14,
    title: "Sitecheck",
    category: "Landing Page", subcategory: "SaaS Developer Tools",
    categoryKey: "Landing Page", year: "2025",
    techs: ["Next.js", "Tailwind", "React"],
    thumbnail: "/images/projects/porto3.png",
    link: "https://magang.ardata.co.id"
  }
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filtered = useMemo(() =>
    activeFilter === 'Semua' ? projects : projects.filter(p => p.categoryKey === activeFilter),
    [activeFilter]
  );

  const handleFilter = useCallback((cat) => setActiveFilter(cat), []);

  return (
    <section id="works" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-grid">

        <header className="col-full section-header" data-reveal>
          <span className="label">02</span>
          <hr className="section-rule" />
          <span className="label">Karya Unggulan</span>
        </header>

        {/* Title + Filter */}
        <div className="col-full flex flex-wrap justify-between items-end"
          style={{ gap: 'var(--s6)', marginBottom: 'var(--s12)' }} data-reveal>
          <h2 className="headline">
            Proyek{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
              terpilih.
            </span>
          </h2>

          <div className="flex flex-wrap" style={{ gap: 'var(--s2)' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => handleFilter(cat)} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 500,
                padding: 'var(--s2) var(--s4)',
                borderRadius: '100px',
                border: '1px solid',
                transition: 'all 0.2s',
                borderColor: activeFilter === cat ? 'var(--accent)' : 'var(--border)',
                background:  activeFilter === cat ? 'var(--accent)' : 'transparent',
                color:       activeFilter === cat ? '#ffffff' : 'var(--text-secondary)',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="col-full grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--s8)' }} data-reveal>
          {filtered.map(proj => (
            <a key={proj.id} href={proj.link} target="_blank" rel="noopener noreferrer"
              className="group" style={{ textDecoration: 'none', display: 'block' }}>

              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{
                aspectRatio: '16/10',
                borderRadius: '12px',
                background: '#f0f0ee',
                border: '1px solid var(--border)',
                marginBottom: 'var(--s4)',
                transition: 'box-shadow 0.3s ease',
              }}>
                <img
                  src={proj.thumbnail} alt={proj.title}
                  loading="lazy" decoding="async"
                  width="800" height="500"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s var(--ease-out-expo)',
                  }}
                  className="group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'rgba(29,52,97,0.65)', backdropFilter: 'blur(4px)' }}>
                  <span className="flex items-center gap-2" style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem', fontWeight: 600,
                    color: '#ffffff',
                    padding: 'var(--s2) var(--s5)',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.1)',
                  }}>
                    Lihat Proyek <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex justify-between items-start" style={{ gap: 'var(--s2)' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem',
                    color: 'var(--text-primary)', letterSpacing: '-0.02em',
                    marginBottom: 'var(--s1)',
                    transition: 'color 0.2s',
                  }}
                    className="group-hover:text-[var(--accent)]"
                  >
                    {proj.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    display: 'flex', alignItems: 'center', gap: 'var(--s2)',
                    flexWrap: 'wrap',
                  }}>
                    {proj.category}
                    {proj.subcategory && (
                      <>
                        <span style={{ opacity: 0.4 }}>·</span>
                        <span style={{ color: 'var(--accent)', opacity: 0.8 }}>{proj.subcategory}</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-col items-end" style={{ gap: 'var(--s2)', flexShrink: 0 }}>
                  <span className="label">{proj.year}</span>
                  <div className="flex flex-wrap justify-end" style={{ gap: 'var(--s1)' }}>
                    {proj.techs.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                        padding: 'var(--s1) var(--s2)',
                        borderRadius: '4px',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                        background: 'var(--bg-secondary)',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="col-full flex justify-center" style={{ marginTop: 'var(--s12)' }} data-reveal>
          <a href="#" className="btn--ghost" style={{ fontSize: '0.82rem' }}>
            Lihat Semua Portofolio <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Works;
