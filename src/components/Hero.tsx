import React, { useState, useEffect } from 'react';
import type { ViewType } from '../types';
import { HERO_TITLES, FEATURE_TICKER } from '../data/content';
import { ArrowRight, Sparkles } from 'lucide-react';

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
    <header className="hero-panel">
      {/* Dynamic Cosmic Glow Background */}
      <div className="hero-bg">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div className="hero-shade"></div>

      <div className="hero-content">
        {/* Floating Badge */}
        <div className="hero-badge">
          <b>NEW</b>
          <span>{heroData.badge}</span>
        </div>

        {/* Headline & Description */}
        <h1 className="hero-title font-serif">{heroData.title}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <button
            type="button"
            onClick={onContactClick}
            className="btn white group"
          >
            <span>Start your project</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </button>

          {currentView === 'home' && (
            <button
              type="button"
              onClick={() => onNavigate('product')}
              className="btn glass"
            >
              <Sparkles size={16} />
              <span>See our products</span>
            </button>
          )}

          {currentView !== 'home' && (
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="btn glass"
            >
              <span>Back to overview</span>
            </button>
          )}
        </div>
      </div>

      {/* Floating Interactive Feature Ticker at Bottom */}
      <div className="hero-ticker-container">
        <div className="hero-ticker-card">
          <div className="ticker-icon">
            {FEATURE_TICKER[activeFeature].icon}
          </div>
          <div className="ticker-text">
            <b>{FEATURE_TICKER[activeFeature].title}</b>
            <span>{FEATURE_TICKER[activeFeature].desc}</span>
          </div>
        </div>

        {/* Indicator Dashes */}
        <div className="ticker-dashes" role="tablist" aria-label="Feature Carousel">
          {FEATURE_TICKER.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`ticker-dash-btn ${index === activeFeature ? 'active' : ''}`}
              onClick={() => setActiveFeature(index)}
              aria-label={`Select ${item.title}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
