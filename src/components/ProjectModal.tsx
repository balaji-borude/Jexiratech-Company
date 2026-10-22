import React from 'react';
import { PRODUCTS } from '../data/content';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  productId: string | null;
  onClose: () => void;
  onRequestDemo: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ productId, onClose, onRequestDemo }) => {
  if (!productId) return null;

  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-950">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-900 shadow">
              {product.badge}
            </span>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2">
          {product.title}
        </h3>
        <p className="text-slate-600 text-base mb-6">
          {product.tagline}
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <b className="text-slate-900 block text-xs font-bold uppercase tracking-wider mb-1">
              The Client Challenge
            </b>
            <p className="text-slate-600 text-sm m-0">
              {product.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#eaf3f4] border border-[#2bb3be]/25">
            <b className="text-[#124045] block text-xs font-bold uppercase tracking-wider mb-1">
              Architecture & Solution
            </b>
            <p className="text-slate-700 text-sm m-0">
              {product.solution}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <b className="text-slate-900 block text-xs font-bold uppercase tracking-wider mb-2">
            Technology Stack Deployed
          </b>
          <div className="flex flex-wrap gap-2">
            {product.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-emerald-500" />
            Full repository code and documentation owned by client.
          </span>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestDemo(product.title);
            }}
            className="btn brand w-full sm:w-auto"
          >
            <span>Request Demo for Your Team</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
