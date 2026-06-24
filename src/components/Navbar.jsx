import React from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled]     = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Layanan',     '#services'],
    ['Portofolio',  '#works'],
    ['Kalkulator',  '#planner'],
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        padding: scrolled ? 'var(--s3) var(--container-px)' : 'var(--s5) var(--container-px)',
        background: scrolled ? 'rgba(250, 250, 249, 0.92)' : 'rgba(250, 250, 249, 0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between max-w-[1360px] mx-auto">

        {/* Brand */}
        <a href="#" className="flex items-center" style={{ gap: 'var(--s3)' }}>
          {/* Logo + "Code" overlay */}
          <div style={{ position: 'relative', height: '36px', width: 'auto', display: 'inline-block' }}>
            <img src="/images/logo-fix.png" alt="Logo" style={{ height: '36px', width: 'auto', display: 'block' }} />
            <span style={{
              position: 'absolute',
              bottom: '2px',
              right: '0px',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: '0.7rem',
              color: 'var(--accent-warm)',
              letterSpacing: '0.01em',
              lineHeight: 1,
              pointerEvents: 'none',
            }}>
              Code
            </span>
          </div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}>
            Kabin<span style={{ color: 'var(--accent)' }}> Code</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center" style={{ gap: 'var(--s8)' }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          ))}
          <a href="#planner" className="btn--primary">
            Mulai Proyek
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col"
          style={{ gap: 'var(--s1)', padding: 'var(--s2)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', height: '1.5px', width: '22px',
            background: 'var(--text-primary)',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: mobileOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', height: '1.5px', width: '15px',
            background: 'var(--text-primary)',
            transition: 'opacity 0.3s ease',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', height: '1.5px', width: '22px',
            background: 'var(--text-primary)',
            transition: 'transform 0.3s ease',
            transform: mobileOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          padding: 'var(--s6) var(--container-px)',
          gap: 'var(--s5)',
          background: 'rgba(250, 250, 249, 0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)}
              style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
              {label}
            </a>
          ))}
          <a href="#planner" onClick={() => setMobileOpen(false)} className="btn--primary w-fit">
            Mulai Proyek
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
