import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Works.css';

const categories = ['All', 'Web App', 'Landing Page', 'Company Profile', 'Digital Invitation'];

const projects = [
  {
    id: 1,
    title: "Nova Dashboard",
    category: "Web Application UI",
    categoryKey: "Web App",
    year: "2026",
    techs: ["React", "Chart.js", "Framer Motion"],
    imgTheme: "linear-gradient(135deg, #093028 0%, #237a57 100%)"
  },
  {
    id: 2,
    title: "Aura Aesthetics",
    category: "Landing Page Studio",
    categoryKey: "Landing Page",
    year: "2025",
    techs: ["HTML", "Vanilla CSS", "GSAP"],
    imgTheme: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)"
  },
  {
    id: 3,
    title: "B&W Wedding",
    category: "Digital Wedding Invitation",
    categoryKey: "Digital Invitation",
    year: "2026",
    techs: ["Next.js", "Tailwind", "Vimeo API"],
    imgTheme: "linear-gradient(135deg, #141e30 0%, #243b55 100%)"
  },
  {
    id: 4,
    title: "Nexus Corp",
    category: "Company Profile Website",
    categoryKey: "Company Profile",
    year: "2026",
    techs: ["React", "CSS Grid", "EmailJS"],
    imgTheme: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
  }
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  return (
    <section id="works" className="works-section">
      <div className="container">
        
        <div className="works-header-flex">
          <motion.div 
            className="section-head-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label label--accent">[ Featured Works ]</span>
            <h2 className="section-title">Selected <span className="text-tech">Projects</span></h2>
          </motion.div>

          {/* Filtering Tabs */}
          <motion.div 
            className="filter-tabs"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilterBg" 
                    className="active-filter-bg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="works-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="work-card pixel-corners" 
                key={proj.id}
              >
                <div className="work-image-container" style={{ background: proj.imgTheme }}>
                  {/* Decorative mesh background inside project container */}
                  <div className="project-grid-mesh"></div>
                  
                  <motion.div 
                    className="work-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="view-text"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Lihat Proyek <ArrowUpRight size={16}/>
                    </motion.span>
                  </motion.div>
                </div>
                
                <div className="work-meta">
                  <div className="meta-top">
                    <h3 className="work-title">{proj.title}</h3>
                    <span className="work-year">{proj.year}</span>
                  </div>
                  <div className="meta-bottom">
                    <span className="work-category">{proj.category}</span>
                    <div className="tech-tags">
                      {proj.techs.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="works-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="btn btn-ghost pixel-corners"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lebih Banyak Portofolio
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Works;
