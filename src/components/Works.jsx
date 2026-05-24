import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = ['Semua', 'Web App', 'Landing Page', 'Company Profile', 'Undangan'];

const projects = [
  {
    id: 1,
    title: "Nova Dashboard",
    category: "Antarmuka Web App",
    categoryKey: "Web App",
    year: "2026",
    techs: ["React", "Chart.js", "GSAP"],
    gradient: "linear-gradient(135deg, #0d2818 0%, #1a4d2e 100%)"
  },
  {
    id: 2,
    title: "Aura Aesthetics",
    category: "Landing Page Studio Kecantikan",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["HTML", "CSS", "GSAP"],
    gradient: "linear-gradient(135deg, #1a1226 0%, #3d2459 100%)"
  },
  {
    id: 3,
    title: "B&W Wedding",
    category: "Undangan Pernikahan Digital",
    categoryKey: "Undangan",
    year: "2026",
    techs: ["Next.js", "Tailwind", "Lenis"],
    gradient: "linear-gradient(135deg, #111827 0%, #1e2d40 100%)"
  },
  {
    id: 4,
    title: "Nexus Corp",
    category: "Website Company Profile",
    categoryKey: "Company Profile",
    year: "2026",
    techs: ["React", "CSS Grid", "EmailJS"],
    gradient: "linear-gradient(135deg, #0c1929 0%, #162840 100%)"
  }
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filtered = activeFilter === 'Semua'
    ? projects
    : projects.filter(p => p.categoryKey === activeFilter);

  return (
    <section id="works" className="section">
      <div className="container-grid">

        {/* Editorial Header */}
        <header className="col-full section-header" data-reveal>
          <span className="label">02</span>
          <hr className="section-rule" />
          <span className="label">Karya Unggulan</span>
        </header>

        {/* Title + Filter row */}
        <div className="col-full flex flex-wrap justify-between items-end gap-6 mb-12" data-reveal>
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

          {/* Filter Pills */}
          <div
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
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

        {/* Project Grid */}
        <div className="col-full grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal>
          {filtered.map(proj => (
            <div key={proj.id} className="group">

              {/* Thumbnail */}
              <div
                className="relative overflow-hidden mb-5"
                style={{
                  aspectRatio: '16/10',
                  borderRadius: '10px',
                  background: proj.gradient,
                  border: '1px solid var(--border)',
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                >
                  <span
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      padding: '0.6em 1.5em',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.05)',
                      transform: 'translateY(8px)',
                      transition: 'transform 0.4s var(--ease-out-expo)',
                    }}
                  >
                    Lihat Proyek <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {proj.category}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="label">{proj.year}</span>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {proj.techs.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.05em',
                          padding: '0.3em 0.7em',
                          borderRadius: '4px',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all */}
        <div className="col-full mt-12 flex justify-center" data-reveal>
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
