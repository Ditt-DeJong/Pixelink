import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelWaveCanvas from './PixelWaveCanvas';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 overflow-hidden relative">
      <div className="max-w-[1160px] mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

        {/* Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10"
          >
            <span
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
              style={{ boxShadow: '0 0 10px rgba(16,185,129,0.6)', animation: 'pulse-live 2s infinite' }}
            />
            <span
              className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Studio Digital Generasi Berikutnya
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="flex flex-col text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] mb-7 lg:items-start items-center"
          >
            <span className="text-outline">MEMBANGUN</span>
            <span className="text-solid">IDENTITAS</span>
            <span className="text-tech text-cyan-glow">digital terbaik</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-[var(--clr-text-muted)] text-[1.1rem] max-w-[500px] leading-relaxed mb-14 lg:mx-0 mx-auto"
          >
            Tinggalkan kesan pertama yang tak terlupakan. Kami merancang ekosistem web premium dan identitas digital interaktif yang mengubah pengunjung menjadi pelanggan setia — selaras dengan estetika kelas dunia dan nilai bisnis yang terukur.
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex items-center gap-10 flex-wrap justify-center lg:justify-start">
            <motion.a
              href="#services"
              className="pixel-corners btn-overlay relative inline-flex items-center gap-2 bg-[var(--clr-accent)] text-[var(--bg-deep)] px-6 py-3 text-[0.78rem] font-bold tracking-[0.08em] uppercase rounded-[4px] no-underline overflow-hidden border border-[var(--clr-accent)] transition-all duration-300 hover:bg-[var(--bg-surface)] hover:text-[var(--clr-accent)] hover:shadow-[0_0_20px_var(--clr-accent-glow)]"
              style={{ fontFamily: 'var(--font-mono)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Paket Layanan <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#planner"
              className="pixel-corners inline-flex items-center gap-2 bg-transparent text-[var(--clr-text)] px-6 py-3 text-[0.78rem] tracking-[0.08em] uppercase rounded-[4px] no-underline border border-[var(--clr-border)] transition-all duration-300 hover:border-[var(--clr-accent)] hover:text-[var(--clr-accent)]"
              style={{ fontFamily: 'var(--font-mono)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kalkulator Biaya
            </motion.a>
          </motion.div>

          {/* Trust */}
          <motion.div variants={itemVariants} className="mt-14 flex justify-start">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <Star size={14} fill="var(--clr-accent)" color="var(--clr-accent)" />
                  </motion.div>
                ))}
              </div>
              <span
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)] opacity-60"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                5.0 — Dipercaya 100+ Klien Puas
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative h-[480px] w-full flex justify-center items-center rounded-xl overflow-hidden bg-[rgba(9,13,22,0.4)] backdrop-blur-xl border border-[rgba(0,242,254,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="absolute w-80 h-80 bg-[var(--clr-accent)] rounded-full pointer-events-none z-0 opacity-[0.08]"
            style={{ filter: 'blur(80px)', animation: 'float 8s infinite alternate ease-in-out' }}
          />
          <PixelWaveCanvas />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
