import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 bg-[var(--bg)] border-t border-[var(--border)] font-mono-code text-[10px] text-[var(--fg-dim)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <span className="tracking-widest uppercase">
          Ubaid Ashraf — Portfolio 2026
        </span>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-[var(--fg-dim)] hover:text-[var(--fg)] transition-colors"
          aria-label="Back to top"
        >
          Back to top <ArrowUp className="w-3 h-3" /></button>
      </div>
    </footer>
  );
};
