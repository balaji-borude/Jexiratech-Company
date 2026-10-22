import React, { useState } from 'react';
import { PRODUCTS } from '../data/content';
import { ArrowRight, ExternalLink, Filter, CheckCircle2 } from 'lucide-react';

interface PortfolioViewProps {
  onSelectProduct: (productId: string) => void;
  onRequestDemo: (productTitle: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectProduct, onRequestDemo }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'enterprise'>('all');

  const filteredProducts = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="space-y-16">
      <section className="pt-8">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">
                Case Studies & Systems
              </span>
              <h2>Products and live demos</h2>
              <p className="section-sub mb-0">
                Explore custom software systems and client prototypes we have engineered. Each project reflects our commitment to clean architecture, high uptime, and delightful UX.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 bg-white/80 rounded-full border border-slate-200/80 shadow-sm self-start md:self-auto">
              {/* <span className="text-xs font-bold text-slate-400 pl-3 pr-1 hidden sm:inline flex items-center gap-1">
                <Filter size={13} />
                Filter:
              </span> */}
              {(['all', 'web', 'mobile', 'enterprise'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`text-xs px-4 py-2 rounded-full font-bold capitalize transition-all ${filter === cat
                    ? 'bg-ink text-white shadow'
                    : 'text-slate-600 hover:text-ink hover:bg-slate-100'
                    }`}
                >
                  {cat === 'all' ? 'All Systems' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card g group overflow-hidden p-0 flex flex-col justify-between"
              >
                <div className="p-3 pb-0">
                  <div className="relative isolate aspect-video overflow-hidden rounded-2xl bg-slate-950 ring-1 ring-slate-200/80">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow">
                        <CheckCircle2 size={13} />
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 flex items-center justify-between gap-4 border-t border-slate-100/80">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product.id)}
                    className="text-xs font-bold text-slate-600 hover:text-ink flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ExternalLink size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestDemo(product.title)}
                    className="btn brand text-xs py-2 px-4 shadow-md"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
