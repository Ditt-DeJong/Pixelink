import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelWaveCanvas from './PixelWaveCanvas';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-split">
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="availability-badge">
            <span className="live-dot"></span>
            <span className="label">Next-Gen Digital Studio</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-heading">
            <span className="text-outline">CREATING</span>
            <span className="text-solid">HIGH-END</span>
            <span className="text-tech text-cyan-glow">digital waves</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subheading">
            Tinggalkan kesan pertama yang legendaris. Kami merancang ekosistem web premium dan identitas digital interaktif yang mengubah audiens menjadi loyal customer. Selaras dengan estetika kelas dunia dan nilai bisnis terukur.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <motion.a 
              href="#services" 
              className="btn btn-primary pixel-corners"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Eksplorasi Paket <ArrowRight size={16} />
            </motion.a>
            
            <motion.a 
              href="#planner" 
              className="btn btn-ghost pixel-corners"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cost Calculator
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="trust-indicator-container">
            <div className="trust-indicator">
              <div className="stars">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                  >
                    <Star size={14} fill="var(--clr-accent)" color="var(--clr-accent)" />
                  </motion.div>
                ))}
              </div>
              <span className="label label-dim">5.0 by 100+ Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="glow-sphere"></div>
          <PixelWaveCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
