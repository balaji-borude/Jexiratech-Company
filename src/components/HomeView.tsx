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
                Freelance Development Capabilities
              </span>
              <h2>Web, Mobile &amp; Custom Software Engineering</h2>
              <p className="section-sub mb-0">
                Hire a dedicated freelance development team in India. We engineer scalable platforms shaped to your exact workflow.
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
                  <img src="/icons/custom.png" alt="Custom CRM & ERP Software" className="w-full h-full object-contain" />
                </div>
                <h3>Custom CRM &amp; ERP Software</h3>
                <p>
                  Build a custom CRM or ERP platform tailored for your business. Replace fragile spreadsheets with automated inventory, billing, and workflows.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Bespoke CRM &amp; ERP architectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Automated invoicing &amp; role security</span>
                </li>
              </ul>
            </div>

            <div className="card g flex flex-col justify-between">
              <div>
                <div className="card-icon">
                  <img src="/icons/app-development.png" alt="React Web Application Development" className="w-full h-full object-contain" />
                </div>
                <h3>React &amp; Next.js Web Apps</h3>
                <p>
                  Fast, SEO-optimized, and secure digital apps engineered with React, Next.js, and TypeScript for high-traffic browser platforms and SaaS products.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Fluid, high-conversion UX</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>SaaS dashboards &amp; REST/GraphQL APIs</span>
                </li>
              </ul>
            </div>

            <div className="card g flex flex-col justify-between">
              <div>
                <div className="card-icon">
                  <img src="/icons/automation.png" alt="Flutter & Mobile App Development" className="w-full h-full object-contain" />
                </div>
                <h3>Flutter Mobile App Development</h3>
                <p>
                  High-performance iOS and Android mobile applications built with Flutter and React Native, complete with offline sync and store publishing.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Native 60fps performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand shrink-0" />
                  <span>Offline-first SQLite synchronization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Our Freelance Development Team vs Agency Section */}
      <section className="py-12 bg-[#eaf3f4]/50 border-y border-slate-200/70">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
                Freelance Team Advantage
              </span>
              <h2>Why hire our freelance team vs a traditional agency?</h2>
              <p className="section-sub mb-0">
                Get senior engineering talent with direct communication, faster delivery, and no expensive agency overhead or account manager markups.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 self-start md:self-auto">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-[#124045] border border-[#2bb3be]/30 shadow-xs">
                Hire React Developers India
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-[#124045] border border-[#2bb3be]/30 shadow-xs">
                Freelance Flutter Developers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
              <div className="text-2xl font-black text-brand mb-2">01</div>
              <h3 className="text-base font-bold text-ink mb-2">Direct Engineer Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">
                Talk directly to the architects and developers writing your code. Zero miscommunication, no middleman account managers, and instant technical feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
              <div className="text-2xl font-black text-brand mb-2">02</div>
              <h3 className="text-base font-bold text-ink mb-2">Startup MVP Specialists</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">
                Launch your web or mobile MVP in 4 to 8 weeks. We focus on core buyer journeys so you can test market demand and raise investor funding quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
              <div className="text-2xl font-black text-brand mb-2">03</div>
              <h3 className="text-base font-bold text-ink mb-2">100% Code &amp; IP Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">
                Full Git repository transfer upon milestone settlement. Complete copyright ownership, clean documentation, and zero recurring vendor lock-ins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col">
              <div className="text-2xl font-black text-brand mb-2">04</div>
              <h3 className="text-base font-bold text-ink mb-2">Maharashtra &amp; Pan-India</h3>
              <p className="text-xs text-slate-600 leading-relaxed m-0">
                Based in Maharashtra, India. We offer flexible pricing, milestone settlements, and collaborative time zones for clients in India and worldwide.
              </p>
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
