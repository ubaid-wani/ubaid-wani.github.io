import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';

export const About: React.FC = () => {
  const { aboutLines } = portfolioData;

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elev)]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Left: Section label */}
          <div className="md:col-span-4">
            <SectionHeader number="00" title="About" serifWord="Me" className="mb-0" />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-8">
            <div className="space-y-5 max-w-2xl">
              {aboutLines.map((line, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg text-[var(--fg-muted)] leading-relaxed font-normal"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Education inline */}
            <div className="mt-10 pt-6 border-t border-[var(--border)]">
              <span className="font-mono-code text-[10px] text-[var(--fg-dim)] tracking-widest uppercase block mb-2">
                Education
              </span>
              <p className="font-mono-code text-xs text-[var(--fg-muted)]">
                B.E. Electronics & Communication — SSM College of Engineering{' '}
                <span className="text-[var(--fg-dim)]">· 2021 · CGPA 7.83</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
