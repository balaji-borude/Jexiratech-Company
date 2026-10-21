import React, { useState, useEffect } from 'react';
import type { ViewType } from '../types';
import { ArrowUpRight, Menu, X, MessageCircle, Home, Info, Layers, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs: { key: ViewType; label: string; icon: React.ReactNode }[] = [
    { key: 'home', label: 'Home', icon: <Home size={16} /> },
    { key: 'about', label: 'About', icon: <Info size={16} /> },
    { key: 'service', label: 'Services', icon: <Layers size={16} /> },
    { key: 'product', label: 'Products', icon: <Sparkles size={16} /> },
  ];

  // Close mobile menu on escape key
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
      <header className="top-nav-container">
        {/* Brand Logo with the official Logo image */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleTabClick('home');
          }}
          className="nav-logo g group"
          title="Jexiratech Solutions"
        >
          <div className="logo-badge flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200/80 px-2 py-1 transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/Logo/Logo-mark.png"
              alt="Jexiratech Mark"
              className="h-6 sm:h-7 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/Logo/Logo.png';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-ink tracking-tight text-sm sm:text-base leading-none">
              Jexiratech
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand leading-tight mt-0.5">
              Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Pills (Hidden on Mobile) */}
        <nav className="nav-tabs g hidden md:flex" aria-label="Main Navigation">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={currentView === tab.key ? 'active' : ''}
              onClick={() => handleTabClick(tab.key)}
              aria-current={currentView === tab.key ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Desktop Action CTA (Hidden on Mobile) */}
        <div className="nav-cta hidden md:block">
          <button
            type="button"
            onClick={onContactClick}
            className="btn dark flex items-center gap-1.5"
          >
            <span>Free consultation</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full g flex items-center justify-center text-ink shadow-sm transition-transform active:scale-95 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop and Slide-Down Panel */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-slate-950/40 backdrop-blur-sm pt-20 px-4 pb-6 flex flex-col justify-start animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="g rounded-3xl p-5 shadow-2xl border border-white/80 max-w-sm w-full mx-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-ink"
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
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                      isActive
                        ? 'bg-ink text-white shadow-md'
                        : 'text-slate-700 hover:bg-white/80 hover:text-ink'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-slate-200/60 space-y-2.5">
              <button
                type="button"
                onClick={handleMobileContact}
                className="btn brand w-full py-3 justify-center shadow-md flex items-center gap-2"
              >
                <span>Free Consultation</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href="https://wa.me/?text=Hi%20Jexiratech%20Solutions"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200/80 transition-colors"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
