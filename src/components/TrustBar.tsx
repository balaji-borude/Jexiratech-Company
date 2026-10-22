import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-6">
      <div className="flex justify-between items-center gap-4 py-3 px-2 sm:px-4 text-xs sm:text-sm font-semibold text-slate-600 flex-wrap">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[#124045]" />
            <span><b className="text-[#07191c]">Free first consultation</b> · Reply within 1 business day</span>
          </span>
          <span className="hidden md:flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#124045]" />
            <span><b className="text-[#07191c]">100% Code Ownership</b> · No vendor lock-in</span>
          </span>
          <span className="hidden lg:flex items-center gap-2">
            <Award size={16} className="text-[#1f636b]" />
            <span><b className="text-[#07191c]">Modern Standards</b> · React, Cloud & Scalable APIs</span>
          </span>
        </div>

        {/* <div className="hidden sm:flex items-center gap-2 text-slate-500 font-bold text-xs">
          <i className="w-5 h-8 rounded-full border-2 border-[#124045] relative inline-block before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1.5 before:w-1 before:h-2 before:rounded-full before:bg-[#124045] before:animate-pulse"></i>
          <span>Scroll to explore</span>
        </div> */}
      </div>
    </div>
  );
};
