/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Sparkles,
  CheckCircle,
  TrendingUp,
  MessageSquare,
  Award,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield,
  Layers,
  Flame,
  MousePointer,
  Send
} from "lucide-react";
import { SERVICES, PORTFOLIOS, TESTIMONIALS, FAQS } from "./data";
import { PortfolioItem } from "./types";
import { InteractiveForge } from "./components/InteractiveForge";
import { PortfolioModal } from "./components/PortfolioModal";

export function SwordLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <img
      src="https://lh3.googleusercontent.com/aida/ADBb0ujPNlrjT25BTwl0FKYITSRmbSzWTRDBqPlJeQpyC93yk25rFVznKlvpywYZC598X0Q080I486IIplB2dV6iR3etY66JzEJgJ9J7yCqjWWNWlGQ6FlyPGR8AE147-ubg2Fvdj8dSGeF74-y3rbAergfRw70u8s_4-MyvjCVh8IJA0m0hJKv2IIzFkJIlLS0mSWg5KygPBdJIGXuLyTebZcQP6_lGV1_3b_pNHL9OiFunSkEBMTLINpj21-4"
      alt="Sword Studio Logo"
      className={`${className} object-contain rounded-sm`}
      referrerPolicy="no-referrer"
    />
  );
}

export default function App() {
  // Mobile navigation drawer toggle
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Navigation active section tracking
  const [activeSection, setActiveSection] = useState("home");

  // Portfolio modal popup details
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null);

  // FAQ active list state
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  // Lead Generation/Consultation form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [budgetRange, setBudgetRange] = useState("IDR 15M - 30M");
  const [clientMessage, setClientMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Track scroll position to update navbar translucent state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar translucency
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Synchronize current highlight with active section elements
      const sections = ["home", "about", "services", "portfolio", "engines", "testimonials", "faq", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      alert("Silakan lengkapi Nama dan Email Anda!");
      return;
    }

    setIsFormSubmitting(true);
    // Simulate interactive forge stamp submission
    setTimeout(() => {
      setIsFormSubmitting(false);
      setIsFormSubmitted(true);
      // Automatically reset fields
      setClientName("");
      setClientEmail("");
      setCompanyName("");
      setClientMessage("");
    }, 2000);
  };

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "engines", label: "BRAND ENGINE" },
    { id: "contact", label: "CONTACT" }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans selection:bg-primary/20 flex flex-col relative">
      {/* Background radial atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px]" />
      </div>

      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/15 py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2.5 group">
            <SwordLogo className="h-9 w-auto hover:rotate-6 transition-transform duration-300" />
            <span className="font-serif text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              SWORD <span className="text-primary font-light">STUDIO</span>
            </span>
          </a>

          {/* Nav links for large desktop screen sizes */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[11px] font-bold tracking-[0.16em] uppercase transition-colors relative py-1 ${
                  activeSection === link.id ? "text-primary font-medium" : "text-on-surface-variant hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Social Icons / Phone Call Shortcut Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="border border-primary/20 hover:border-primary/50 text-white hover:text-primary text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-sm transition-all"
            >
              FREE CONSULTATION
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-primary p-2 active:scale-95 transition-transform"
            aria-label="Buka Menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 z-50 bg-surface-container-low border-l border-outline/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="font-serif text-2xl font-bold tracking-tight text-white">
                    SWORD <span className="text-primary font-light">STUDIO</span>
                  </span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-on-surface-variant hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setIsDrawerOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-lg border text-sm tracking-widest font-bold uppercase transition-all ${
                        activeSection === link.id
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-outline-variant/10 hover:border-outline-variant hover:bg-surface-container-high text-on-surface-variant hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={14} className={activeSection === link.id ? "text-primary" : "text-on-surface-variant"} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer footer values */}
              <div className="space-y-4 pt-6 border-t border-outline-variant/10">
                <a
                  href="https://wa.me/yournumber"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center block gold-gradient text-on-primary text-xs font-bold tracking-widest uppercase py-3.5 rounded hover:opacity-90 transition-opacity"
                >
                  WHATSAPP CHAT
                </a>
                <p className="text-[10px] text-center text-on-surface-variant font-mono uppercase">
                  © 2026 Sword Studio. Legacy Branders.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Body */}
      <main className="flex-1 relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[92vh] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left pitch copy text */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-sm">
                  <Sparkles size={12} className="text-primary animate-pulse" />
                  <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-primary uppercase">
                    ARSITEK IDENTITAS BRAND MODERN
                  </span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-[1.05] text-white">
                  Tajamkan Identitas,<br />
                  <span className="text-gradient-gold">Perkuat Legasi.</span>
                </h1>
              </div>

              <p className="text-on-surface-variant text-base md:text-lg max-w-xl leading-relaxed font-light">
                Kami merancang brand Anda dengan presisi <strong className="text-primary font-medium">&ldquo;Razor-Sharp&rdquo;</strong> untuk dominasi pasar masa kini. Kreativitas tanpa kompromi, didukung strategi yang tak tergoyahkan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#contact"
                  className="gold-gradient text-on-primary font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-sm shadow-lg hover:scale-105 transition-transform text-center active:scale-95 shrink-0"
                >
                  MULAI KONSULTASI
                </a>
                <a
                  href="#portfolio"
                  className="glass-card hover:bg-surface-container border border-outline-variant/30 text-white font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-sm transition-colors text-center shrink-0"
                >
                  LIHAT KARYA
                </a>
              </div>

              {/* Micro specs bullet banners */}
              <div className="pt-6 border-t border-outline-variant/1s grid grid-cols-2 max-w-md gap-4">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-primary shrink-0" />
                  <p className="text-[11px] font-mono tracking-wider font-semibold text-white uppercase">99% Client Retention</p>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-primary shrink-0" />
                  <p className="text-[11px] font-mono tracking-wider font-semibold text-white uppercase">150+ Brands Crafted</p>
                </div>
              </div>
            </div>

            {/* Right majestic sword and luxury geometry */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Golden background aura */}
              <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent blur-3xl rounded-full" />
              
              <div className="relative w-full max-w-md aspect-square glass-card rounded-[32px] md:rounded-[48px] flex items-center justify-center p-8 md:p-14 md:rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl border border-primary/20 bg-surface-container/40 blur-glow">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujPNlrjT25BTwl0FKYITSRmbSzWTRDBqPlJeQpyC93yk25rFVznKlvpywYZC598X0Q080I486IIplB2dV6iR3etY66JzEJgJ9J7yCqjWWNWlGQ6FlyPGR8AE147-ubg2Fvdj8dSGeF74-y3rbAergfRw70u8s_4-MyvjCVh8IJA0m0hJKv2IIzFkJIlLS0mSWg5KygPBdJIGXuLyTebZcQP6_lGV1_3b_pNHL9OiFunSkEBMTLINpj21-4"
                  alt="Decorative Sword Element"
                  className="w-full h-auto drop-shadow-[0_15px_30px_rgba(242,202,80,0.25)] select-none pointer-events-none rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating micro glass visualizers */}
              <div className="absolute -top-6 -left-6 w-16 h-16 glass-card rounded-xl flex items-center justify-center animate-bounce duration-5000 border border-primary/20">
                <SwordLogo className="w-10 h-10 object-contain" />
              </div>
              <div className="absolute -bottom-8 right-4 w-28 h-28 glass-card rounded-full blur-[1px] border border-outline-variant/10" />
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column Close-up Image */}
              <div className="lg:col-span-6 relative h-[380px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-outline-variant/10">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujPNlrjT25BTwl0FKYITSRmbSzWTRDBqPlJeQpyC93yk25rFVznKlvpywYZC598X0Q080I486IIplB2dV6iR3etY66JzEJgJ9J7yCqjWWNWlGQ6FlyPGR8AE147-ubg2Fvdj8dSGeF74-y3rbAergfRw70u8s_4-MyvjCVh8IJA0m0hJKv2IIzFkJIlLS0mSWg5KygPBdJIGXuLyTebZcQP6_lGV1_3b_pNHL9OiFunSkEBMTLINpj21-4"
                  alt="Crafting artisan sword metal closeup"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                {/* Noir shadows overlaying the bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/10 to-transparent" />
              </div>

              {/* Right Column philosophy */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block mb-2">FILOSOFI KAMI</span>
                  <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                    Mentransformasi Estetika Menjadi<br className="hidden sm:block" /> Strategi Presisi
                  </h2>
                </div>

                <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed font-light">
                  <p>
                    Di <strong className="text-white font-medium">Sword Studio</strong>, kami meyakini bahwa desain visual bukan sekadar pemanis estetik hiasan luar. Desain merupakan senjata strategis utama bagi kedaulatan pasar bisnis Anda.
                  </p>
                  <p>
                    Layaknya seorang arsitek yang merancang karya masterpiece, kami menggabungkan dedikasi keahlian berseni tinggi dengan analisis mendalam pergerakan pasar. Setiap lekuk garis identitas, pemilihan tipografi, dan kombinasi corak warna kami rancang dengan tujuan absolut: memotong riuhnya kompetisi industri dan mengabadikan legasi Anda.
                  </p>
                </div>

                {/* Stats layout */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="glass-card p-5 rounded-xl border border-outline-variant/10 group hover:border-primary/20 transition-colors">
                    <h4 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-1">99%</h4>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant">Client Retention</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl border border-outline-variant/10 group hover:border-primary/20 transition-colors">
                    <h4 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-1">150+</h4>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant">Brands Crafted</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 md:py-28 bg-surface-container-lowest/40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header copy */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block">LAYANAN STRATEGIS</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">Solusi Kreatif Tanpa Kompromi</h2>
              <p className="text-sm text-on-surface-variant max-w-lg mx-auto font-light leading-relaxed">
                Menawarkan rangkaian rancangan artisan yang memadukan keindahan visual premium dengan presisi bisnis.
              </p>
            </div>

            {/* Services Cards mapping */}
            <div className="grid md:grid-cols-3 gap-6">
              {SERVICES.map((serv) => (
                <div
                  key={serv.id}
                  className="glass-card p-8 rounded-2xl md:rounded-[32px] group hover:border-primary/30 hover:scale-[1.01] transition-all duration-300 shadow-md border border-outline-variant/10 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${
                      serv.isGoldIcon 
                        ? "gold-gradient text-on-primary border-primary/20" 
                        : "bg-surface-container text-primary border-primary/10"
                    }`}>
                      <span className="material-symbols-outlined text-[28px]">{serv.icon}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                        {serv.title}
                      </h3>
                      <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-light">
                        {serv.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-2.5 pt-4 border-t border-outline-variant/10">
                    {serv.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        <span className="text-xs font-semibold uppercase font-mono tracking-wider text-on-surface-variant">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* PORTFOLIO SECTION (Bento Case Grid) */}
        <section id="portfolio" className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
              <div>
                <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block mb-2">GALERI KARYA</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">Selected Cases</h2>
              </div>
              <div>
                <a
                  href="#contact"
                  className="font-mono text-xs font-bold text-on-surface hover:text-primary tracking-widest uppercase flex items-center gap-2 border-b border-primary/30 pb-1 transition-all"
                >
                  MULAI DISKUSI PROYEK <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* 4-Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {PORTFOLIOS.map((item, index) => {
                const colSpanClass = index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4";
                const isTall = index === 0 || index === 1;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPortfolio(item)}
                    className={`${colSpanClass} group relative overflow-hidden rounded-[24px] md:rounded-[32px] glass-card border border-outline-variant/10 cursor-pointer ${
                      isTall ? "h-[360px] md:h-[480px]" : "h-[340px] md:h-[400px]"
                    }`}
                  >
                    {/* Showcase Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 md:p-8 flex flex-col justify-end transition-opacity" />

                    {/* Subtle micro mouse click hint */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-on-primary px-3 py-1 rounded-sm text-[9px] font-mono tracking-widest font-bold uppercase flex items-center gap-1 shadow">
                      <MousePointer size={10} /> DETIL KASUS
                    </div>

                    {/* Meta info */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-1 z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-primary block">
                        {item.tag}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant max-w-md line-clamp-1 truncate pt-1 font-light opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* TEAM FLAME BRAND GENERATOR ENGINE */}
        <section id="engines" className="py-20 md:py-24 bg-surface-container-lowest/60 relative border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <InteractiveForge />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block">EMPATI KLIEN</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-medium">Apa Kata Klien Kami</h2>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed pt-1">
                Bukti kepuasan dari brand dan korporasi terpandang yang telah berkembang bersama kami.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4.5xl mx-auto">
              {TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="glass-card p-8 rounded-2xl md:rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-outline-variant/10 shadow-md group hover:border-primary/20 transition-all"
                >
                  {/* Quotes Icon inside and behind */}
                  <span className="absolute -top-4 -right-4 font-serif text-[130px] font-bold text-primary/[0.04] leading-none select-none pointer-events-none">
                    &ldquo;
                  </span>

                  <p className="font-serif text-base md:text-lg text-on-surface italic leading-relaxed z-10 mb-8">
                    &ldquo;{test.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 z-10 border-t border-outline-variant/10 pt-5">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border border-primary/25 bg-surface-container shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs md:text-sm font-bold tracking-wide text-white">{test.name}</h4>
                      <p className="text-[10px] text-primary tracking-widest font-mono uppercase">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQS SECTION */}
        <section id="faq" className="py-20 md:py-24 relative bg-surface-container-lowest/35">
          <div className="max-w-3xl mx-auto px-6">
            
            <div className="text-center mb-14 space-y-2">
              <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block">FAQ</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-medium">Pertanyaan Umum</h2>
            </div>

            {/* Dynamic FAQ Item Toggler */}
            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = activeFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="glass-card rounded-xl overflow-hidden border border-outline-variant/10 hover:border-outline-variant/30 transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                      className="w-full px-5 py-4.5 flex justify-between items-center text-left hover:bg-surface-container/20 transition-colors gap-4"
                    >
                      <span className="font-serif text-base md:text-lg text-white font-semibold">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp size={16} className="text-primary" />
                      ) : (
                        <ChevronDown size={16} className="text-on-surface-variant" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden bg-surface-container-low/40"
                        >
                          <div className="p-5 text-xs md:text-sm text-on-surface-variant leading-relaxed font-light border-t border-outline-variant/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CONSULTATION & TELEPHONE CTA SECTION */}
        <section id="contact" className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column WA and Contact text */}
              <div className="lg:col-span-5 space-y-6 md:space-y-8">
                <div>
                  <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] block mb-2">HUBUNGI KAMI</span>
                  <h2 className="font-serif text-3xl md:text-5xl font-medium text-white leading-tight">
                    Siap Untuk Naik Kelas?
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-4 font-light">
                    Jangan biarkan aset brand Anda tumpul dan tergerus kompetitor. Hubungi tim konsultan kreatif kami yang siap mentransformasikan esensi gagasan Anda menjadi kebanggaan legendaris di pasar.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl border border-outline-variant/10 bg-surface-container-low">
                    <MessageSquare size={22} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Konsultasi Express</h4>
                      <p className="text-[11px] text-on-surface-variant">Hubungi studio pimpinan kami via WhatsApp langsung.</p>
                      <a
                        href="https://wa.me/yournumber?text=Halo%20Sword%20Studio,%20saya%20tertarik%20mengonsultasikan%20brand%20saya."
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1 mt-2"
                      >
                        Mulai Chat WA <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Interactive Consultation Forge Form */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-outline-any/15 shadow-2xl relative overflow-hidden bg-surface-container/30 blur-glow">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                  <AnimatePresence mode="wait">
                    {!isFormSubmitted ? (
                      <motion.form
                        key="contact-form"
                        onSubmit={handleFormSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5 relative z-10"
                      >
                        <h3 className="font-serif text-2xl font-bold text-gradient-gold">Daftar Formulir Konsultasi</h3>
                        <p className="text-xs text-on-surface-variant font-light">Lengkapi rangkuman data Anda, maka tim kami akan menghubungi Anda dalam waktu 1x24 jam.</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono tracking-wider text-on-surface font-semibold uppercase mb-1.5">Nama Lengkap *</label>
                            <input
                              type="text"
                              required
                              value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              placeholder="cth: Bagus Tri"
                              className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-mono tracking-wider text-on-surface font-semibold uppercase mb-1.5">Email Klien *</label>
                            <input
                              type="email"
                              required
                              value={clientEmail}
                              onChange={(e) => setClientEmail(e.target.value)}
                              placeholder="cth: bagus@corporat.com"
                              className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-mono tracking-wider text-on-surface font-semibold uppercase mb-1.5">Nama Entitas Bisnis</label>
                            <input
                              type="text"
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                              placeholder="cth: Nusantara Holding"
                              className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-mono tracking-wider text-on-surface font-semibold uppercase mb-1.5">Perkiraan Anggaran</label>
                            <select
                              value={budgetRange}
                              onChange={(e) => setBudgetRange(e.target.value)}
                              className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary"
                            >
                              <option value="IDR 15M - 30M">IDR 15 Juta - 30 Juta</option>
                              <option value="IDR 30M - 60M">IDR 30 Juta - 60 Juta</option>
                              <option value="IDR 60M+">IDR 60 Juta - Diatasnya</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono tracking-wider text-on-surface font-semibold uppercase mb-1.5">Detail Rencana Proyek</label>
                          <textarea
                            rows={3}
                            value={clientMessage}
                            onChange={(e) => setClientMessage(e.target.value)}
                            placeholder="Tuliskan tantangan brand Anda..."
                            className="w-full bg-surface-container-low border border-outline-variant/20 rounded px-4 py-3 text-xs text-on-surface focus:outline-none focus:border-primary resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isFormSubmitting}
                          className="w-full gold-gradient text-on-primary font-mono text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          <Send size={12} className={isFormSubmitting ? "animate-ping" : ""} />
                          {isFormSubmitting ? "KIRIM..." : "AJUKAN PROPOSAL DESAIN"}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success-form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-6 space-y-5 relative z-10"
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto text-primary">
                          <CheckCircle size={28} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-serif text-2xl font-bold text-gradient-gold">Proposal Berhasil Terkirim!</h4>
                          <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                            Terima kasih telah mempercayakan identitas Anda. Tim konsultan kreatif Sword Studio akan menganalisis profil bisnis Anda terlebih dahulu sebelum merancang draf visual kami.
                          </p>
                        </div>
                        <button
                          onClick={() => setIsFormSubmitted(false)}
                          className="text-xs text-primary font-mono font-medium hover:underline flex items-center justify-center gap-1 mx-auto"
                        >
                          Kirim Formulir Lain
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/15 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-on-surface-variant">
          
          {/* Logo container brand name */}
          <div className="flex items-center gap-2">
            <SwordLogo className="h-7 w-auto select-none pointer-events-none" />
            <span className="font-serif text-sm font-bold tracking-widest text-white uppercase">
              SWORD <strong className="text-primary font-light">STUDIO</strong>
            </span>
          </div>

          {/* Social media links */}
          <div className="flex gap-6 font-mono text-[10px] tracking-widest uppercase font-bold">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              INSTAGRAM
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              LINKEDIN
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              TWITTER
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              BEHANCE
            </a>
          </div>

          <p className="font-mono text-[9px] tracking-wider text-center md:text-right">
            © 2026 SWORD STUDIO. CRAFTING LEGENDS SINCE 2024. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Sliding Detailed Portfolio Modal */}
      <AnimatePresence>
        {selectedPortfolio && (
          <PortfolioModal
            item={selectedPortfolio}
            onClose={() => setSelectedPortfolio(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
