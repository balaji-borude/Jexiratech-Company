import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white/60 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Centered Heading */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#124045] mb-3 px-3 py-1 rounded-full bg-[#eaf3f4] border border-[#2bb3be]/20">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#07191c] mb-3">
            Frequently asked questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about partnering with Jexiratech Solutions, code ownership, and our engagement terms.
          </p>
        </div>

        {/* Centered FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md overflow-hidden shadow-sm transition-all duration-200 hover:border-[#124045]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-[#07191c] flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors hover:text-[#124045]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen
                        ? 'rotate-180 bg-[#124045] text-white shadow-md'
                        : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p className="m-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
