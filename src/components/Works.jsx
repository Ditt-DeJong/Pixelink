import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Semua', 'Web App', 'Landing Page', 'Company Profile', 'Undangan Digital'];

const projects = [
  {
    id: 1,
    title: "Nova Dashboard",
    category: "Antarmuka Aplikasi Web",
    categoryKey: "Web App",
    year: "2026",
    techs: ["React", "Chart.js", "Framer Motion"],
    imgTheme: "linear-gradient(135deg, #093028 0%, #237a57 100%)"
  },
  {
    id: 2,
    title: "Aura Aesthetics",
    category: "Landing Page Studio Kecantikan",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["HTML", "Vanilla CSS", "GSAP"],
    imgTheme: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)"
  },
  {
    id: 3,
    title: "B&W Wedding",
    category: "Undangan Pernikahan Digital",
    categoryKey: "Undangan Digital",
    year: "2026",
    techs: ["Next.js", "Tailwind", "Vimeo API"],
    imgTheme: "linear-gradient(135deg, #141e30 0%, #243b55 100%)"
  },
  {
    id: 4,
    title: "Nexus Corp",
    category: "Website Company Profile",
    categoryKey: "Company Profile",
    year: "2026",
    techs: ["React", "CSS Grid", "EmailJS"],
    imgTheme: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
  }
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredProjects = activeFilter === 'Semua'
    ? projects
    : projects.filter(p => p.categoryKey === activeFilter);

  return (
    <section id="works" className="py-32 relative">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* Header */}
        <div className="flex justify-between items-end mb-20 flex-wrap gap-8">
          <motion.div
            className="flex flex-col items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-accent)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              [ Karya Unggulan ]
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Proyek <span className="text-tech">Pilihan</span>
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex bg-white/[0.02] border border-[var(--clr-border)] p-1.5 rounded-full backdrop-blur-xl gap-1 flex-wrap"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-[0.72rem] tracking-[0.05em] border-none transition-colors duration-300 z-[1]
                  ${activeFilter === cat ? 'text-[var(--bg-deep)] font-bold' : 'bg-transparent text-[var(--clr-text-muted)] hover:text-[var(--clr-text)]'}`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="active-filter-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.4 }}
                className="pixel-corners flex flex-col gap-6 bg-transparent group"
              >
                {/* Image */}
                <div
                  className="w-full aspect-[4/3] overflow-hidden rounded-md relative border border-[var(--clr-border)] transition-all duration-600 group-hover:scale-[0.98] group-hover:border-[var(--clr-accent)] group-hover:shadow-[0_10px_30px_rgba(0,242,254,0.12)]"
                  style={{ background: proj.imgTheme }}
                >
                  <div className="project-grid-mesh group-hover:opacity-[0.05]" />

                  <motion.div
                    className="absolute inset-0 bg-[rgba(3,7,18,0.4)] flex items-center justify-center z-[2]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="flex items-center gap-2 text-[0.8rem] uppercase text-[var(--clr-text)] bg-white/[0.08] backdrop-blur-xl px-7 py-3 rounded-full border border-white/[0.15] translate-y-8 scale-95 transition-all duration-500"
                      style={{ fontFamily: 'var(--font-mono)' }}
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Lihat Proyek <ArrowUpRight size={16} />
                    </motion.span>
                  </motion.div>
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <h3
                      className="text-[1.75rem] uppercase font-extrabold text-[var(--clr-text)]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {proj.title}
                    </h3>
                    <span
                      className="text-[0.85rem] text-[var(--clr-accent)]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {proj.year}
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <span className="text-[0.85rem] text-[var(--clr-text-muted)]">{proj.category}</span>
                    <div className="flex gap-2 flex-wrap">
                      {proj.techs.map(t => (
                        <span
                          key={t}
                          className="text-[0.65rem] text-[var(--clr-accent)] bg-[var(--clr-accent-dim)] border border-[rgba(0,242,254,0.15)] px-2.5 py-1 rounded-[4px]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#"
            className="pixel-corners inline-flex items-center gap-2 bg-transparent text-[var(--clr-text)] px-6 py-3 text-[0.78rem] tracking-[0.08em] uppercase rounded-[4px] no-underline border border-[var(--clr-border)] transition-all duration-300 hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)]"
            style={{ fontFamily: 'var(--font-mono)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Semua Portofolio
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Works;
