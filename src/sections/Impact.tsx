import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GridBackground } from '../components/GridBackground';

export const Impact: React.FC = () => {
  const { metrics } = portfolioData;

  return (
    <section id="impact" className="relative border-b border-[var(--border)] overflow-hidden">
      <GridBackground mask="radial" density="sparse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {metrics.map((metric) => (
            <div key={metric.label} className="py-12 px-8 first:pl-0 last:pr-0 group">
              <div
                className="text-5xl md:text-6xl font-extrabold text-[var(--fg)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors duration-500"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {metric.value}
              </div>
              <div className="font-mono-code text-xs text-[var(--accent)] tracking-widest uppercase mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[var(--fg-dim)] leading-relaxed max-w-[200px]">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
