import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import PixelWaveCanvas from './PixelWaveCanvas';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />
      </div>

      <div className="container-grid items-center">

        {/* Content */}
        <div className="col-left-7 flex flex-col justify-center">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-8" data-reveal>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent-glow)' }}
            />
            <span className="label" style={{ color: 'var(--accent)' }}>Studio Digital Generasi Berikutnya</span>
          </div>

          {/* Heading */}
          <h1 className="display mb-6" data-reveal>
            Membangun
            <br />
            Identitas{' '}
            <span
              className="block"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--accent)',
                fontSize: '0.92em',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              digital terbaik.
            </span>
          </h1>

          {/* Subheading */}
          <p className="body mb-10" style={{ maxWidth: '44ch' }} data-reveal>
            Kami merancang ekosistem web premium dan identitas digital yang mengubah pengunjung menjadi pelanggan setia — selaras dengan estetika kelas dunia.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap" data-reveal>
            <a href="#services" className="btn--primary">
              Lihat Layanan <ArrowRight size={15} />
            </a>
            <a href="#planner" className="btn--ghost">
              Hitung Estimasi
            </a>
          </div>

          {/* Trust */}
          <div className="mt-12 flex items-center gap-3" data-reveal>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={13} fill="var(--accent-warm)" color="var(--accent-warm)" />
              ))}
            </div>
            <span className="label" style={{ color: 'var(--text-muted)' }}>
              5.0 — Dipercaya 100+ Klien
            </span>
          </div>

        </div>

        {/* Visual / WebGL */}
        <div className="col-right-5 relative hidden lg:flex justify-center items-center" data-parallax>
          <div
            className="w-full overflow-hidden relative"
            style={{
              height: '420px',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              background: 'var(--bg-surface)',
            }}
          >
            {/* Accent shimmer overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(200,241,53,0.03) 0%, transparent 60%)',
              }}
            />
            <PixelWaveCanvas />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
