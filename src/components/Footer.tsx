import React, { useState } from 'react';
import type { ViewType } from '../types';
import { Mail, MapPin, ArrowUp, X, Shield, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onContactClick }) => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200/80">
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200/80 px-2.5 py-1.5 flex items-center justify-center">
                  <img
                    src="/Logo/Logo-mark.png"
                    alt="Jexiratech Mark"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-ink tracking-tight text-xl leading-none">
                    Jexiratech
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand leading-tight mt-0.5">
                    Solutions
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Jexiratech Solutions builds custom software, web, and mobile apps for ambitious and growing businesses. Code you own, plans that stay on track.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-600">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('home');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('about');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    About Jexiratech
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Services & Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('product');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Products & Case Studies
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs font-medium text-slate-600">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Custom Software Engineering
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Web Applications (React/Next)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Mobile Apps (iOS & Android)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-brand transition-colors"
                  >
                    Business Automation & ERP
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div>
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Headquarters
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <p className="flex items-center gap-2 m-0">
                  <MapPin size={14} className="text-brand shrink-0" />
                  <span>Maharashtra, India</span>
                </p>
                <p className="flex items-center gap-2 m-0">
                  <Mail size={14} className="text-brand shrink-0" />
                  <a href="mailto:jexiratech@gmail.com" className="text-brand font-semibold hover:underline">
                    jexiratech@gmail.com
                  </a>
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="btn dark text-xs py-2 px-4"
                  >
                    <span>Request Free Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2026 Jexiratech Solutions. All rights reserved.</span>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalContent('privacy')}
                className="hover:text-ink transition-colors underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalContent('terms')}
                className="hover:text-ink transition-colors underline"
              >
                Terms of Engagement
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-brand transition-colors ml-4"
                title="Scroll to top"
              >
                <span>Back to top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-ink"
            >
              <X size={16} />
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <div className="flex items-center gap-2 text-brand font-bold text-sm mb-2">
                  <Lock size={18} />
                  <span>Privacy Policy</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-4">How Jexiratech Protects Your Information</h3>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Information Collection:</strong> When you submit an enquiry form or contact us, we collect your name, email, phone number, and project details exclusively for evaluating your software requirements.
                  </p>
                  <p>
                    <strong>2. Confidentiality & Non-Disclosure:</strong> We treat all project specifications, technical ideas, and proprietary workflows under strict confidentiality. We are happy to execute formal NDAs prior to in-depth technical discussions.
                  </p>
                  <p>
                    <strong>3. Zero Data Sale:</strong> We never sell, lease, or monetize your contact information or project data to third-party advertisers.
                  </p>
                  <p>
                    <strong>4. Contact:</strong> For inquiries regarding your data, contact hello@jexiratech.com.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-brand font-bold text-sm mb-2">
                  <Shield size={18} />
                  <span>Terms of Engagement</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-4">Terms & Delivery Commitments</h3>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Full IP Ownership:</strong> Upon settlement of each project milestone, all source code, software repositories, graphic designs, and database schemas are 100% transferred to the client.
                  </p>
                  <p>
                    <strong>2. Transparent Scope:</strong> Every project is executed according to a written Statement of Work (SOW) outlining clear timelines, sprint deliverables, and acceptance criteria.
                  </p>
                  <p>
                    <strong>3. Warranty & Bug-Fix Period:</strong> All newly launched software includes an agreed post-deployment warranty period during which any defects or critical bugs are resolved promptly at zero additional cost.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
