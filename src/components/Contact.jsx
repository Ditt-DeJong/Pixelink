import React, { useState, useEffect } from 'react';
import { Calculator, Clock, Send, MessageSquare, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const basePackages = [
  { id: 'landing', label: 'Landing Page Bisnis', basePrice: 800000, days: 4, desc: 'Ideal untuk pemasaran & personal branding' },
  { id: 'comprof', label: 'Company Profile', basePrice: 1500000, days: 6, desc: 'Untuk kredibilitas korporat & organisasi' },
  { id: 'undangan', label: 'Undangan Digital', basePrice: 300000, days: 3, desc: 'Animasi premium & form RSVP WhatsApp' },
  { id: 'portfolio', label: 'Portfolio Website', basePrice: 600000, days: 4, desc: 'Galeri khusus kreator & pekerja seni' }
];

const addOnFeatures = [
  { id: 'seo', label: 'Full Advanced SEO & Analytics', price: 150000, days: 1, desc: 'Keterbacaan Google & Laporan Bulanan' },
  { id: 'multilang', label: 'Dukungan Multi-Language', price: 200000, days: 2, desc: 'Inggris + Indonesia' },
  { id: 'whatsapp', label: 'Integrasi Sistem WhatsApp', price: 100000, days: 1, desc: 'Notifikasi & direct booking chat' },
  { id: 'anim', label: 'Premium Micro-Animations', price: 150000, days: 1, desc: 'Framer Motion & transisi eksklusif' },
  { id: 'branding', label: 'Paket Logo & Branding Dasar', price: 300000, days: 2, desc: 'Logo, palet warna, & panduan font' }
];

const Contact = () => {
  const [selectedPackage, setSelectedPackage] = useState('landing');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientBrief, setClientBrief] = useState('');
  
  const [totalCost, setTotalCost] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  // Recalculate cost and time
  useEffect(() => {
    const pkg = basePackages.find(p => p.id === selectedPackage);
    if (!pkg) return;

    let cost = pkg.basePrice;
    let days = pkg.days;

    selectedAddons.forEach(addonId => {
      const addon = addOnFeatures.find(a => a.id === addonId);
      if (addon) {
        cost += addon.price;
        days += addon.days;
      }
    });

    setTotalCost(cost);
    setTotalDays(days);
  }, [selectedPackage, selectedAddons]);

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(val);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    const selectedPkgObj = basePackages.find(p => p.id === selectedPackage);
    const selectedAddonsList = selectedAddons
      .map(id => addOnFeatures.find(a => a.id === id)?.label)
      .filter(Boolean);

    const addonsText = selectedAddonsList.length > 0 
      ? selectedAddonsList.map(a => `- ${a}`).join('%0A') 
      : '- Tidak ada';

    // WA message format
    const message = `Halo Pixelink!%0A%0ASaya tertarik untuk mendiskusikan proyek web baru. Berikut detail rencana proyek saya:%0A%0A` +
      `*Nama:* ${clientName || 'Klien Baru'}%0A` +
      `*Email:* ${clientEmail || '-'}%0A%0A` +
      `*Paket Utama:* ${selectedPkgObj?.label}%0A` +
      `*Fitur Tambahan:*%0A${addonsText}%0A%0A` +
      `*Estimasi Biaya:* ${formatCurrency(totalCost)}%0A` +
      `*Estimasi Waktu:* ± ${totalDays} Hari%0A%0A` +
      `*Deskripsi Singkat:*%0A"${clientBrief || 'Ingin mendiskusikan lebih lanjut di chat'}"%0A%0A` +
      `Mohon diinfokan ketersediaan waktu untuk meeting singkat. Terima kasih!`;

    // Swap '6281234567890' with your active phone number
    const waNumber = '6281234567890'; 
    const url = `https://wa.me/${waNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="planner" className="planner-section">
      <div className="container">
        
        <div className="section-head text-center">
          <span className="label label--accent">[ Project Planner ]</span>
          <h2 className="section-title">Rancang Rencana <span className="text-tech">Proyek Anda</span></h2>
          <p className="section-desc">Pilih kebutuhan digital Anda secara transparan. Sistem kalkulator kami akan menyusun rincian estimasi biaya dan waktu pengerjaan secara waktu nyata.</p>
        </div>

        <div className="planner-grid">
          
          {/* Left Side - Interactive Calculator Inputs */}
          <div className="planner-form-panel pixel-card pixel-corners">
            <div className="halftone-overlay"></div>
            
            <form onSubmit={handleSendWhatsApp}>
              {/* Client Information */}
              <div className="form-group-section">
                <h3 className="section-subtitle-tech">1. Data Informasi Klien</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label className="label">Nama Anda</label>
                    <input 
                      type="text" 
                      className="pixel-input"
                      placeholder="Masukkan nama" 
                      value={clientName} 
                      onChange={(e) => setClientName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Alamat Email</label>
                    <input 
                      type="email" 
                      className="pixel-input"
                      placeholder="nama@email.com" 
                      value={clientEmail} 
                      onChange={(e) => setClientEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Package Select */}
              <div className="form-group-section mt-4">
                <h3 className="section-subtitle-tech">2. Pilih Model Paket Web</h3>
                <div className="packages-radio-grid">
                  {basePackages.map((pkg) => (
                    <label 
                      key={pkg.id} 
                      className={`package-radio-card ${selectedPackage === pkg.id ? 'active' : ''}`}
                    >
                      <input 
                        type="radio" 
                        name="projectPackage" 
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={() => setSelectedPackage(pkg.id)}
                        className="sr-only"
                      />
                      <div className="package-radio-header">
                        <span className="package-radio-title">{pkg.label}</span>
                        <span className="package-radio-cost">{formatCurrency(pkg.basePrice)}</span>
                      </div>
                      <p className="package-radio-desc">{pkg.desc}</p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Addons Selection */}
              <div className="form-group-section mt-4">
                <h3 className="section-subtitle-tech">3. Tambahkan Fitur Tambahan (Opsional)</h3>
                <div className="addons-checkbox-list">
                  {addOnFeatures.map((addon) => (
                    <label 
                      key={addon.id} 
                      className={`addon-checkbox-card ${selectedAddons.includes(addon.id) ? 'active' : ''}`}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedAddons.includes(addon.id)}
                        onChange={() => handleAddonToggle(addon.id)}
                        className="sr-only"
                      />
                      <div className="addon-checkbox-info">
                        <span className="addon-checkbox-title">{addon.label}</span>
                        <p className="addon-checkbox-desc">{addon.desc}</p>
                      </div>
                      <div className="addon-checkbox-price">
                        <span>+ {formatCurrency(addon.price)}</span>
                        <span className="addon-checkbox-time">+ {addon.days} Hari</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Brief */}
              <div className="form-group-section mt-4">
                <h3 className="section-subtitle-tech">4. Gambaran Singkat Proyek</h3>
                <div className="form-group">
                  <textarea 
                    className="pixel-input text-area-brief"
                    rows="3"
                    placeholder="Contoh: Saya ingin website landing page untuk usaha kosmetik saya dengan tema merah muda, clean, dan elegant."
                    value={clientBrief}
                    onChange={(e) => setClientBrief(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-action-btn-container mt-4">
                <motion.button 
                  type="submit" 
                  className="btn btn-primary w-100 pixel-corners btn-planner-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare size={16} /> Hubungi Kami di WhatsApp
                </motion.button>
              </div>
            </form>

          </div>

          {/* Right Side - Live Quote Display Dashboard */}
          <div className="planner-display-panel">
            <div className="sticky-display-card pixel-card pixel-corners">
              <div className="halftone-overlay"></div>
              
              <div className="display-card-header">
                <Calculator size={20} className="text-cyan-glow" />
                <span className="label">Live Estimate Dashboard</span>
              </div>
              
              <div className="display-card-divider"></div>
              
              <div className="display-summary-section">
                <span className="summary-label">Proyek Terpilih:</span>
                <span className="summary-package-name">
                  {basePackages.find(p => p.id === selectedPackage)?.label}
                </span>
              </div>

              <div className="display-card-divider"></div>

              {/* Pricing Output */}
              <div className="display-metric-row">
                <div className="display-metric-icon-box bg-cyan-glow">
                  <DollarSign size={24} color="var(--bg-deep)" />
                </div>
                <div className="display-metric-data">
                  <span className="metric-label">Estimasi Anggaran</span>
                  <span className="metric-value text-cyan-glow">{formatCurrency(totalCost)}</span>
                </div>
              </div>

              {/* Duration Output */}
              <div className="display-metric-row mt-4">
                <div className="display-metric-icon-box bg-blue-glow">
                  <Clock size={24} color="var(--bg-deep)" />
                </div>
                <div className="display-metric-data">
                  <span className="metric-label">Estimasi Pengerjaan</span>
                  <span className="metric-value text-blue-glow">± {totalDays} Hari Kerja</span>
                </div>
              </div>

              <div className="display-card-divider"></div>

              {/* Tech details hud style */}
              <div className="tech-hud-log">
                <span className="label tech-hud-header">STATUS // LIVE CALIBRATION</span>
                <div className="tech-hud-lines">
                  <div className="hud-line"><span className="hud-lbl">SYS.STATE</span> <span className="hud-val text-green">READY</span></div>
                  <div className="hud-line"><span className="hud-lbl">CURR.PKG</span> <span className="hud-val">{selectedPackage.toUpperCase()}</span></div>
                  <div className="hud-line"><span className="hud-lbl">ADDONS.N</span> <span className="hud-val">{selectedAddons.length} SELECTED</span></div>
                  <div className="hud-line"><span className="hud-lbl">CALC.HASH</span> <span className="hud-val">PXL-{Math.floor(totalCost/1000)}</span></div>
                </div>
              </div>

              {/* Premium footer indicator inside card */}
              <div className="tech-hud-grid-deco">
                <div className="grid-deco-dot"></div>
                <div className="grid-deco-dot"></div>
                <div className="grid-deco-dot"></div>
                <div className="grid-deco-line"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
