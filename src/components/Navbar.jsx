import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-400 border-b border-transparent
        ${scrolled ? 'py-4 bg-[rgba(3,7,18,0.85)] backdrop-blur-xl border-b border-[rgba(0,242,254,0.12)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-8'}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1160px] mx-auto px-10 flex justify-between items-center">
        {/* Brand */}
        <motion.a
          href="#"
          className="no-underline flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Pixelink Logo"
              className="h-8 w-auto mr-3 object-contain transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,242,254,0.3))' }}
            />
            <span
              className="font-black text-xl tracking-[0.05em] text-[var(--clr-text)] leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              PIXEL<span className="brand-ink">INK.IO</span>
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {[['Beranda', 'home'], ['Layanan', 'services'], ['Portofolio', 'works']].map(([label, id]) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className="no-underline text-[var(--clr-text-muted)] tracking-[0.15em] uppercase text-[0.7rem] transition-colors duration-300 hover:text-[var(--clr-text)]"
              style={{ fontFamily: 'var(--font-mono)' }}
              whileHover={{ y: -2, color: 'var(--clr-accent)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {label}
            </motion.a>
          ))}
          <motion.a
            href="#planner"
            className="pixel-corners btn-overlay relative inline-flex items-center gap-2 bg-[var(--clr-accent)] text-[var(--bg-deep)] px-6 py-3 text-[0.78rem] font-bold tracking-[0.08em] uppercase rounded-[4px] no-underline overflow-hidden border border-[var(--clr-accent)] transition-all duration-300 hover:bg-[var(--bg-surface)] hover:text-[var(--clr-accent)] hover:shadow-[0_0_20px_var(--clr-accent-glow)]"
            style={{ fontFamily: 'var(--font-mono)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Proyek
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-transparent border-none text-[var(--clr-text)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} color="var(--clr-text)" /> : <Menu size={24} color="var(--clr-text)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-deep)] border-b border-[var(--clr-border)] flex flex-col items-start gap-6 px-10 py-8"
          >
            {[['Beranda', 'home'], ['Layanan', 'services'], ['Portofolio', 'works']].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="no-underline text-[var(--clr-text-muted)] tracking-[0.15em] uppercase text-[0.7rem]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </a>
            ))}
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="pixel-corners inline-flex items-center gap-2 bg-[var(--clr-accent)] text-[var(--bg-deep)] px-6 py-3 text-[0.78rem] font-bold tracking-[0.08em] uppercase rounded-[4px] no-underline"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Mulai Proyek
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
