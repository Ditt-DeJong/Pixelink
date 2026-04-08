import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <motion.h2 
            className="footer-cta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have an Idea?
            <br />
            Let's <span className="text-tech">Talk</span>
          </motion.h2>
          <motion.a 
            href="#" 
            className="btn btn-primary btn-large"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project <ArrowUpRight size={18} />
          </motion.a>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="brand-logo-container">
              <span className="brand-logo">PIXEL<span className="brand-ink">INK</span></span>
              <span className="brand-dot"></span>
            </div>
            <p className="footer-note">Premium Digital Studio. Based in Indonesia.</p>
          </div>
          
          <div className="footer-links">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social, i) => (
              <motion.a 
                key={social} 
                href="#"
                whileHover={{ y: -3, color: 'var(--clr-accent)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social}
              </motion.a>
            ))}
            <motion.a 
              href="mailto:hello@pixelink.co"
              whileHover={{ y: -3, color: 'var(--clr-accent)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              hello@pixelink.co
            </motion.a>
          </div>
        </div>
        <div className="footer-copy">
          <span className="label">© {new Date().getFullYear()} PIXELINK — All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
