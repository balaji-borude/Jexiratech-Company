import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Send, MessageCircle, Copy, Check, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Custom software',
    budget: 'Flexible / To be estimated',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Project Enquiry: ${formData.service} from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone || 'Not provided'}
Service Needed: ${formData.service}
Budget/Timeline: ${formData.budget}

Project Details:
${formData.details}`;

    const mailtoUrl = `mailto:hello@jexiratech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Try to trigger mailto
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@jexiratech.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = `Hi Jexiratech Solutions, I'm interested in ${formData.service || 'software development'}. My name is ${formData.name || 'there'}.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="wrap two-col">
        {/* Left Info Column */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
            Let's Talk Code & Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
            Tell us about your project
          </h2>
          <p className="sub text-slate-700 text-base mb-8 leading-relaxed">
            Share a few details and we will reply within one business day with an initial technical assessment and clear next steps. The first consultation is 100% free.
          </p>

          <div className="space-y-6 text-slate-600">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <b className="text-ink block text-sm">Direct Email</b>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href="mailto:hello@jexiratech.com"
                    className="text-brand font-semibold hover:underline text-sm"
                  >
                    jexiratech@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-ink transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <b className="text-ink block text-sm">Location</b>
                <span className="text-sm">Maharashtra, India (Serving Global Clients)</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <b className="text-ink block text-sm">Hours & Response</b>
                <span className="text-sm">Monday to Saturday, 10:00 to 18:00 IST · 24h turn-around</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200/80">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#05a65a] hover:bg-[#048e4d] text-white font-bold text-sm shadow-[0_8px_20px_-4px_rgba(5,166,90,0.4)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="contact-form g shadow-2xl relative z-10"
          >
            <div>
              <h3 className="text-xl font-bold text-ink mb-1">Request Free Consultation</h3>
              <p className="text-xs text-slate-500">
                Fill this brief form and we’ll prepare technical questions ahead of our call.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label>
                Your Name *
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </label>

              <label>
                Work Email *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label>
                Phone / WhatsApp (Optional)
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label>
                What do you need? *
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="Custom software">Custom Software Development</option>
                  <option value="Web application">Web Application (React / Next)</option>
                  <option value="Mobile app">Mobile App (Flutter / React Native)</option>
                  <option value="UI/UX design">UI/UX Design & Prototyping</option>
                  <option value="Business automation">ERP / CRM & Business Automation</option>
                  <option value="Cloud and DevOps">Cloud Architecture & DevOps</option>
                  <option value="Not sure yet">Not sure yet (Need Guidance)</option>
                </select>
              </label>
            </div>

            {/* <label>
              Estimated Scope / Budget
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="Flexible / To be estimated">Flexible / Needs Estimation</option>
                <option value="Under $3,000 / ₹2.5L">Starter Prototype / MVP (Under ₹2.5L / $3,000)</option>
                <option value="$3,000 - $10,000 / ₹2.5L - ₹8L">Full Application (₹2.5L - ₹8L / $3k-$10k)</option>
                <option value="$10,000+ / ₹8L+">Enterprise System (₹8L+ / $10k+)</option>
              </select>
            </label> */}

            <label>
              Project Details & Objectives *
              <textarea
                name="details"
                rows={4}
                required
                placeholder="Briefly describe what you want to build, who will use it, and any desired launch deadlines..."
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#124045] to-[#1a5860] hover:from-[#0d3135] hover:to-[#14474e] text-white font-bold text-sm sm:text-base shadow-[0_12px_28px_-6px_rgba(18,64,69,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(18,64,69,0.55)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <Send size={17} className="transition-transform group-hover:translate-x-1 text-[#2bb3be]" />
              <span>Send Project Enquiry</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Enquiry launched!</strong>
                  <p className="mt-0.5 mb-0 text-emerald-700">
                    Your default email client opened with the enquiry. You can also chat directly on{' '}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="underline font-bold text-emerald-900"
                    >
                      WhatsApp
                    </button>{' '}
                    or mail to <b>hello@jexiratech.com</b>.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
