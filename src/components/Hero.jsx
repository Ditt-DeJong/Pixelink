import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: 'var(--s20)',
        paddingBottom: 'var(--s16)',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Subtle background shape */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute',
          top: '-10%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
          opacity: 0.7,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%', left: '-8%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-warm-dim) 0%, transparent 70%)',
          opacity: 2,
        }} />
      </div>

      <div className="container-grid items-center">

        {/* Content */}
        <div className="col-left-7 flex flex-col justify-center">

          {/* Badge */}
          <div className="flex items-center" style={{ gap: 'var(--s3)', marginBottom: 'var(--s8)' }} data-reveal>
            <span style={{
              display: 'block', width: '2px', height: '1em',
              background: 'var(--accent)', borderRadius: '1px', flexShrink: 0,
            }} />
            <span className="label" style={{ color: 'var(--accent)' }}>
              Studio Digital · Semarang
            </span>
          </div>

          {/* Heading */}
          <h1 className="display" style={{ marginBottom: 'var(--s6)' }} data-reveal>
            Website adalah
            <br />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--accent)',
              letterSpacing: '-0.01em',
            }}>
              rumah bisnis Anda.
            </span>
          </h1>

          {/* Body */}
          <p className="body" style={{ marginBottom: 'var(--s10)' }} data-reveal>
            Di Kabin Code, kami membangun kehadiran digital yang kokoh dan hangat — tempat pelanggan merasa nyaman untuk percaya, kembali, dan bertransaksi.
          </p>

          {/* CTAs */}
          <div className="flex items-center flex-wrap" style={{ gap: 'var(--s4)' }} data-reveal>
            <a href="#services" className="btn--primary">
              Lihat Layanan <ArrowRight size={15} />
            </a>
            <a href="#planner" className="btn--ghost">
              Hitung Estimasi
            </a>
          </div>

          {/* Trust */}
          <div className="flex items-center" style={{ marginTop: 'var(--s12)', gap: 'var(--s4)' }} data-reveal>
            <div className="flex" style={{ gap: 'var(--s1)' }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={13} fill="var(--accent-warm)" color="var(--accent-warm)" />
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}>
              5.0 — Dipercaya 100+ klien aktif
            </span>
          </div>

        </div>

        {/* Visual: stat cards */}
        <div className="col-right-5 hidden lg:flex flex-col justify-center" style={{ gap: 'var(--s4)' }} data-reveal>

          {/* Stat card 1 */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: 'var(--s6)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          }}>
            <div style={{
              fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1,
              marginBottom: 'var(--s2)',
            }}>
              100+
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
              Proyek berhasil diselesaikan
            </p>
          </div>

          <div className="grid grid-cols-2" style={{ gap: 'var(--s4)' }}>
            {/* Stat card 2 */}
            <div style={{
              background: 'var(--accent)',
              borderRadius: '16px',
              padding: 'var(--s6)',
            }}>
              <div style={{
                fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)',
                color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 'var(--s2)',
              }}>
                3–7
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)' }}>
                Hari pengerjaan
              </p>
            </div>

            {/* Stat card 3 */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: 'var(--s6)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)',
                color: 'var(--accent-warm)', letterSpacing: '-0.03em', lineHeight: 1,
                marginBottom: 'var(--s2)',
              }}>
                5★
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                Rating rata-rata
              </p>
            </div>
          </div>

          {/* Tagline card */}
          <div style={{
            background: 'var(--accent-light)',
            border: '1px solid var(--border-accent)',
            borderRadius: '16px',
            padding: 'var(--s5) var(--s6)',
            display: 'flex', alignItems: 'center', gap: 'var(--s4)',
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 500, fontFamily: 'var(--font-body)' }}>
              Harga transparan, tanpa biaya tersembunyi
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
