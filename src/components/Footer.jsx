import React from 'react';
import { ArrowUpRight, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'LinkedIn',  icon: Linkedin,  href: '#' },
  { label: 'Twitter',   icon: Twitter,   href: '#' },
];

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
        paddingTop: 'var(--space-xl)',
        paddingBottom: 'var(--space-md)',
      }}
    >
      <div className="container-grid">

        {/* CTA */}
        <div
          className="col-full mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
          data-reveal
        >
          <div>
            <p className="label mb-3">Siap Berkolaborasi?</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              Punya Ide Brilian?
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  fontSize: '0.92em',
                }}
              >
                Mari wujudkan bersama.
              </span>
            </h2>
          </div>

          <a
            href="#planner"
            className="btn--primary"
            style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end' }}
          >
            Mulai Proyek <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Divider */}
        <div
          className="col-full"
          style={{ height: '1px', background: 'var(--border)', marginBottom: '3rem' }}
        />

        {/* Footer bottom */}
        <div
          className="col-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start"
          data-reveal
        >
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <img
                src="/images/logo.png"
                alt="Pixelink Logo"
                style={{ height: '32px', width: 'auto' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                }}
              >
                PIXELINK
                <span style={{ color: 'var(--accent)' }}>.IO</span>
              </span>
            </a>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '26ch',
              }}
            >
              Studio kreatif digital. Berbasis di Semarang, Indonesia.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <p className="label">Temui Kami</p>
            <div className="flex gap-4">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    transition: 'border-color 0.25s, color 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href="mailto:hello@pixelink.co"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  transition: 'border-color 0.25s, color 0.25s',
                }}
                title="Email"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-full mt-12" data-reveal>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} PIXELINK — Hak Cipta Dilindungi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
