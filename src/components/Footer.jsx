import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-32 pb-12 border-t border-[var(--clr-border)] bg-[var(--bg-surface)]">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* CTA Top */}
        <div className="flex justify-between items-end mb-32 flex-wrap gap-12 max-sm:flex-col max-sm:items-start max-sm:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,4vw,3rem)] uppercase leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Punya Ide Brilian?
            <br />
            Mari <span className="text-tech">Wujudkan</span>
          </motion.h2>

          <motion.a
            href="#planner"
            className="pixel-corners btn-overlay relative inline-flex items-center gap-2 bg-[var(--clr-accent)] text-[var(--bg-deep)] px-10 py-5 text-[0.85rem] font-bold tracking-[0.08em] uppercase rounded-[4px] no-underline overflow-hidden border border-[var(--clr-accent)] transition-all duration-300 hover:bg-[var(--bg-surface)] hover:text-[var(--clr-accent)] hover:shadow-[0_0_20px_var(--clr-accent-glow)]"
            style={{ fontFamily: 'var(--font-mono)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Proyek <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center pb-12 border-b border-[var(--clr-border)] mb-8 flex-wrap gap-12 max-sm:flex-col max-sm:items-start">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center mb-3">
              <img
                src="/images/logo.png"
                alt="Pixelink Logo"
                className="h-[38px] w-auto mr-3 object-contain"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0,242,254,0.35))' }}
              />
              <span
                className="font-black text-[1.6rem] tracking-[0.05em] text-[var(--clr-text)] leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                PIXEL<span className="brand-ink">INK</span>
              </span>
            </div>
            <p className="text-[var(--clr-text-muted)] text-[0.9rem]">Studio Kreatif Digital. Berbasis di Semarang, Indonesia.</p>
          </div>

          {/* Links */}
          <div className="flex gap-8 flex-wrap max-sm:flex-col max-sm:gap-4">
            {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
              <motion.a
                key={social}
                href="#"
                className="text-[var(--clr-text)] no-underline uppercase text-[0.75rem] tracking-[0.1em] transition-colors duration-300 hover:text-[var(--clr-accent)]"
                style={{ fontFamily: 'var(--font-mono)' }}
                whileHover={{ y: -3, color: 'var(--clr-accent)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {social}
              </motion.a>
            ))}
            <motion.a
              href="mailto:hello@pixelink.co"
              className="text-[var(--clr-text)] no-underline uppercase text-[0.75rem] tracking-[0.1em] transition-colors duration-300 hover:text-[var(--clr-accent)]"
              style={{ fontFamily: 'var(--font-mono)' }}
              whileHover={{ y: -3, color: 'var(--clr-accent)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              hello@pixelink.co
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <span
            className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {new Date().getFullYear()} PIXELINK — Hak Cipta Dilindungi.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
