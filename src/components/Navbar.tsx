import React from 'react';
import type { ViewType } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onContactClick }) => {
  const tabs: { key: ViewType; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'service', label: 'Services' },
    { key: 'product', label: 'Products' },
  ];

  return (
    <header className="top-nav-container">
      {/* Brand Logo with the official Logo image */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}
        className="nav-logo g group"
        title="Jexiratech Solutions"
      >
        <div className="logo-badge flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200/80 px-2 py-1 transition-transform group-hover:scale-105">
          <img
            src="/Logo/Logo-mark.png"
            alt="Jexiratech Mark"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              // fallback to trimmed logo if needed
              (e.target as HTMLImageElement).src = '/Logo/Logo.png';
            }}
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-ink tracking-tight text-base leading-none">
            Jexiratech
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand leading-tight mt-0.5">
            Solutions
          </span>
        </div>
      </a>

      {/* Navigation Pills */}
      <nav className="nav-tabs g" aria-label="Main Navigation">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={currentView === tab.key ? 'active' : ''}
            onClick={() => onNavigate(tab.key)}
            aria-current={currentView === tab.key ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Action CTA */}
      <div className="nav-cta">
        <button
          type="button"
          onClick={onContactClick}
          className="btn dark flex items-center gap-1.5"
        >
          <span>Free consultation</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </header>
  );
};
