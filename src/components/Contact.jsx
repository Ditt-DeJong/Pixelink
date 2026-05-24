import React, { useState, useEffect } from 'react';
import { Calculator, Clock, MessageSquare, DollarSign, ChevronRight } from 'lucide-react';

const basePackages = [
  { id: 'landing',   label: 'Landing Page Bisnis', basePrice: 800000,  days: 4, desc: 'Pemasaran & personal branding' },
  { id: 'comprof',   label: 'Company Profile',      basePrice: 1500000, days: 6, desc: 'Website korporat & organisasi' },
  { id: 'undangan',  label: 'Undangan Digital',      basePrice: 300000,  days: 3, desc: 'Animasi premium & RSVP WhatsApp' },
  { id: 'portfolio', label: 'Website Portofolio',    basePrice: 600000,  days: 4, desc: 'Galeri eksklusif untuk kreator' }
];

const addOnFeatures = [
  { id: 'seo',       label: 'SEO & Analytics',    price: 150000, days: 1, desc: 'Optimasi Google + laporan bulanan' },
  { id: 'multilang', label: 'Multi-Bahasa',        price: 200000, days: 2, desc: 'Dukungan EN + ID' },
  { id: 'whatsapp',  label: 'Integrasi WhatsApp',  price: 100000, days: 1, desc: 'Notifikasi & booking via chat' },
  { id: 'anim',      label: 'Animasi Premium',     price: 150000, days: 1, desc: 'GSAP + transisi eksklusif' },
  { id: 'branding',  label: 'Identitas Visual',    price: 300000, days: 2, desc: 'Logo, warna, & panduan merek' }
];

const fmt = val =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

const Contact = () => {
  const [selectedPkg, setSelectedPkg] = useState('landing');
  const [addons, setAddons] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    const pkg = basePackages.find(p => p.id === selectedPkg);
    if (!pkg) return;
    let cost = pkg.basePrice, days = pkg.days;
    addons.forEach(id => {
      const a = addOnFeatures.find(x => x.id === id);
      if (a) { cost += a.price; days += a.days; }
    });
    setTotalCost(cost);
    setTotalDays(days);
  }, [selectedPkg, addons]);

  const toggleAddon = id =>
    setAddons(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

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

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '0.7em 1em',
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.25s',
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

        {/* Title */}
        <div className="col-left-7 mb-12">
          <h2 className="headline" data-reveal>
            Rancang proyek
            <br />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--accent)',
              }}
            >
              impian Anda.
            </span>
          </h2>
          <p className="body mt-4" data-reveal>
            Pilih paket dan fitur yang Anda butuhkan — sistem kami akan menghitung estimasi harga dan waktu secara real-time.
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="col-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start"
          data-reveal
        >
          {/* Left: Form */}
          <div
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Step 1: Info */}
              <div>
                <p className="label mb-4">01 — Informasi Klien</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label block mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Budi Santoso"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label className="label block mb-2">Alamat Email</label>
                    <input
                      type="email"
                      placeholder="budi@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Package */}
              <div>
                <p className="label mb-4">02 — Pilih Paket</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {basePackages.map(pkg => {
                    const active = selectedPkg === pkg.id;
                    return (
                      <label
                        key={pkg.id}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.3rem',
                          padding: '0.9em 1.1em',
                          borderRadius: '8px',
                          border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                          background: active ? 'var(--accent-dim)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'border-color 0.25s, background 0.25s',
                        }}
                      >
                        <input
                          type="radio"
                          name="pkg"
                          value={pkg.id}
                          checked={active}
                          onChange={() => setSelectedPkg(pkg.id)}
                          style={{ display: 'none' }}
                        />
                        <div className="flex justify-between items-baseline">
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: '0.88rem',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {pkg.label}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: active ? 'var(--accent)' : 'var(--text-muted)',
                            }}
                          >
                            {fmt(pkg.basePrice)}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.73rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {pkg.desc}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div>
                <p className="label mb-4">03 — Fitur Tambahan</p>
                <div className="flex flex-col gap-2">
                  {addOnFeatures.map(addon => {
                    const active = addons.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.8em 1em',
                          borderRadius: '8px',
                          border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                          background: active ? 'var(--accent-dim)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'border-color 0.25s, background 0.25s',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => toggleAddon(addon.id)}
                          style={{ display: 'none' }}
                        />
                        <div>
                          <span
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              fontSize: '0.82rem',
                              color: 'var(--text-primary)',
                              display: 'block',
                              marginBottom: '0.15rem',
                            }}
                          >
                            {addon.label}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.72rem',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {addon.desc}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: active ? 'var(--accent)' : 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          +{fmt(addon.price)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Brief */}
              <div>
                <p className="label mb-4">04 — Brief Proyek</p>
                <textarea
                  placeholder="Ceritakan tentang visi dan kebutuhan proyek Anda..."
                  value={brief}
                  onChange={e => setBrief(e.target.value)}
                  style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <button type="submit" className="btn--primary" style={{ justifyContent: 'center', padding: '0.85em 2em' }}>
                <MessageSquare size={15} /> Hubungi via WhatsApp
              </button>
            </form>
          </div>

          {/* Right: Live Summary */}
          <div
            className="card p-7 lg:sticky"
            style={{ top: '6rem' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calculator size={16} style={{ color: 'var(--accent)' }} />
              <span className="label" style={{ color: 'var(--accent)' }}>Estimasi Langsung</span>
            </div>

            {/* Package */}
            <p className="label mb-1">Paket Dipilih</p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              {basePackages.find(p => p.id === selectedPkg)?.label}
            </p>

            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />

            {/* Cost */}
            <div className="flex items-start gap-4 mb-4">
              <div
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '8px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(200,241,53,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <DollarSign size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="label mb-0.5">Total Biaya</p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: 'var(--accent)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  {fmt(totalCost)}
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(240,197,110,0.1)',
                  border: '1px solid rgba(240,197,110,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Clock size={18} style={{ color: 'var(--accent-warm)' }} />
              </div>
              <div>
                <p className="label mb-0.5">Estimasi Waktu</p>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: 'var(--accent-warm)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  ± {totalDays} Hari
                </p>
              </div>
            </div>

            {addons.length > 0 && (
              <>
                <div style={{ height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />
                <p className="label mb-3">Fitur Tambahan</p>
                {addons.map(id => {
                  const a = addOnFeatures.find(x => x.id === id);
                  return a ? (
                    <div
                      key={id}
                      className="flex justify-between items-center mb-2"
                    >
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                        {a.label}
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                        +{fmt(a.price)}
                      </span>
                    </div>
                  ) : null;
                })}
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
