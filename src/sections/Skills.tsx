import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader number="03" title="Technical" serifWord="Stack" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {skills.map((cat) => (
            <div key={cat.category} className="py-2 px-0 sm:px-8 first:pl-0 last:pr-0">
              {/* Category label */}
              <h3 className="font-mono-code text-[10px] tracking-widest text-[var(--accent)] uppercase mb-4">
                {cat.category}
              </h3>

              {/* Skills as clean list */}
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono-code text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="text-[var(--border-strong)] select-none">—</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
