import React, { useState } from 'react';
import { CORE_SERVICES, PROCESS_STEPS, TECH_CATEGORIES } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesViewProps {
  onContactClick: () => void;
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onContactClick, onSelectServiceForConsult }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const allTechs = TECH_CATEGORIES.flatMap((c) => c.items);
  const displayedTechs = activeCategory === 'All'
    ? Array.from(new Set(allTechs))
    : TECH_CATEGORIES.find((c) => c.name === activeCategory)?.items || [];

  return (
    <div className="space-y-16">
      {/* Services Grid Section */}
      <section className="mesh-bg pt-8">
        <div className="wrap">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
              What We Deliver
            </span>
            <h2>Our services</h2>
            <p className="section-sub mb-0">
              Six focused disciplines, delivered by a unified team that stays with you from the initial discovery workshop through production launch and long-term scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="card g flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="card-icon overflow-hidden p-1">
                      <img src={srv.icon} alt={srv.title} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#eaf3f4] text-[#124045] border border-[#2bb3be]/20">
                      Production Ready
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink mb-2">{srv.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {srv.fullDesc}
                  </p>

                  <div className="mb-5">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {srv.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check size={13} className="text-brand shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {srv.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForConsult(srv.title)}
                    className="text-brand hover:text-ink font-bold text-xs flex items-center gap-1 transition-colors ml-2 shrink-0"
                    title="Inquire about this service"
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Process Pipeline */}
      <section className="pt-0">
        <div className="wrap">
          <div className="dk-container">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
                Predictable Delivery
              </span>
              <h2 className="text-white">How we work</h2>
              <p className="section-sub text-white/80 mb-0">
                A transparent, step-by-step process so there are zero surprises on scope, technical architecture, timeline, or cost.
              </p>
            </div>

            <ol className="steps-list">
              {PROCESS_STEPS.map((p) => (
                <li key={p.step} className="step-item">
                  <span className="step-num">{p.step}</span>
                  <b>{p.title}</b>
                  <span>{p.desc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="pt-0 pb-8">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
                Modern Tooling
              </span>
              <h2>Technology we use</h2>
              <p className="section-sub mb-0">
                Battle-tested frameworks and cloud primitives, selected for speed, security, and long-term maintainability.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Frontend', 'Backend', 'Mobile', 'Database & Cloud'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-ink text-white shadow'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-ink hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="tech-chips">
            {displayedTechs.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onContactClick}
              className="btn brand"
            >
              <span>Discuss Your Technology Architecture</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
