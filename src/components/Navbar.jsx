import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.nav
      className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container nav-content">
        <motion.a
          href="#"
          className="brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="brand-logo-container">
            <img src="/images/logo.png" alt="Pixelink Logo" className="brand-logo-img" />
            <span className="brand-logo">PIXEL<span className="brand-ink">INK.IO</span></span>
          </div>
        </motion.a>

        <div className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {['Home', 'Services', 'Works'].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ y: -2, color: 'var(--clr-accent)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Project
          </motion.a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} color="var(--clr-text)" /> : <Menu size={24} color="var(--clr-text)" />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
