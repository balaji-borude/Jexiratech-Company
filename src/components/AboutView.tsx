import React from 'react';
import { VALUES } from '../data/content';
import { Check } from 'lucide-react';

interface AboutViewProps {
  onContactClick?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
  return (
    <div className="space-y-16">
      {/* Intro Story Section */}
      <section className="pt-8">
        <div className="wrap two-col">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
              Our Story & Promise
            </span>
            <h2>A dedicated freelance development team with a simple promise</h2>
            <p className="sub text-slate-700 leading-relaxed mb-6">
              We started <strong>Jexiratech Solutions</strong> in Maharashtra, India to give founders, startups, and growing businesses direct access to senior freelance software developers without agency overhead.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Too many software projects fail due to bloated agency billing, broken promises, and complex technical jargon. Our agile freelance team stays lean and focused—meaning you collaborate directly with the React, Flutter, and Full-Stack engineers building your web apps, mobile apps, startup MVPs, and custom CRM/ERP platforms.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  <Check size={14} />
                </div>
                <span>Zero Outsourcing</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  <Check size={14} />
                </div>
                <span>Direct Access to Architects</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                  <Check size={14} />
                </div>
                <span>Fixed Milestone Delivery</span>
              </div>
            </div>
          </div>

          <div className="media-box relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-white/80">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Jexiratech Engineering Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-left">
              <span className="text-xs uppercase tracking-wider text-cyan-300 font-bold">Collaborative Excellence</span>
              <p className="text-sm font-semibold text-white/90">Crafting robust software for ambitious organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="pt-0">
        <div className="wrap">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
              Core Principles
            </span>
            <h2>Our foundation & values</h2>
            <p className="section-sub mb-0">
              The four commitments that guide every feature we code and every contract we sign.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((val) => (
              <div key={val.title} className="value-card g p-8">
                <div className="w-12 h-12 mb-3">
                  <img src={val.icon} alt={val.title} className="w-full h-full object-contain" />
                </div>
                <b className="text-lg text-ink font-bold mb-2">{val.title}</b>
                <span className="text-slate-600 text-sm leading-relaxed">{val.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="pt-0">
        <div className="wrap">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
              Leadership & Craft
            </span>
            <h2>The people behind Jexiratech</h2>
            <p className="section-sub mx-auto">
              Senior engineers, systems architects, and UI/UX designers committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="card g text-center p-8 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-white shadow-lg bg-slate-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-ink mb-1">{member.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand mb-3 block">
                  {member.role}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Location and Regions Served */}
      {/* <section className="pt-0 pb-12">
        <div className="wrap">
          <div className="g p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-brand font-bold text-sm mb-2">
                <MapPin size={18} />
                <span>Headquarters & Reach</span>
              </div>
              <h3 className="text-2xl font-bold text-ink mb-3">Based in Maharashtra, India. Serving Globally.</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                We are proud to build high-grade digital products from Maharashtra, India, partnering with startups and established enterprises across India, North America, Europe, and the UAE.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                  <Globe size={14} className="text-cyan-600" />
                  Remote-First Collaboration
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                  <Shield size={14} className="text-emerald-600" />
                  NDAs & Strict Confidentiality
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onContactClick}
                className="btn brand whitespace-nowrap shadow-xl"
              >
                <span>Schedule a Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
