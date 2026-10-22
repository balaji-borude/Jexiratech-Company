import React, { useState, useEffect } from 'react';
import type { ViewType } from '../types';
import { HERO_TITLES, FEATURE_TICKER } from '../data/content';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentView, onNavigate, onContactClick }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate feature cards every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURE_TICKER.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const heroData = HERO_TITLES[currentView] || HERO_TITLES.home;

  return (
    <header className="relative m-2.5 sm:m-4 rounded-[26px] sm:rounded-[34px] overflow-hidden text-white bg-[#051416] border border-[#2bb3be]/20 shadow-[0_24px_60px_-20px_rgba(5,20,22,0.8)]">
      {/* Dynamic Cosmic Glow Background with Logo Theme Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <i className="absolute -left-[10%] -top-[25%] w-[58%] aspect-square rounded-full bg-[#124045] blur-[85px] opacity-85 block" />
        <i className="absolute -right-[10%] top-[8%] w-[52%] aspect-square rounded-full bg-[#195860] blur-[85px] opacity-85 block" />
        <i className="absolute left-[20%] -bottom-[45%] w-[62%] aspect-square rounded-full bg-[#25838e] blur-[90px] opacity-75 block" />
        {/* Atmospheric gradient shade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041012]/60 via-transparent to-[#041012]/80" />

        {/* Square boxes grid background like reference image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            backgroundPosition: 'center top',
            maskImage:
              'radial-gradient(ellipse 72% 62% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, transparent 85%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 72% 62% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, transparent 85%)',
          }}
        />
      </div>

      {/* Hero Content — pt-28/32 reserves space for the Dynamic Island navbar */}
      <div className="relative z-10 min-h-[580px] sm:min-h-[660px] md:min-h-[740px] flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-28 sm:pt-32 pb-36 sm:pb-44">
        {/* Floating Badge */}
        {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#124045]/60 border border-[#2bb3be]/40 text-white backdrop-blur-md mb-6 shadow-sm">
          <b className="px-2.5 py-0.5 rounded-full bg-[#2bb3be] text-[#051416] font-extrabold text-[11px] tracking-wide">
            NEW
          </b>
          <span>{heroData.badge}</span>
        </div> */}

        {/* Headline & Description */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mx-auto text-white">
          {heroData.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto mt-5 sm:mt-6 mb-7 sm:mb-9 leading-relaxed font-medium">
          {heroData.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-base text-[#07191c] bg-white hover:bg-slate-100 shadow-[0_12px_30px_-6px_rgba(18,64,69,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
          >
            <span>Start your project</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </button>

          {currentView === 'home' && (
            <button
              type="button"
              onClick={() => onNavigate('product')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles size={16} className="text-[#2bb3be]" />
              <span>See our products</span>
            </button>
          )}

          {currentView !== 'home' && (
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Back to overview</span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Feature Ticker at Bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 z-10 w-[min(380px,calc(100%-40px))]">
        <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-white/5 backdrop-blur-md shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] text-left transition-transform duration-200">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md overflow-hidden p-2">
            <img
              src={FEATURE_TICKER[activeFeature].icon}
              alt={FEATURE_TICKER[activeFeature].title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <b className="block text-white text-sm sm:text-[15px] font-bold truncate">
              {FEATURE_TICKER[activeFeature].title}
            </b>
            <span className="block text-xs sm:text-sm text-slate-300 truncate">
              {FEATURE_TICKER[activeFeature].desc}
            </span>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 mt-3"
          role="tablist"
          aria-label="Feature Carousel"
        >
          {FEATURE_TICKER.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={index === activeFeature}
              aria-label={`Select ${item.title}`}
              onClick={() => setActiveFeature(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeFeature
                ? 'bg-[#2bb3be] scale-125'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
