import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Works.css';

const projects = [
  {
    id: 1,
    title: "Nova Dashboard",
    category: "Web Application UI",
    year: "2026",
    imgTheme: "linear-gradient(135deg, #093028, #237a57)"
  },
  {
    id: 2,
    title: "Aura Aesthetics",
    category: "Landing Page",
    year: "2025",
    imgTheme: "linear-gradient(135deg, #111, #333)"
  },
  {
    id: 3,
    title: "B&W Wedding",
    category: "Undangan Digital Premium",
    year: "2026",
    imgTheme: "linear-gradient(135deg, #16222a, #3a6073)"
  },
  {
    id: 4,
    title: "Nexus Corp",
    category: "Company Profile",
    year: "2026",
    imgTheme: "linear-gradient(135deg, #0f2027, #203a43, #2daaff)"
  }
];

const Works = () => {
  return (
    <section id="works" className="works-section">
      <div className="container">
        
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

        <div className="works-grid">
          {projects.map((proj, index) => (
            <motion.div 
              className="work-card" 
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.2 }}
            >
              <div className="work-image-container" style={{ background: proj.imgTheme }}>
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
                <span className="work-category">{proj.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="works-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="btn btn-ghost"
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
