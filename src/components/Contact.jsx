import { useState, useMemo } from 'react';
import { Calculator, Clock, MessageSquare, DollarSign } from 'lucide-react';

const basePackages = [
  { id: 'undangan',  label: 'Undangan Digital',     basePrice: 99000,   days: 3, desc: 'RSVP WhatsApp & buku tamu digital' },
  { id: 'landing',   label: 'Landing Page',         basePrice: 1099000, days: 4, desc: 'Pemasaran & personal branding' },
  { id: 'comprof',   label: 'Company Profile',      basePrice: 1999000, days: 6, desc: 'Website profesional perusahaan' },
  { id: 'portfolio', label: 'Web Portofolio',       basePrice: 350000,  days: 3, desc: 'Showcase karya kreator' }
];

const fmt = val =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

const inputBase = {
  width: '100%',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: 'var(--s3) var(--s4)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const Contact = () => {
  const [selectedPkg, setSelectedPkg] = useState('undangan');
  const [name, setName]               = useState('');
  const [email, setEmail]             = useState('');
  const [brief, setBrief]             = useState('');

  const { totalCost, totalDays, pkgLabel } = useMemo(() => {
    const pkg = basePackages.find(p => p.id === selectedPkg);
    if (!pkg) return { totalCost: 0, totalDays: 0, pkgLabel: '' };
    return { totalCost: pkg.basePrice, totalDays: pkg.days, pkgLabel: pkg.label };
  }, [selectedPkg]);

  const handleSubmit = e => {
    e.preventDefault();
    
    // Format pesan WhatsApp yang clean dan rapi
    const msg = [
      `Halo KabinCode!`,
      ``,
      `Saya tertarik untuk memulai proyek website.`,
      ``,
      `*INFORMASI KLIEN*`,
      `Nama: ${name}`,
      `Email: ${email}`,
      ``,
      `*PAKET DIPILIH*`,
      `${pkgLabel}`,
      `Estimasi: ${fmt(totalCost)} • ±${totalDays} hari kerja`,
      ``,
      `*BRIEF PROYEK*`,
      `${brief || 'Akan dijelaskan lebih lanjut'}`,
      ``,
      `Mohon info lebih lanjut. Terima kasih!`
    ].join('%0A');

    window.open(`https://wa.me/6285875595727?text=${msg}`, '_blank');
  };

  const labelStyle = {
    fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: 'var(--s2)',
  };

  return (
    <section id="planner" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-grid">

        <header className="col-full section-header" data-reveal>
          <span className="label">03</span>
          <hr className="section-rule" />
          <span className="label">Perencana Proyek</span>
        </header>

        <div className="col-left-7" style={{ marginBottom: 'var(--s12)' }}>
          <h2 className="headline" data-reveal>
            Rancang proyek,
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
              tanpa kejutan biaya.
            </span>
          </h2>
          <p className="body" style={{ marginTop: 'var(--s4)' }} data-reveal>
            Pilih paket dan fitur yang Anda butuhkan — estimasi biaya dan waktu dihitung secara otomatis.
          </p>
        </div>

        <div className="col-full grid grid-cols-1 lg:grid-cols-[1fr_320px] items-start"
          style={{ gap: 'var(--s8)' }} data-reveal>

          {/* ── Form ── */}
          <div className="card" style={{ padding: 'var(--card-p-lg)' }}>
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'var(--s8)' }}>

              {/* Step 1 */}
              <div>
                <p style={{ ...labelStyle, marginBottom: 'var(--s4)', color: 'var(--accent)' }}>01 — Informasi Klien</p>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--s4)' }}>
                  <div>
                    <label style={labelStyle}>Nama Lengkap</label>
                    <input type="text" placeholder="Budi Santoso" value={name}
                      onChange={e => setName(e.target.value)} required style={inputBase}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e  => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Alamat Email</label>
                    <input type="email" placeholder="budi@email.com" value={email}
                      onChange={e => setEmail(e.target.value)} required style={inputBase}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e  => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <p style={{ ...labelStyle, marginBottom: 'var(--s4)', color: 'var(--accent)' }}>02 — Pilih Paket</p>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--s3)' }}>
                  {basePackages.map(pkg => {
                    const active = selectedPkg === pkg.id;
                    return (
                      <label key={pkg.id} style={{
                        display: 'flex', flexDirection: 'column', gap: 'var(--s1)',
                        padding: 'var(--s4)',
                        borderRadius: '10px',
                        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                        background: active ? 'var(--accent-light)' : 'var(--bg-primary)',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s, background 0.2s',
                      }}>
                        <input type="radio" name="pkg" value={pkg.id} checked={active}
                          onChange={() => setSelectedPkg(pkg.id)} style={{ display: 'none' }} />
                        <div className="flex justify-between items-baseline" style={{ gap: 'var(--s2)' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                            {pkg.label}
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: active ? 'var(--accent)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                            {fmt(pkg.basePrice)}
                          </span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{pkg.desc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <p style={{ ...labelStyle, marginBottom: 'var(--s4)', color: 'var(--accent)' }}>03 — Brief Proyek</p>
                <textarea placeholder="Ceritakan kebutuhan dan visi proyek Anda..." value={brief}
                  onChange={e => setBrief(e.target.value)}
                  style={{ ...inputBase, minHeight: '120px', resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e  => (e.target.style.borderColor = 'var(--border)')} />
              </div>

              <button type="submit" className="btn--primary" style={{ justifyContent: 'center', padding: 'var(--s4) var(--s8)' }}>
                <MessageSquare size={15} /> Hubungi via WhatsApp
              </button>
            </form>
          </div>

          {/* ── Summary ── */}
          <div className="card lg:sticky" style={{ padding: 'var(--card-p-lg)', top: '88px' }}>
            <div className="flex items-center" style={{ gap: 'var(--s2)', marginBottom: 'var(--s6)' }}>
              <Calculator size={16} style={{ color: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Estimasi Langsung
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--s1)' }}>
              Paket Dipilih
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 'var(--s6)' }}>
              {pkgLabel}
            </p>

            <div style={{ height: '1px', background: 'var(--border)', marginBottom: 'var(--s6)' }} />

            {/* Cost */}
            <div className="flex items-center" style={{ gap: 'var(--s4)', marginBottom: 'var(--s4)' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <DollarSign size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Total Biaya</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--accent)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {fmt(totalCost)}
                </p>
              </div>
            </div>

            {/* Days */}
            <div className="flex items-center" style={{ gap: 'var(--s4)' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                background: 'var(--accent-warm-dim)', border: '1px solid rgba(193,68,14,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Clock size={18} style={{ color: 'var(--accent-warm)' }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Estimasi Waktu</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--accent-warm)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  ± {totalDays} Hari
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
