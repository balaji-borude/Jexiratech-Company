import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="wrap">
      <div className="trust-bar">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-brand" />
            <span><b>Free first consultation</b> · Reply within 1 business day</span>
          </span>
          <span className="hidden md:flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span><b>100% Code Ownership</b> · No vendor lock-in</span>
          </span>
          <span className="hidden lg:flex items-center gap-2">
            <Award size={16} className="text-amber-500" />
            <span><b>Modern Standards</b> · React, Cloud & Scalable APIs</span>
          </span>
        </div>

        <div className="scroll-cue flex items-center">
          <i className="mouse-indicator"></i>
          <b>Scroll to explore</b>
        </div>
      </div>
    </div>
  );
};

