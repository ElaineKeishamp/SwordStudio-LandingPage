/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RotateCcw, Cpu, Crown, Compass, Heart, ArrowRight } from "lucide-react";
import { BRANDING_MOTTOS } from "../data";
import { InteractiveBrand } from "../types";

export function InteractiveForge() {
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("Teknologi");
  const [archetype, setArchetype] = useState("The Sovereign (Pemimpin Pasar)");
  const [isForging, setIsForging] = useState(false);
  const [forgeProgress, setForgeProgress] = useState(0);
  const [activeStepText, setActiveStepText] = useState("");
  const [forgedResult, setForgedResult] = useState<InteractiveBrand | null>(null);

  const industries = ["Teknologi", "Gaya Hidup & Butik", "F&B Premium", "Properti & Finansial"];
  const archetypes = [
    { name: "The Sovereign (Pemimpin Pasar)", desc: "Menampilkan wibawa, kontrol penuh, kualitas legendaris, dan citra premium tingkat tertinggi.", icon: Crown },
    { name: "The Alchemist (Inovator Visioner)", desc: "Menembus batas konvensional, misterius, berteknologi canggih, dan menginspirasi transformasi.", icon: Cpu },
    { name: "The Explorer (Petualang Otentik)", desc: "Mengutamakan kebebasan, kejujuran bahan, petualangan urban, dan kekuatan struktural.", icon: Compass },
    { name: "The Lover (Sensual & Indah)", desc: "Mewujudkan kecantikan murni, sentuhan emosendiri, memanjakan indera, serta eksklusivitas personal.", icon: Heart }
  ];

  const handleForge = () => {
    if (!brandName.trim()) {
      alert("Silakan masukkan Nama Brand Anda terlebih dahulu!");
      return;
    }

    setIsForging(true);
    setForgeProgress(0);
    setForgedResult(null);

    const steps = [
      { text: "Menganalisis data filosofi brand...", delay: 200 },
      { text: "Merumuskan pilar gagasan kreatif orisinal...", delay: 800 },
      { text: "Menyusun sketsa logo dasar dengan presisi geometris...", delay: 1400 },
      { text: "Eksklusi elemen visual non-esensial...", delay: 2000 },
      { text: "Penyelarasan aksen warna emas (Gold Lining) untuk otoritas brand...", delay: 2600 },
      { text: "Finalisasi tipografi modern berdaya saing tinggi...", delay: 3200 }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setForgeProgress((prev) => Math.min(prev + 18, 100));
        setActiveStepText(step.text);
      }, step.delay);
    });

    setTimeout(() => {
      setForgeProgress(100);

      // Generate random tailored result based on selected inputs
      const mottos = BRANDING_MOTTOS[industry] || BRANDING_MOTTOS["Teknologi"];
      const selectedMotto = mottos[Math.floor(Math.random() * mottos.length)];

      let colors: { name: string; hex: string }[] = [];
      let philosophy = "";
      let badge = "";

      if (industry === "Teknologi") {
        colors = [
          { name: "Obsidian Core", hex: "#0E0E12" },
          { name: "Cyber Gold", hex: "#F2CA50" },
          { name: "Phosphor Silver", hex: "#99907C" }
        ];
        philosophy = "Mengekspresikan ketangguhan sistem digital masa depan yang dilapisi prestise tiada banding.";
        badge = "HIGH-TECH LUXURY";
      } else if (industry === "Gaya Hidup & Butik") {
        colors = [
          { name: "Velvet Charcoal", hex: "#1A1A1E" },
          { name: "Lustrous Gold", hex: "#E9C349" },
          { name: "Satin Ivory", hex: "#E5E2E7" }
        ];
        philosophy = "Mengutamakan keintiman emosional, kelembutan material kelas dunia, dan kesempurnaan jahitan visual.";
        badge = "ARTISAN COUTURE";
      } else if (industry === "F&B Premium") {
        colors = [
          { name: "Roasted Cocoa", hex: "#1C150E" },
          { name: "Champagne Hue", hex: "#FFE088" },
          { name: "Pure Sienna", hex: "#D4AF37" }
        ];
        philosophy = "Merayakan kemurnian cita rasa tradisional yang disajikan dalam kemewahan jamuan perjamuan modern.";
        badge = "AVANT-GARDE GOURMET";
      } else {
        colors = [
          { name: "Imperial Slate", hex: "#1A1C22" },
          { name: "Refined Gold", hex: "#D4AF37" },
          { name: "Alabaster White", hex: "#E3E2E7" }
        ];
        philosophy = "Sirkulasi kepemimpinan aset yang stabil dibingkai dengan arsitektur visual yang kokoh dan berwibawa.";
        badge = "LEGACY BUILDER";
      }

      setForgedResult({
        brandName: brandName.toUpperCase(),
        industry,
        archetype,
        forgedColors: colors,
        motto: selectedMotto,
        philosophy,
        badge
      });

      setIsForging(false);
    }, 4000);
  };

  const handleReset = () => {
    setBrandName("");
    setForgedResult(null);
    setForgeProgress(0);
  };

  return (
    <div className="glass-card rounded-[32px] p-6 md:p-10 border border-outline-variant/20 relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-yellow-500/5 rounded-full blur-[70px] pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Interactive Configurator Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-2">IDENTITY ENGINE</span>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Studio Rancang Identitas
            </h3>
            <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
              Temukan rancangan identitas awal brand Anda secara dinamis. Pilih spesifikasi bisnis Anda di bawah, lalu kreasikan lewat generator kreatif kami.
            </p>
          </div>

          <div className="space-y-4">
            {/* Input Brand Name */}
            <div>
              <label htmlFor="brand-input" className="block text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                Nama Brand Anda
              </label>
              <input
                id="brand-input"
                type="text"
                maxLength={40}
                placeholder="cth: Chronos, Axis, Velvet"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                disabled={isForging || forgedResult !== null}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
            </div>

            {/* Select Industry */}
            <div>
              <label className="block text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                Sektor Industri
              </label>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setIndustry(ind)}
                    disabled={isForging || forgedResult !== null}
                    className={`px-3 py-2 text-xs rounded-lg border text-left transition-all ${
                      industry === ind
                        ? "border-primary bg-primary/10 text-primary shadow-sm"
                        : "border-outline-variant/20 bg-surface-container-lowest/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    } disabled:opacity-50`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Archetype */}
            <div>
              <label className="block text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                Arketipe Kepribadian Brand
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {archetypes.map((arch) => {
                  const IconComp = arch.icon;
                  return (
                    <button
                      key={arch.name}
                      type="button"
                      onClick={() => setArchetype(arch.name)}
                      disabled={isForging || forgedResult !== null}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-lg border text-left transition-all ${
                        archetype === arch.name
                          ? "border-primary bg-primary/5 text-on-surface"
                          : "border-outline-variant/10 bg-surface-container-lowest/20 text-on-surface-variant hover:bg-surface-container-low/50"
                      } disabled:opacity-50`}
                    >
                      <span className={`p-1.5 rounded-md ${archetype === arch.name ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"}`}>
                        <IconComp size={16} />
                      </span>
                      <div>
                        <p className="text-xs font-bold leading-tight">{arch.name}</p>
                        <p className="text-[10px] text-on-surface-variant mt-0.5 leading-snug">{arch.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {!forgedResult ? (
            <button
              onClick={handleForge}
              disabled={isForging || !brandName.trim()}
              className="w-full gold-gradient text-on-primary text-xs font-bold tracking-widest uppercase py-4 px-6 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              <Sparkles size={16} className={`${isForging ? "animate-spin" : ""}`} />
              {isForging ? "MERANCANG..." : "KREASIKAN IDENTITAS BRAND"}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full border border-primary/40 hover:bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase py-4 px-6 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} />
              RANCANG ULANG BRAND
            </button>
          )}
        </div>

        {/* Right Output Window with responsive AnimatePresence previews */}
        <div className="lg:col-span-7 h-[420px] bg-surface-container-lowest/80 border border-outline-variant/10 rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center relative overflow-hidden">
          {/* Subtle Grid overlay for luxury CAD feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(242,202,80,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(242,202,80,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* 1. Empty State */}
            {!isForging && !forgedResult && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center max-w-sm space-y-4 relative z-10"
              >
                <div className="w-16 h-16 rounded-full border border-outline-variant/40 flex items-center justify-center mx-auto bg-surface-container">
                  <Sparkles size={24} className="text-primary/60" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-white">Mulai Rancang Brand Anda</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Ketik nama brand Anda, tentukan karakter industri, serta karakternya untuk merubah gagasan abstrak menjadi arsitektur visual kelas dunia.
                  </p>
                </div>
              </motion.div>
            )}

            {/* 2. Forging Anim State */}
            {isForging && (
              <motion.div
                key="forging"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 relative z-10"
              >
                {/* Simulated spark rings with scale-out loops */}
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-primary/30"
                  />
                  <motion.div
                    animate={{ scale: [1.2, 0.9, 1.2] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-2 rounded-full bg-primary/5 border border-primary/10"
                  />
                  
                  {/* Heavy Hammer Icon hammer-blow keyframe loop */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Sparkles size={40} className="text-primary drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]" />
                  </motion.div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-semibold tracking-wide text-white flex items-center gap-2 justify-center">
                    <Sparkles size={16} className="text-primary animate-pulse" />
                    Memproses Formula Kreatif...
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="w-56 h-1.5 bg-surface-container rounded-full mx-auto overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${forgeProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <p className="text-xs text-on-surface-variant italic min-h-8 max-w-xs mx-auto">
                    &ldquo;{activeStepText}&rdquo;
                  </p>
                </div>
              </motion.div>
            )}

            {/* 3. Forged Result State */}
            {forgedResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full flex flex-col justify-between relative z-10"
              >
                {/* Badge & Industry Metadata */}
                <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                  <div className="flex items-center gap-2 bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    <span className="text-[10px] font-mono font-bold text-primary tracking-wider">{forgedResult.badge}</span>
                  </div>
                  <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">{forgedResult.industry}</span>
                </div>

                {/* Main Forged Card Layout */}
                <div className="space-y-4 my-auto py-3">
                  <div className="space-y-1">
                    <h5 className="font-serif text-3xl font-bold text-gradient-gold tracking-tight">{forgedResult.brandName}</h5>
                    <p className="text-[10px] font-mono text-on-surface-variant tracking-widest italic">{forgedResult.archetype}</p>
                  </div>

                  <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-lg p-3.5 space-y-2">
                    <p className="text-xs font-serif text-white font-medium italic leading-relaxed">
                      &ldquo;{forgedResult.motto}&rdquo;
                    </p>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">
                      {forgedResult.philosophy}
                    </p>
                  </div>

                  {/* Colors & Palette Generated Render */}
                  <div>
                    <h6 className="text-[10px] font-mono font-medium text-on-surface uppercase tracking-wider mb-2">Rekomendasi Skema Warna Obsidian-Mulia</h6>
                    <div className="flex gap-2.5">
                      {forgedResult.forgedColors.map((col) => (
                        <div key={col.name} className="flex-1 flex items-center gap-2 p-1.5 rounded bg-surface-container-low border border-outline-variant/10">
                          <span className="w-5 h-5 rounded-sm border border-white/10 shrink-0" style={{ backgroundColor: col.hex }} />
                          <div className="min-w-0">
                            <p className="text-[9px] font-semibold text-white truncate">{col.name}</p>
                            <p className="text-[8px] font-mono text-on-surface-variant">{col.hex}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and Interactive CTA link */}
                <div className="pt-2 border-t border-outline-variant/10 flex items-center justify-between">
                  <p className="text-[9px] text-on-surface-variant font-mono">SWORD BRAND ENGINE v4.0</p>
                  <a
                    href={`https://wa.me/yournumber?text=Halo%20Sword%20Studio,%20saya%20tertarik%20mengembangkan%20brand%20${encodeURIComponent(forgedResult.brandName)}%20yang%20telah%20saya%20simulasikan%20lewat%20brand%20generator.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1 active:scale-95 transition-transform"
                  >
                    Bawa Rekomendasi ke WhatsApp <ArrowRight size={10} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
