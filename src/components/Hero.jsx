import { ArrowRight, Star } from 'lucide-react';
import PixelWaveCanvas from './PixelWaveCanvas';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 'var(--s20)', paddingBottom: 'var(--s16)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
      </div>

      <div className="container-grid items-center">

        {/* Content col */}
        <div className="col-left-7 flex flex-col justify-center">

          {/* Badge — gap:12px, mb:32px */}
          <div className="flex items-center" style={{ gap: 'var(--s3)', marginTop: 'var(--s5)', marginBottom: 'var(--s8)' }} data-reveal>
            <span style={{ display: 'block', width: '2px', height: '1.1em', background: 'var(--accent)', borderRadius: '1px', flexShrink: 0 }} />
            <span className="label" style={{ color: 'var(--accent)' }}>Studio Digital Generasi Berikutnya</span>
          </div>

          {/* Heading — mb:24px */}
          <h1 className="display" style={{ marginBottom: 'var(--s6)' }} data-reveal>
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

          {/* Subheading — mb:40px */}
          <p className="body" style={{ maxWidth: '44ch', marginBottom: 'var(--s10)' }} data-reveal>
            Kami merancang ekosistem web premium dan identitas digital yang mengubah pengunjung menjadi pelanggan setia — selaras dengan estetika kelas dunia.
          </p>

          {/* Actions — gap:16px */}
          <div className="flex items-center flex-wrap" style={{ gap: 'var(--s4)' }} data-reveal>
            <a href="#services" className="btn--primary">
              Lihat Layanan <ArrowRight size={15} />
            </a>
            <a href="#planner" className="btn--ghost">
              Hitung Estimasi
            </a>
          </div>

          {/* Trust — mt:48px, gap:12px */}
          <div className="flex items-center" style={{ marginTop: 'var(--s12)', gap: 'var(--s3)' }} data-reveal>
            <div className="flex" style={{ gap: 'var(--s1)' }}> {/* gap:4px */}
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={13} fill="var(--accent-warm)" color="var(--accent-warm)" />
              ))}
            </div>
            <span className="label" style={{ color: 'var(--text-muted)' }}>
              5.0 — Dipercaya 100+ Klien
            </span>
          </div>

        </div>

        {/* Visual col */}
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
            <div className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(200,241,53,0.03) 0%, transparent 60%)' }} />
            <PixelWaveCanvas />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
