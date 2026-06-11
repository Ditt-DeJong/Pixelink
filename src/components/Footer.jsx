import { ArrowUpRight, Mail } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Twitter',   href: '#' },
];

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      paddingTop: 'var(--section-py)',
      paddingBottom: 'var(--s12)',     /* 48px */
    }}>
      <div className="container-grid">

        {/* CTA row — mb:96px, gap:32px */}
        <div
          className="col-full flex flex-col sm:flex-row sm:items-end sm:justify-between"
          style={{ gap: 'var(--s8)', marginBottom: 'var(--s24)' }}
          data-reveal
        >
          <div>
            {/* label — mb:12px */}
            <p className="label" style={{ marginBottom: 'var(--s3)' }}>Siap Berkolaborasi?</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}>
              Punya Ide Brilian?
              <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)', fontSize: '0.92em' }}>
                Mari wujudkan bersama.
              </span>
            </h2>
          </div>

          <a href="#planner" className="btn--primary" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end', padding: 'var(--s4) var(--s8)' }}>  {/* 16px 32px */}
            Mulai Proyek <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Divider — mb:48px */}
        <div className="col-full" style={{ height: '1px', background: 'var(--border)', marginBottom: 'var(--s12)' }} />

        {/* Bottom row — gap:40px */}
        <div
          className="col-full grid grid-cols-1 md:grid-cols-[1fr_auto] items-start"
          style={{ gap: 'var(--s10)', paddingBottom: 'var(--s12)' }}
          data-reveal
        >
          {/* Brand */}
          <div>
            {/* logo+name — gap:12px, mb:12px */}
            <a href="#" className="flex items-center" style={{ gap: 'var(--s3)', marginBottom: 'var(--s3)' }}>
              <img src="/images/logo.png" alt="Pixelink Logo" style={{ height: '32px', width: 'auto' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
                PIXELINK<span style={{ color: 'var(--accent)' }}>.IO</span>
              </span>
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '26ch' }}>
              Studio kreatif digital. Berbasis di Semarang, Indonesia.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col" style={{ gap: 'var(--s4)' }}> {/* gap:16px */}
            <p className="label">Temui Kami</p>
            {/* links — gap:8px */}
            <div className="flex flex-wrap" style={{ gap: 'var(--s2)' }}>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 'var(--s2) var(--s3)',   /* 8px 12px */
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.25s, color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)';  e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {label}
                </a>
              ))}
              {/* Email icon button — 36x36 = 9*4 */}
              <a href="mailto:hello@pixelink.co" title="Email" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)';  e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright — mt:48px */}
        <div className="col-full" style={{ marginTop: 'var(--s12)' }} data-reveal>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} PIXELINK — Hak Cipta Dilindungi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
