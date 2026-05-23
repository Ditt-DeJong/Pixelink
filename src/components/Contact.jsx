import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Send, MessageSquare, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const basePackages = [
  { id: 'landing', label: 'Landing Page Bisnis', basePrice: 800000, days: 4, desc: 'Ideal untuk pemasaran & personal branding' },
  { id: 'comprof', label: 'Company Profile', basePrice: 1500000, days: 6, desc: 'Tingkatkan kredibilitas korporat & organisasi Anda' },
  { id: 'undangan', label: 'Undangan Digital', basePrice: 300000, days: 3, desc: 'Animasi premium & formulir RSVP via WhatsApp' },
  { id: 'portfolio', label: 'Website Portofolio', basePrice: 600000, days: 4, desc: 'Galeri eksklusif untuk kreator & pekerja seni' }
];

const addOnFeatures = [
  { id: 'seo', label: 'SEO Lanjutan & Analytics Penuh', price: 150000, days: 1, desc: 'Optimasi Google & laporan performa bulanan' },
  { id: 'multilang', label: 'Dukungan Multi-Bahasa', price: 200000, days: 2, desc: 'Bahasa Inggris + Indonesia' },
  { id: 'whatsapp', label: 'Integrasi Sistem WhatsApp', price: 100000, days: 1, desc: 'Notifikasi otomatis & pemesanan langsung via chat' },
  { id: 'anim', label: 'Animasi Mikro Premium', price: 150000, days: 1, desc: 'Framer Motion & transisi visual eksklusif' },
  { id: 'branding', label: 'Paket Logo & Identitas Merek', price: 300000, days: 2, desc: 'Logo, palet warna, & panduan tipografi' }
];

