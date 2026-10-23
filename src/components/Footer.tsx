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
      <footer className="pt-12 pb-10 border-t border-[#d8e5e7] bg-[#f3f7f8] text-slate-600">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200/80">
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200/80 p-1 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/Logo/header%20logo.png"
                    alt="Jexiratech Mark"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-[#07191c] tracking-tight text-xl leading-none">
                    Jexiratech
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#124045] leading-tight mt-0.5">
                    Solutions
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated freelance development team in Maharashtra, India. We build custom web applications, mobile apps, startup MVPs, and custom CRM/ERP software. Code you own, fixed milestones that stay on track.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-[#07191c] uppercase tracking-wider mb-4">
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
                    className="hover:text-[#124045] transition-colors cursor-pointer"
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
                    className="hover:text-[#124045] transition-colors cursor-pointer"
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
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Services &amp; Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('product');
                      scrollToTop();
                    }}
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Products &amp; Case Studies
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-xs font-bold text-[#07191c] uppercase tracking-wider mb-4">
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
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    React &amp; Next.js Web Apps
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Flutter &amp; Mobile App Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Startup MVP Development Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Custom CRM &amp; ERP Software
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('service');
                      scrollToTop();
                    }}
                    className="hover:text-[#124045] transition-colors cursor-pointer"
                  >
                    Cloud DevOps &amp; Automation
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div>
              <h4 className="text-xs font-bold text-[#07191c] uppercase tracking-wider mb-4">
                Headquarters
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <p className="flex items-center gap-2 m-0">
                  <MapPin size={14} className="text-[#124045] shrink-0" />
                  <span>Maharashtra, India</span>
                </p>
                <p className="flex items-center gap-2 m-0">
                  <Mail size={14} className="text-[#124045] shrink-0" />
                  <a href="mailto:jexiratech@gmail.com" className="text-[#124045] font-semibold hover:underline">
                    jexiratech@gmail.com
                  </a>
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#091e21] hover:bg-[#124045] transition-all cursor-pointer shadow-sm"
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
                className="hover:text-[#07191c] transition-colors underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalContent('terms')}
                className="hover:text-[#07191c] transition-colors underline cursor-pointer"
              >
                Terms of Engagement
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-[#124045] transition-colors ml-4 cursor-pointer font-semibold"
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
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-black cursor-pointer"
            >
              <X size={16} />
            </button>

            {modalContent === 'privacy' ? (
              <div>
                <div className="flex items-center gap-2 text-[#124045] font-bold text-sm mb-2">
                  <Lock size={18} />
                  <span>Privacy Policy</span>
                </div>
                <h3 className="text-xl font-bold text-[#07191c] mb-4">How Jexiratech Protects Your Information</h3>
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
                <div className="flex items-center gap-2 text-[#124045] font-bold text-sm mb-2">
                  <Shield size={18} />
                  <span>Terms of Engagement</span>
                </div>
                <h3 className="text-xl font-bold text-[#07191c] mb-4">Terms & Delivery Commitments</h3>
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
