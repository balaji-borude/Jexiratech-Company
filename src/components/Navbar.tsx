import React, { useState, useEffect } from 'react';
import type { ViewType } from '../types';
import { Menu, X, MessageCircle, Home, Info, Layers, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs: { key: ViewType; label: string; icon: React.ReactNode }[] = [
    { key: 'home', label: 'Home', icon: <Home size={15} /> },
    { key: 'about', label: 'About', icon: <Info size={15} /> },
    { key: 'service', label: 'Services', icon: <Layers size={15} /> },
    { key: 'product', label: 'Products', icon: <Sparkles size={15} /> },
  ];

  // Landed = Dynamic Island (docked top), Scrolled = Floating Capsule (centered)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTabClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const handleMobileContact = () => {
    onContactClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── Fixed Brand Logo — always top-left, outside the island ─────────── */}
      <div className="fixed top-0 left-0 z-50 pointer-events-none">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick('home');
          }}
          className={`pointer-events-auto inline-flex items-center gap-2.5 group cursor-pointer text-white no-underline transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
            ? 'mt-3 sm:mt-4 ml-3 sm:ml-5 px-3 py-1.5 rounded-full apple-glass-capsule'
            : 'mt-2 ml-3 sm:ml-4 px-2 py-1 bg-transparent border border-transparent'
            }`}
          title="Jexiratech Solutions"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden shadow-md border border-white/30 shrink-0 transition-transform group-hover:scale-105">
            <img
              src="/Logo/header%20logo.png"
              alt="Jexiratech Mark"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/Logo/Logo.png';
              }}
            />
          </div>
          <div className="flex flex-col text-left pr-1 sm:pr-2">
            <span className="font-extrabold text-white tracking-tight text-sm sm:text-base leading-none drop-shadow-md">
              Jexiratech
            </span>
          </div>
        </a>
      </div>

      {/* ── Dynamic Island → Floating Capsule (nav tabs only) ──────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-center gap-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
            /* Floating Capsule */
            ? 'mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full apple-glass-capsule'
            /* Dynamic Island — docked, rounded bottom, genuine Apple liquid glass */
            : '-mt-0.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-b-[20px] rounded-t-none !border-t-0 apple-glass-island'
            }`}
        >
          {/* Desktop Nav tabs */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {tabs.map((tab) => {
              const isActive = currentView === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                    ? 'apple-glass-tab-active font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  onClick={() => handleTabClick(tab.key)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-slate-950/65 backdrop-blur-md pt-20 px-4 pb-6 flex flex-col justify-start animate-[fadeIn_0.25s_ease-out_forwards]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#071d20]/95 backdrop-blur-2xl text-white rounded-3xl p-5 shadow-2xl border border-[#2bb3be]/30 max-w-sm w-full mx-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2bb3be]">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1.5">
              {tabs.map((tab) => {
                const isActive = currentView === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => handleTabClick(tab.key)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer ${isActive
                      ? 'bg-[#124045] text-white shadow-md border border-[#2bb3be]/40'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-[#2bb3be]' : 'text-slate-400'}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#2bb3be]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <button
                type="button"
                onClick={handleMobileContact}
                className="w-full py-3 justify-center shadow-md flex items-center gap-2 rounded-full font-bold text-sm text-white bg-[#124045] hover:bg-[#0c2d31] border border-[#2bb3be]/35 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <MessageCircle size={15} />
              </button>

              <a
                href="https://wa.me/?text=Hi%20Jexiratech%20Solutions"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-400/40 transition-colors"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
