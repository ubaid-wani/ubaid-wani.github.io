import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          title="Academic"
          serifWord="Degree"
        />

        <div className="max-w-3xl p-6 rounded-2xl tech-card hairline-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 hairline-divider">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] hairline-border">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--fg)]">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono-code text-[var(--accent)] font-semibold mt-0.5">
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card)] hairline-border font-mono-code text-xs text-[var(--fg-muted)]">
              <Calendar className="w-3 h-3 text-[var(--accent)]" />
              <span>{education.period}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 font-mono-code text-xs text-[var(--fg-muted)]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--fg-dim)]" /> {education.location}
            </span>
            <span className="flex items-center gap-1 text-[var(--accent)] font-semibold px-2.5 py-0.5 rounded bg-[var(--accent)]/10 hairline-border">
              <Award className="w-3.5 h-3.5" /> {education.gpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
