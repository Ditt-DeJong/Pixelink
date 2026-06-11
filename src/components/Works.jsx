import { useState, useMemo, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = ['Semua', 'Web App', 'Landing Page', 'Company Profile', 'Undangan'];

const projects = [
  {
    id: 1,
    title: "Kolaborasi Ardata",
    category: "Company Profile", subcategory: "Teknologi",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["React", "API", "Dashboard"],
    gradient: "linear-gradient(135deg, #0d2818 0%, #1a4d2e 100%)",
    thumbnail: "/images/projects/porto10.png",
    link: "https://kolaborasi.ardata.co.id/"
  },
  {
    id: 2,
    title: "Optik Pandanaran",
    category: "Company Profile", subcategory: "Kesehatan & Optik",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["WordPress", "PHP", "MySQL"],
    gradient: "linear-gradient(135deg, #1a1226 0%, #3d2459 100%)",
    thumbnail: "/images/projects/porto11.png",
    link: "https://optikpandanaran.com/"
  },
  {
    id: 3,
    title: "Cogmap Brainfit",
    category: "Company Profile", subcategory: "Bimbel Anak",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["React", "Chart.js", "API"],
    gradient: "linear-gradient(135deg, #111827 0%, #1e2d40 100%)",
    thumbnail: "/images/projects/porto9.png",
    link: "https://cogmap.brainfitonline.co.id/"
  },
  {
    id: 4,
    title: "Widya Medika",
    category: "Company Profile", subcategory: "Alat Kesehatan",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["WordPress", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #0c1929 0%, #162840 100%)",
    thumbnail: "/images/projects/porto8.png",
    link: "https://widyamedika.co.id/"
  },
  {
    id: 5,
    title: "Rumah Binlat Official",
    category: "Company Profile", subcategory: "Pendidikan",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["WordPress", "Elementor", "WooCommerce"],
    gradient: "linear-gradient(135deg, #1a0f2e 0%, #3d1f5c 100%)",
    thumbnail: "/images/projects/porto12.png",
    link: "https://rumahbinlatofficial.com/"
  },
  {
    id: 6,
    title: "KTA Perwakab Batam",
    category: "Company Profile", subcategory: "Manajemen Keanggotaan",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["PHP", "Laravel", "MySQL"],
    gradient: "linear-gradient(135deg, #0f1a1a 0%, #1e3d3d 100%)",
    thumbnail: "/images/projects/porto7.png",
    link: "https://kta.perwakabbatam.com/login"
  },
  {
    id: 7,
    title: "Haven Indonesia",
    category: "Landing Page", subcategory: "Sistem Penyewaan Kos",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #1a1a0f 0%, #3d3d1e 100%)",
    thumbnail: "/images/projects/porto14.png",
    link: "https://haven.co.id/"
  },
  {
    id: 8,
    title: "AGPAII Digital",
    category: "Company Profile", subcategory: "Manajemen Keanggotaan",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #0f1a29 0%, #1e3d5c 100%)",
    thumbnail: "/images/projects/porto6.png",
    link: "https://web.agpaiidigital.org/getting-started"
  },
  {
    id: 9,
    title: "Sertifikasi Kadin Jateng",
    category: "Landing Page", subcategory: "Sertifikasi",
    categoryKey: "Web App",
    year: "2025",
    techs: ["Laravel", "Bootstrap", "MySQL"],
    gradient: "linear-gradient(135deg, #1a0f0f 0%, #3d1e1e 100%)",
    thumbnail: "/images/projects/porto5.png",
    link: "https://sertifikasi.kadinjateng.com/"
  },
  {
    id: 10,
    title: "GAMA College",
    category: "Company Profile", subcategory: "Pendidikan",
    categoryKey: "Company Profile",
    year: "2025",
    techs: ["WordPress", "Custom Theme", "SEO"],
    gradient: "linear-gradient(135deg, #0f291a 0%, #1e5c3d 100%)",
    thumbnail: "/images/projects/porto13.png",
    link: "https://gama-college.com/"
  },
  {
    id: 11,
    title: "Neura Web Apps",
    category: "Web App", subcategory: "Konsultasi Kesehatan",
    categoryKey: "Web App",
    year: "2025",
    techs: ["React", "Vercel", "API"],
    gradient: "linear-gradient(135deg, #1a0f29 0%, #3d1e5c 100%)",
    thumbnail: "/images/projects/porto2.png",
    link: "https://neura-webapps.vercel.app"
  },
  {
    id: 12,
    title: "Tekodeko",
    category: "Landing Page", subcategory: "",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["Next.js", "Tailwind", "Vercel"],
    gradient: "linear-gradient(135deg, #0f1a29 0%, #1e3d5c 100%)",
    thumbnail: "/images/projects/porto4.png",
    link: "https://tekodeko.vercel.app"
  },
  {
    id: 13,
    title: "Portfolio Website",
    category: "Landing Page", subcategory: "Personal Branding",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["React", "GSAP", "Vercel"],
    gradient: "linear-gradient(135deg, #1a1a0f 0%, #3d3d1e 100%)",
    thumbnail: "/images/projects/porto1.png",
    link: "https://site-checker-five.vercel.app"
  },
  {
    id: 14,
    title: "Sitecheck",
    category: "Web App", subcategory: "Developer Tools",
    categoryKey: "Web App",
    year: "2025",
    techs: ["Laravel", "MySQL", "Bootstrap"],
    gradient: "linear-gradient(135deg, #0d2818 0%, #1a4d2e 100%)",
    thumbnail: "/images/projects/porto3.png",
    link: "https://magang.ardata.co.id"
  }
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  // Memoize filter — only recomputes when activeFilter changes
  const filtered = useMemo(() =>
    activeFilter === 'Semua'
      ? projects
      : projects.filter(p => p.categoryKey === activeFilter),
    [activeFilter]
  );

  const handleFilter = useCallback((cat) => setActiveFilter(cat), []);

  return (
    <section id="works" className="section">
      <div className="container-grid">

        {/* Editorial Header */}
        <header className="col-full section-header" data-reveal>
          <span className="label">02</span>
          <hr className="section-rule" />
          <span className="label">Karya Unggulan</span>
        </header>

        {/* Title + Filter row — mb:48px, gap:24px */}
        <div className="col-full flex flex-wrap justify-between items-end" style={{ gap: 'var(--s6)', marginBottom: 'var(--s12)' }} data-reveal>
          <h2 className="headline">
            Proyek{' '}
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--accent)',
              }}
            >
              terpilih.
            </span>
          </h2>

          {/* Filter Pills — gap:8px */}
          <div className="flex flex-wrap" style={{ gap: 'var(--s2)' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.5em 1.2em',
                  borderRadius: '100px',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  borderColor: activeFilter === cat ? 'var(--accent)' : 'var(--border)',
                  background: activeFilter === cat ? 'var(--accent)' : 'transparent',
                  color: activeFilter === cat ? '#0a0a0a' : 'var(--text-muted)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid — gap:32px */}
        <div className="col-full grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--s8)' }} data-reveal>
          {filtered.map(proj => (
            <a 
              key={proj.id} 
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ textDecoration: 'none' }}
            >

              {/* Thumbnail — mb:20px */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '16/10',
                  borderRadius: '10px',
                  background: proj.gradient,
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.3s',
                  marginBottom: 'var(--s5)',
                }}
              >
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    willChange: 'opacity',
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                >
                  <span
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      padding: 'var(--s2) var(--s6)',  /* 8px 24px */
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    Lihat Proyek <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Meta — gap:8px */}
              <div className="flex justify-between items-start" style={{ gap: 'var(--s2)' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem',
                    color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--s1)',
                  }}>
                    {proj.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    display: 'flex', alignItems: 'center', gap: 'var(--s2)',
                  }}>
                    {proj.category}
                    {proj.subcategory && (
                      <>
                        <span style={{ opacity: 0.35 }}>·</span>
                        <span style={{ color: 'var(--accent)', opacity: 0.7 }}>{proj.subcategory}</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="flex flex-col items-end" style={{ gap: 'var(--s2)' }}> {/* gap:8px */}
                  <span className="label">{proj.year}</span>
                  <div className="flex flex-wrap justify-end" style={{ gap: 'var(--s1)' }}> {/* gap:4px */}
                    {proj.techs.map(t => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.05em',
                        padding: 'var(--s1) var(--s2)',  /* 4px 8px */
                        borderRadius: '4px', border: '1px solid var(--border)', color: 'var(--text-muted)',
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

        {/* See all — mt:48px */}
        <div className="col-full flex justify-center" style={{ marginTop: 'var(--s12)' }} data-reveal>
          <a
            href="#"
            className="btn--ghost"
            style={{ fontSize: '0.78rem' }}
          >
            Lihat Semua Portofolio <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Works;