const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState('landing');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientBrief, setClientBrief] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    const pkg = basePackages.find(p => p.id === selectedPackage);
    if (!pkg) return;
    let cost = pkg.basePrice;
    let days = pkg.days;
    selectedAddons.forEach(addonId => {
      const addon = addOnFeatures.find(a => a.id === addonId);
      if (addon) { cost += addon.price; days += addon.days; }
    });
    setTotalCost(cost);
    setTotalDays(days);
  }, [selectedPackage, selectedAddons]);

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  const formatCurrency = (val) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const selectedPkgObj = basePackages.find(p => p.id === selectedPackage);
    const selectedAddonsList = selectedAddons.map(id => addOnFeatures.find(a => a.id === id)?.label).filter(Boolean);
    const addonsText = selectedAddonsList.length > 0 ? selectedAddonsList.map(a => `- ${a}`).join('%0A') : '- Tidak ada';
    const message =
      `Halo Pixelink!%0A%0ASaya tertarik untuk mendiskusikan proyek web baru. Berikut detail rencana proyek saya:%0A%0A` +
      `*Nama:* ${clientName || 'Klien Baru'}%0A` +
      `*Email:* ${clientEmail || '-'}%0A%0A` +
      `*Paket Utama:* ${selectedPkgObj?.label}%0A` +
      `*Fitur Tambahan:*%0A${addonsText}%0A%0A` +
      `*Estimasi Biaya:* ${formatCurrency(totalCost)}%0A` +
      `*Estimasi Waktu:* ± ${totalDays} Hari%0A%0A` +
      `*Deskripsi Singkat:*%0A"${clientBrief || 'Ingin mendiskusikan lebih lanjut di chat'}"%0A%0A` +
      `Mohon diinfokan ketersediaan waktu untuk meeting singkat. Terima kasih!`;
    const waNumber = '6281234567890';
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="planner" className="py-32 relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-20 text-center">
          <span
            className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-accent)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            [ Perencana Proyek ]
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3.25rem)] uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Rancang Rencana <span className="text-tech">Proyek Anda</span>
          </h2>
          <p className="text-[var(--clr-text-muted)] max-w-[600px] text-[1.05rem] mt-2">
            Pilih kebutuhan digital Anda secara transparan. Kalkulator kami akan menyusun estimasi biaya dan waktu pengerjaan secara langsung dan akurat.
          </p>
        </div>

        {/* Planner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-14 items-start">

          {/* Left — Form */}
          <div className="pixel-corners relative bg-[var(--bg-card)] border border-[var(--clr-border)] rounded-[4px] p-8 overflow-hidden">
            <div className="halftone-overlay" />

            <form onSubmit={handleSendWhatsApp} className="flex flex-col">

              {/* Step 1 */}
              <div className="flex flex-col gap-6 border-b border-[var(--clr-border)] pb-8 mb-8">
                <h3
                  className="text-[0.85rem] text-[var(--clr-text-muted)] tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  1. Informasi Klien
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="pixel-input"
                      placeholder="Masukkan nama Anda"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)]"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="pixel-input"
                      placeholder="nama@email.com"
                      value={clientEmail}
                      onChange={e => setClientEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-6 border-b border-[var(--clr-border)] pb-8 mb-8">
                <h3
                  className="text-[0.85rem] text-[var(--clr-text-muted)] tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  2. Pilih Paket Website
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {basePackages.map(pkg => (
                    <label
                      key={pkg.id}
                      className={`relative flex flex-col gap-2 p-5 rounded-md border transition-all duration-300
                        ${selectedPackage === pkg.id
                          ? 'border-[var(--clr-accent)] bg-[rgba(0,242,254,0.04)] shadow-[0_0_15px_rgba(0,242,254,0.1)]'
                          : 'border-[var(--clr-border)] bg-white/[0.015] hover:border-[rgba(0,242,254,0.3)] hover:bg-white/[0.03]'
                        }`}
                    >
                      <input
                        type="radio"
                        name="projectPackage"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center gap-2">
                        <span
                          className="text-[0.85rem] font-bold text-[var(--clr-text)] tracking-[-0.02em]"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {pkg.label}
                        </span>
                        <span
                          className="text-[0.8rem] text-[var(--clr-accent)] font-bold shrink-0"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {formatCurrency(pkg.basePrice)}
                        </span>
                      </div>
                      <p className="text-[0.78rem] text-[var(--clr-text-muted)] leading-snug">{pkg.desc}</p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-6 border-b border-[var(--clr-border)] pb-8 mb-8">
                <h3
                  className="text-[0.85rem] text-[var(--clr-text-muted)] tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  3. Fitur Tambahan (Opsional)
                </h3>
                <div className="flex flex-col gap-3">
                  {addOnFeatures.map(addon => (
                    <label
                      key={addon.id}
                      className={`flex justify-between items-center gap-6 p-4 rounded-md border transition-all duration-300
                        ${selectedAddons.includes(addon.id)
                          ? 'border-[var(--clr-accent)] bg-[rgba(0,242,254,0.04)] shadow-[0_0_15px_rgba(0,242,254,0.08)]'
                          : 'border-[var(--clr-border)] bg-white/[0.015] hover:border-[rgba(0,242,254,0.3)] hover:bg-white/[0.03]'
                        } sm:flex-row flex-col sm:items-center items-start`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddons.includes(addon.id)}
                        onChange={() => handleAddonToggle(addon.id)}
                        className="sr-only"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.9rem] font-semibold text-[var(--clr-text)]">{addon.label}</span>
                        <p className="text-[0.75rem] text-[var(--clr-text-muted)]">{addon.desc}</p>
                      </div>
                      <div
                        className="flex flex-col items-end shrink-0 gap-0.5 sm:border-t-0 border-t border-[var(--clr-border)] sm:pt-0 pt-3 sm:w-auto w-full"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        <span className="text-[0.8rem] text-[var(--clr-accent)] font-bold">+ {formatCurrency(addon.price)}</span>
                        <span className="text-[0.7rem] text-[var(--clr-text-muted)]">+ {addon.days} Hari</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col gap-6 pb-8 mb-8">
                <h3
                  className="text-[0.85rem] text-[var(--clr-text-muted)] tracking-[0.1em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  4. Gambaran Singkat Proyek Anda
                </h3>
                <textarea
                  className="pixel-input text-area-brief"
                  rows="3"
                  placeholder="Contoh: Saya ingin landing page untuk usaha kosmetik dengan tema merah muda, tampilan bersih, dan kesan elegan."
                  value={clientBrief}
                  onChange={e => setClientBrief(e.target.value)}
                />
              </div>

              <motion.button
                type="submit"
                className="pixel-corners btn-overlay relative w-full flex justify-center items-center gap-2 bg-[var(--clr-accent)] text-[var(--bg-deep)] px-8 py-4 text-[0.85rem] font-bold tracking-[0.08em] uppercase rounded-[4px] overflow-hidden border border-[var(--clr-accent)] transition-all duration-300 hover:bg-[var(--bg-surface)] hover:text-[var(--clr-accent)] hover:shadow-[0_0_20px_var(--clr-accent-glow)]"
                style={{ fontFamily: 'var(--font-mono)' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={16} /> Hubungi Kami di WhatsApp
              </motion.button>
            </form>
          </div>

          {/* Right — Live Dashboard */}
          <div className="lg:sticky lg:top-[7.5rem]">
            <div className="pixel-corners relative bg-[rgba(14,20,32,0.8)] border border-[rgba(0,242,254,0.12)] rounded-[4px] p-10 backdrop-blur-xl overflow-hidden">
              <div className="halftone-overlay" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-0">
                <Calculator size={20} className="text-cyan-glow" style={{ color: 'var(--clr-accent)' }} />
                <span
                  className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--clr-text-muted)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Dasbor Estimasi Langsung
                </span>
              </div>

              <div className="w-full h-px my-6" style={{ background: 'linear-gradient(90deg, rgba(0,242,254,0.15) 0%, transparent 100%)' }} />

              {/* Package */}
              <div className="flex flex-col gap-2 mb-0">
                <span
                  className="text-[0.75rem] text-[var(--clr-text-muted)] uppercase tracking-[0.05em]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Paket Terpilih:
                </span>
                <span
                  className="text-[1.25rem] font-extrabold text-[var(--clr-text)] tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {basePackages.find(p => p.id === selectedPackage)?.label}
                </span>
              </div>

              <div className="w-full h-px my-6" style={{ background: 'linear-gradient(90deg, rgba(0,242,254,0.15) 0%, transparent 100%)' }} />

              {/* Cost */}
              <div className="flex items-center gap-5">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'var(--clr-gradient)', boxShadow: '0 0 20px rgba(0,242,254,0.35)' }}
                >
                  <DollarSign size={24} color="var(--bg-deep)" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[0.75rem] text-[var(--clr-text-muted)] uppercase tracking-[0.05em] mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Estimasi Anggaran
                  </span>
                  <span
                    className="text-[1.5rem] font-black leading-tight text-cyan-glow"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {formatCurrency(totalCost)}
                  </span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-5 mt-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', boxShadow: '0 0 20px rgba(59,130,246,0.35)' }}
                >
                  <Clock size={24} color="var(--bg-deep)" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[0.75rem] text-[var(--clr-text-muted)] uppercase tracking-[0.05em] mb-0.5"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Estimasi Pengerjaan
                  </span>
                  <span
                    className="text-[1.5rem] font-black leading-tight text-blue-glow"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    ± {totalDays} Hari Kerja
                  </span>
                </div>
              </div>

              <div className="w-full h-px my-6" style={{ background: 'linear-gradient(90deg, rgba(0,242,254,0.15) 0%, transparent 100%)' }} />

              {/* HUD */}
              <div
                className="bg-black/25 border border-[var(--clr-border)] p-4 rounded-[4px] text-[0.68rem]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span className="block text-[var(--clr-accent)] opacity-80 font-bold mb-2 tracking-[0.2em] uppercase text-[0.68rem]">
                  STATUS // KALIBRASI LANGSUNG
                </span>
                <div className="flex flex-col gap-1.5">
                  {[
                    ['SYS.STATE', <span className="text-emerald-400 font-bold">SIAP</span>],
                    ['CURR.PKG', selectedPackage.toUpperCase()],
                    ['ADDONS.N', `${selectedAddons.length} DIPILIH`],
                    ['CALC.HASH', `PXL-${Math.floor(totalCost / 1000)}`],
                  ].map(([lbl, val]) => (
                    <div key={lbl} className="flex justify-between text-white/35">
                      <span>{lbl}</span>
                      <span className="text-[var(--clr-text-muted)]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deco dots */}
              <div className="flex justify-end items-center gap-1.5 mt-6">
                {[0,1,2].map(i => (
                  <div key={i} className={`grid-deco-dot w-1 h-1 bg-[var(--clr-accent)] opacity-30`} />
                ))}
                <div className="w-10 h-px bg-[var(--clr-border)]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
