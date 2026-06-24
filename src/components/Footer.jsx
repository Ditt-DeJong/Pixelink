import { ArrowUpRight, Mail } from 'lucide-react';

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Twitter',   href: '#' },
];

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--accent)',
      paddingTop: 'var(--section-py)',
      paddingBottom: 'var(--s12)',
    }}>
      <div className="container-grid">

        {/* CTA row */}
        <div className="col-full flex flex-col sm:flex-row sm:items-end sm:justify-between"
          style={{ gap: 'var(--s8)', marginBottom: 'var(--s16)' }} data-reveal>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)', marginBottom: 'var(--s3)',
            }}>
              Siap Berkolaborasi?
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.05, letterSpacing: '-0.03em',
              color: '#ffffff',
            }}>
              Siap membangun
              <br />
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400, fontStyle: 'italic',
                color: 'rgba(255,255,255,0.80)',
                fontSize: '0.92em',
              }}>
                kabin digital Anda?
              </span>
            </h2>
          </div>

          <a href="#planner" style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--s2)',
            padding: 'var(--s4) var(--s8)',
            background: '#ffffff',
            color: 'var(--accent)',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.875rem', fontWeight: 700,
            whiteSpace: 'nowrap', alignSelf: 'flex-end',
            transition: 'background 0.2s ease, box-shadow 0.2s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Mulai Proyek <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Divider */}
        <div className="col-full" style={{ height: '1px', background: 'rgba(255,255,255,0.15)', marginBottom: 'var(--s12)' }} />

        {/* Bottom */}
        <div className="col-full grid grid-cols-1 md:grid-cols-[1fr_auto] items-start"
          style={{ gap: 'var(--s10)', paddingBottom: 'var(--s12)' }} data-reveal>

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center" style={{ gap: 'var(--s3)', marginBottom: 'var(--s3)' }}>
              {/* Logo + "Code" overlay — inverted for dark footer */}
              <div style={{ position: 'relative', height: '36px', display: 'inline-block' }}>
                <img src="/images/logo-fix.png" alt="Kabin Code Logo"
                  style={{ height: '36px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
                <span style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '0px',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.65)',
                  letterSpacing: '0.01em',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}>
                  Code
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '1rem', letterSpacing: '-0.01em', color: '#ffffff',
              }}>
                Kabin<span style={{ opacity: 0.7 }}> Code</span>
              </span>
            </a>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: '28ch',
            }}>
              Membangun rumah digital bisnis Anda. Berbasis di Semarang, Indonesia.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col" style={{ gap: 'var(--s4)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}>
              Temui Kami
            </p>
            <div className="flex flex-wrap" style={{ gap: 'var(--s2)' }}>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 'var(--s2) var(--s3)',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {label}
                </a>
              ))}
              <a href="mailto:hello@pixelink.co" title="Email" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px',
                borderRadius: '6px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.65)',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-full" style={{ marginTop: 'var(--s8)' }} data-reveal>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)',
          }}>
            © {new Date().getFullYear()} Kabin Code — Hak Cipta Dilindungi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
