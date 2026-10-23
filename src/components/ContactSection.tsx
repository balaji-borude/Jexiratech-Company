import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Send, Copy, Check, Sparkles, AlertCircle, Loader2 } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

const CONTACT_EMAIL = 'jexiratech@gmail.com';

// EmailJS config (set these in your .env file, see setup notes)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

type Status = 'idle' | 'sending' | 'success' | 'error';

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Custom software',
    details: '',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    // Keys here must match the {{variables}} in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service,
      message: formData.details,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: initialService || 'Custom software',
        details: '',
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
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
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-brand font-semibold hover:underline text-sm"
                  >
                    {CONTACT_EMAIL}
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
              disabled={status === 'sending'}
              className="w-full py-3.5 px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#124045] to-[#1a5860] hover:from-[#0d3135] hover:to-[#14474e] text-white font-bold text-sm sm:text-base shadow-[0_12px_28px_-6px_rgba(18,64,69,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(18,64,69,0.55)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={17} className="animate-spin text-[#2bb3be]" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={17} className="transition-transform group-hover:translate-x-1 text-[#2bb3be]" />
                  <span>Send Project Enquiry</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Enquiry sent!</strong>
                  <p className="mt-0.5 mb-0 text-emerald-700">
                    Thanks for reaching out. We’ll reply within one business day. You can also chat directly on{' '}
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="underline font-bold text-emerald-900"
                    >
                      WhatsApp
                    </button>{' '}
                    or mail us at <b>{CONTACT_EMAIL}</b>.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Something went wrong.</strong>
                  <p className="mt-0.5 mb-0 text-red-700">
                    Your enquiry could not be sent. Please try again, or email us directly at <b>{CONTACT_EMAIL}</b>.
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