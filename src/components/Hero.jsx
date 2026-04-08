import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
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
            <span className="label">Digital Startup & Branding</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-heading">
            <span className="text-outline">ELEVATING</span>
            <span className="text-solid">DIGITAL</span>
            <span className="text-tech">Presences</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subheading">
            Tinggalkan kesan pertama yang tak terlupakan. Kami adalah agensi spesialis yang merancang website bisnis dan personal branding. Kami unggul bukan hanya melalui tampilan, namun juga harga.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <motion.a 
              href="#services" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Eksplorasi Paket <ArrowRight size={16} />
            </motion.a>
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="glow-sphere"></div>
          
          <motion.div 
            className="glass-panel panel-front"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
             <div className="panel-header">
               <span></span><span></span><span></span>
             </div>
             <div className="panel-body">
               <div className="skeleton-line w-100"></div>
               <div className="skeleton-line w-75"></div>
               <div className="skeleton-line w-50"></div>
             </div>
          </motion.div>

          <motion.div 
            className="glass-panel panel-back"
            animate={{ y: [0, 10, 0], rotate: [-5, -2, -5] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          >
             <div className="panel-img-sim"></div>
             <div className="skeleton-line w-100"></div>
             <div className="skeleton-line w-50"></div>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
