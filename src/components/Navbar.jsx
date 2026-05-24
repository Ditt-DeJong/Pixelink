import React from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Layanan', '#services'],
    ['Portofolio', '#works'],
    ['Kalkulator', '#planner'],
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        padding: scrolled ? '0.8rem clamp(1.25rem,4vw,4rem)' : '1.2rem clamp(1.25rem,4vw,4rem)',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.1rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            PIXELINK
            <span style={{ color: 'var(--accent)' }}>.IO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '0.01em',
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          ))}
          <a
            href="#planner"
            className="btn--primary"
            style={{ padding: '0.55em 1.4em', fontSize: '0.78rem' }}
          >
            Mulai Proyek
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          <span
            className="block h-[1.5px] w-6 transition-transform duration-300"
            style={{
              background: 'var(--text-primary)',
              transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-[1.5px] w-4 transition-all duration-300"
            style={{
              background: 'var(--text-primary)',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-[1.5px] w-6 transition-transform duration-300"
            style={{
              background: 'var(--text-primary)',
              transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full flex flex-col p-6 gap-5"
          style={{
            background: 'rgba(8,8,8,0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
          }}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#planner"
            onClick={() => setMobileOpen(false)}
            className="btn--primary w-fit"
          >
            Mulai Proyek
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
