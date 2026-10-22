import React, { useState, useEffect } from 'react';
import type { ViewType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollPrompt } from './components/ScrollPrompt';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Custom software');

  // Sync hash routing with prototype behavior
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'home' || hash === 'about' || hash === 'service' || hash === 'product') {
        setCurrentView(hash as ViewType);
      } else if (hash === 'contact') {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const titleMap: Record<ViewType, string> = {
      home: 'Custom Software Development & Cloud Solutions',
      about: 'About Our Team & Philosophy',
      service: 'Custom Software, Web & Mobile Services',
      product: 'Live Products & Architectural Demos',
    };

    document.title = `${titleMap[currentView] || 'Solutions'} | Jexiratech Solutions`;
  }, [currentView]);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForConsult = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleContactClick();
  };

  const handleRequestDemo = (productTitle: string) => {
    setSelectedService(`Demo Request for ${productTitle}`);
    handleContactClick();
  };

  return (
    <div className="min-h-screen bg-[#f3f7f8] text-[#07191c] flex flex-col font-sans selection:bg-[#124045] selection:text-white">
      {/* Floating Glassmorphic Top Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onContactClick={handleContactClick}
      />

      {/* Dynamic Cosmic Hero Panel */}
      <Hero
        currentView={currentView}
        onNavigate={handleNavigate}
        onContactClick={handleContactClick}
      />

      {/* Trust & Guarantee Strip */}
      <TrustBar />

      {/* Main View Switching */}
      <main className="flex-1 mt-6">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onContactClick={handleContactClick}
            onSelectProduct={(id) => setSelectedProductId(id)}
          />
        )}

        {currentView === 'about' && (
          <AboutView onContactClick={handleContactClick} />
        )}

        {currentView === 'service' && (
          <ServicesView
            onContactClick={handleContactClick}
            onSelectServiceForConsult={handleSelectServiceForConsult}
          />
        )}

        {currentView === 'product' && (
          <PortfolioView
            onSelectProduct={(id) => setSelectedProductId(id)}
            onRequestDemo={handleRequestDemo}
          />
        )}

        {/* Global FAQ Section */}
        <FaqSection />

        {/* Global Contact Form Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onContactClick={handleContactClick}
      />

      {/* Project Case Study Deep-Dive Modal */}
      <ProjectModal
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
        onRequestDemo={handleRequestDemo}
      />

      {/* Global Inactivity Mouse Scroll Prompt */}
      <ScrollPrompt />
    </div>
  );
};

export default App;