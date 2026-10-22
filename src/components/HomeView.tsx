import React from 'react';
import type { ViewType } from '../types';
import { VALUES, PRODUCTS } from '../data/content';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onContactClick: () => void;
  onSelectProduct: (productId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onContactClick, onSelectProduct }) => {
  return (
    <div className="space-y-16">
      {/* What We Build For You Section */}
      <section className="mesh-bg">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
                Core Capabilities
              </span>
              <h2>What we build for you</h2>
              <p className="section-sub mb-0">
                Three things we do best. Shaped to your specific industry and workflow.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('service')}
                className="btn brand"
              >
                <span>Explore all 6 services</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card g flex flex-col justify-between">
              <div>
                <div className="card-icon">
                  <img src="/icons/custom.png" alt="Custom Software" className="w-full h-full object-contain" />
                </div>
                <h3>Custom Software</h3>
                <p>
                  Tools shaped to your exact workflow, from internal management portals to data-heavy customer platforms.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Bespoke business workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Secure role-based databases</span>
                </li>
              </ul>
            </div>

            <div className="card g flex flex-col justify-between">
              <div>
                <div className="card-icon">
                  <img src="/icons/app-development.png" alt="Web and Mobile Apps" className="w-full h-full object-contain" />
                </div>
                <h3>Web and Mobile Apps</h3>
                <p>
                  Fast, responsive, and secure digital apps engineered for web browsers, Android, and iOS.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Fluid 60fps native feel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Cross-platform Flutter & React</span>
                </li>
              </ul>
            </div>

            <div className="card g flex flex-col justify-between">
              <div>
                <div className="card-icon">
                  <img src="/icons/automation.png" alt="Business Automation" className="w-full h-full object-contain" />
                </div>
                <h3>Business Automation</h3>
                <p>
                  CRM, ERP, and API integrations that eliminate repetitive manual work, human errors, and data silos.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Automated alerts & invoicing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Third-party integrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products / Case Studies Preview */}
      <section className="py-12">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
                Proven Systems
              </span>
              <h2>Featured platforms & live demos</h2>
              <p className="section-sub mb-0">
                Explore real architectures we have planned, designed, and deployed.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('product')}
                className="btn outline"
              >
                <span>View all products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="card g group cursor-pointer overflow-hidden p-0"
                onClick={() => onSelectProduct(item.id)}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl isolate">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 shadow">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand text-white shadow">
                      <Sparkles size={12} />
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {item.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-brand font-bold text-sm gap-1 pt-2 border-t border-slate-100">
                    <span>Inspect solution & details</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Jexiratech Values Section */}
      <section className="py-12 bg-white/50 border-y border-slate-200/60">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
              The Jexiratech Standard
            </span>
            <h2>A software partner built on trust</h2>
            <p className="section-sub mx-auto">
              We eliminate technical jargon, deliver code you own completely, and stay on schedule.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((val) => (
              <div key={val.title} className="value-card g">
                <div className="w-10 h-10 mb-2">
                  <img src={val.icon} alt={val.title} className="w-full h-full object-contain" />
                </div>
                <b>{val.title}</b>
                <span>{val.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Strip */}
      <section className="py-10">
        <div className="wrap">
          <div className="dk-container text-center relative overflow-hidden p-12">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-white text-3xl md:text-4xl mb-4 font-extrabold tracking-tight">
                Have an idea or a workflow to automate?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8">
                Tell us about your project. We’ll provide a free architectural breakdown and estimate within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="btn brand"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="btn glass"
                >
                  <span>Learn about our team</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
