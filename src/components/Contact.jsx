import { useState, useCallback, useMemo } from 'react';
import { Calculator, Clock, MessageSquare, DollarSign } from 'lucide-react';

const basePackages = [
  { id: 'landing',   label: 'Landing Page Bisnis', basePrice: 800000,  days: 4, desc: 'Pemasaran & personal branding' },
  { id: 'comprof',   label: 'Company Profile',      basePrice: 1500000, days: 6, desc: 'Website korporat & organisasi' },
  { id: 'undangan',  label: 'Undangan Digital',      basePrice: 300000,  days: 3, desc: 'Animasi premium & RSVP WhatsApp' },
  { id: 'portfolio', label: 'Website Portofolio',    basePrice: 600000,  days: 4, desc: 'Galeri eksklusif untuk kreator' }
];

const addOnFeatures = [
  { id: 'seo',       label: 'SEO & Analytics',   price: 150000, days: 1, desc: 'Optimasi Google + laporan bulanan' },
  { id: 'multilang', label: 'Multi-Bahasa',       price: 200000, days: 2, desc: 'Dukungan EN + ID' },
  { id: 'whatsapp',  label: 'Integrasi WhatsApp', price: 100000, days: 1, desc: 'Notifikasi & booking via chat' },
  { id: 'anim',      label: 'Animasi Premium',    price: 150000, days: 1, desc: 'GSAP + transisi eksklusif' },
  { id: 'branding',  label: 'Identitas Visual',   price: 300000, days: 2, desc: 'Logo, warna, & panduan merek' }
];

const fmt = val =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

/* Reusable input style — padding 12px 16px (s3 s4) */
const inputBase = {
  width: '100%',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  padding: 'var(--s3) var(--s4)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.85rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.25s',
};

