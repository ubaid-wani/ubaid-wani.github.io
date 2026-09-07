import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { TechBadge } from '../components/TechBadge';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader number="01" title="Work" serifWord="Experience" />

        <div className="space-y-0">
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className={`group py-10 md:py-12 ${idx !== 0 ? 'border-t border-[var(--border)]' : ''}`}
            >
              {/* Row layout: company info left, period right */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">

                {/* Left: Period + Company */}
                <div className="md:col-span-3">
                  <span className="font-mono-code text-xs text-[var(--fg-dim)] tracking-wider block mb-1">
                    {exp.period}
                  </span>
                  <span className="font-mono-code text-xs text-[var(--accent)] tracking-wider block">
                    {exp.location}
                  </span>
                </div>

                {/* Right: Role, company, highlights, tech */}
                <div className="md:col-span-9">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--fg)] tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="font-mono-code text-xs text-[var(--fg-muted)] mb-5">
                    {exp.company}
                  </p>

                  {/* Highlights — only 2-3 concise points */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--fg-muted)] leading-relaxed">
                        <span className="text-[var(--accent)] mt-1 shrink-0 text-[10px]">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" isCore={true} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