const Contact = () => {
  const [selectedPkg, setSelectedPkg] = useState('landing');
  const [addons, setAddons]           = useState([]);
  const [name, setName]               = useState('');
  const [email, setEmail]             = useState('');
  const [brief, setBrief]             = useState('');

  const toggleAddon = useCallback(
    id => setAddons(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]),
    []
  );

  const { totalCost, totalDays } = useMemo(() => {
    const pkg = basePackages.find(p => p.id === selectedPkg);
    if (!pkg) return { totalCost: 0, totalDays: 0 };
    let cost = pkg.basePrice, days = pkg.days;
    addons.forEach(id => {
      const a = addOnFeatures.find(x => x.id === id);
      if (a) { cost += a.price; days += a.days; }
    });
    return { totalCost: cost, totalDays: days };
  }, [selectedPkg, addons]);

  const handleSubmit = e => {
    e.preventDefault();
    const pkg = basePackages.find(p => p.id === selectedPkg);
    const addonsText = addons.length
      ? addons.map(id => `- ${addOnFeatures.find(a => a.id === id)?.label}`).join('%0A')
      : '- Tidak ada';
    const msg =
      `Halo Pixelink!%0A%0ABerikut detail proyek saya:%0A%0A` +
      `*Nama:* ${name || 'Klien Baru'}%0A*Email:* ${email || '-'}%0A%0A` +
      `*Paket:* ${pkg?.label}%0A*Add-ons:*%0A${addonsText}%0A%0A` +
      `*Estimasi Biaya:* ${fmt(totalCost)}%0A*Estimasi Waktu:* ± ${totalDays} Hari%0A%0A` +
      `*Brief:* "${brief || '-'}"`;
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="planner" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-grid">

        {/* Editorial Header */}
        <header className="col-full section-header" data-reveal>
          <span className="label">03</span>
          <hr className="section-rule" />
          <span className="label">Perencana Proyek</span>
        </header>

        {/* Title — mb:48px */}
        <div className="col-left-7" style={{ marginBottom: 'var(--s12)' }}>
          <h2 className="headline" data-reveal>
            Rancang proyek
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)' }}>
              impian Anda.
            </span>
          </h2>
          {/* mt:16px */}
          <p className="body" style={{ marginTop: 'var(--s4)' }} data-reveal>
            Pilih paket dan fitur yang Anda butuhkan — sistem kami akan menghitung estimasi harga dan waktu secara real-time.
          </p>
        </div>

        {/* Main grid — gap:32px */}
        <div
          className="col-full grid grid-cols-1 lg:grid-cols-[1fr_340px] items-start"
          style={{ gap: 'var(--s8)' }}
          data-reveal
        >
          {/* ── Left: Form ── */}
          <div className="card" style={{ padding: 'var(--card-p-lg)' }}>
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 'var(--s8)' }}> {/* gap:32px */}

              {/* Step 1 — gap:16px */}
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>01 — Informasi Klien</p>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--s4)' }}>
                  <div>
                    <label className="label block" style={{ marginBottom: 'var(--s2)' }}>Nama Lengkap</label>
                    <input type="text" placeholder="Budi Santoso" value={name}
                      onChange={e => setName(e.target.value)} required style={inputBase}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e  => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                  <div>
                    <label className="label block" style={{ marginBottom: 'var(--s2)' }}>Alamat Email</label>
                    <input type="email" placeholder="budi@email.com" value={email}
                      onChange={e => setEmail(e.target.value)} required style={inputBase}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e  => (e.target.style.borderColor = 'var(--border)')} />
                  </div>
                </div>
              </div>

              {/* Step 2 — gap:12px */}
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>02 — Pilih Paket</p>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--s3)' }}>
                  {basePackages.map(pkg => {
                    const active = selectedPkg === pkg.id;
                    return (
                      <label key={pkg.id} style={{
                        display: 'flex', flexDirection: 'column', gap: 'var(--s1)',  /* gap:4px */
                        padding: 'var(--s4)',                                         /* 16px */
                        borderRadius: '8px',
                        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                        background: active ? 'var(--accent-dim)' : 'transparent',
                        cursor: 'pointer', transition: 'border-color 0.25s, background 0.25s',
                      }}>
                        <input type="radio" name="pkg" value={pkg.id} checked={active}
                          onChange={() => setSelectedPkg(pkg.id)} style={{ display: 'none' }} />
                        <div className="flex justify-between items-baseline" style={{ gap: 'var(--s2)' }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                            {pkg.label}
                          </span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: active ? 'var(--accent)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                            {fmt(pkg.basePrice)}
                          </span>
                        </div>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.73rem', color: 'var(--text-muted)' }}>
                          {pkg.desc}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 — gap:8px */}
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>03 — Fitur Tambahan</p>
                <div className="flex flex-col" style={{ gap: 'var(--s2)' }}>
                  {addOnFeatures.map(addon => {
                    const active = addons.includes(addon.id);
                    return (
                      <label key={addon.id} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        gap: 'var(--s4)',        /* gap:16px */
                        padding: 'var(--s3) var(--s4)',  /* 12px 16px */
                        borderRadius: '8px',
                        border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                        background: active ? 'var(--accent-dim)' : 'transparent',
                        cursor: 'pointer', transition: 'border-color 0.25s, background 0.25s',
                      }}>
                        <input type="checkbox" checked={active} onChange={() => toggleAddon(addon.id)} style={{ display: 'none' }} />
                        <div>
                          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', display: 'block', marginBottom: 'var(--s1)' }}>
                            {addon.label}
                          </span>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {addon.desc}
                          </span>
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: active ? 'var(--accent)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          +{fmt(addon.price)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>04 — Brief Proyek</p>
                <textarea
                  placeholder="Ceritakan tentang visi dan kebutuhan proyek Anda..."
                  value={brief} onChange={e => setBrief(e.target.value)}
                  style={{ ...inputBase, minHeight: '96px', resize: 'vertical' }}  /* 96 = 24*4 */
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e  => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button type="submit" className="btn--primary" style={{ justifyContent: 'center', padding: 'var(--s4) var(--s8)' }}>  {/* 16px 32px */}
                <MessageSquare size={15} /> Hubungi via WhatsApp
              </button>
            </form>
          </div>

          {/* ── Right: Live Summary ── */}
          <div className="card lg:sticky" style={{ padding: 'var(--card-p-lg)', top: 'calc(var(--s16) + var(--s6))' }}> {/* top:88px */}

            {/* Header — mb:24px, gap:8px */}
            <div className="flex items-center" style={{ gap: 'var(--s2)', marginBottom: 'var(--s6)' }}>
              <Calculator size={16} style={{ color: 'var(--accent)' }} />
              <span className="label" style={{ color: 'var(--accent)' }}>Estimasi Langsung</span>
            </div>

            {/* Package name — mb:4px */}
            <p className="label" style={{ marginBottom: 'var(--s1)' }}>Paket Dipilih</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 'var(--s6)' }}>  {/* mb:24px */}
              {basePackages.find(p => p.id === selectedPkg)?.label}
            </p>

            <div style={{ height: '1px', background: 'var(--border)', marginBottom: 'var(--s6)' }} />

            {/* Cost — gap:16px, mb:16px */}
            <div className="flex items-start" style={{ gap: 'var(--s4)', marginBottom: 'var(--s4)' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px', flexShrink: 0,
                background: 'var(--accent-dim)', border: '1px solid rgba(200,241,53,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <DollarSign size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="label" style={{ marginBottom: 'var(--s1)' }}>Total Biaya</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  {fmt(totalCost)}
                </p>
              </div>
            </div>

            {/* Duration — gap:16px */}
            <div className="flex items-start" style={{ gap: 'var(--s4)' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px', flexShrink: 0,
                background: 'rgba(240,197,110,0.1)', border: '1px solid rgba(240,197,110,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Clock size={18} style={{ color: 'var(--accent-warm)' }} />
              </div>
              <div>
                <p className="label" style={{ marginBottom: 'var(--s1)' }}>Estimasi Waktu</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-warm)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  ± {totalDays} Hari
                </p>
              </div>
            </div>

            {/* Active addons list */}
            {addons.length > 0 && (
              <>
                <div style={{ height: '1px', background: 'var(--border)', margin: 'var(--s6) 0' }} />
                <p className="label" style={{ marginBottom: 'var(--s3)' }}>Fitur Tambahan</p>
                <div className="flex flex-col" style={{ gap: 'var(--s2)' }}>
                  {addons.map(id => {
                    const a = addOnFeatures.find(x => x.id === id);
                    return a ? (
                      <div key={id} className="flex justify-between items-center">
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>{a.label}</span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>+{fmt(a.price)}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
