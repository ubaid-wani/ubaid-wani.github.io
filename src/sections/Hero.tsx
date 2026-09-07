import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ProfileImage } from '../components/ProfileImage';
import { GridBackground } from '../components/GridBackground';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-0 overflow-hidden"
      style={{ paddingTop: 'calc(3.5rem + 2.25rem)' }}
    >
      {/* Background Grid */}
      <GridBackground mask="hero" density="normal" />

      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] glow-accent pointer-events-none opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full flex-1 flex flex-col justify-center py-10">
        {/* Main Hero Grid: Name Left, Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left — Giant Name + CTA */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-end gap-10">

            {/* Name Block */}
            <div>
              {/* Mono label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[5px] w-[5px] rounded-full bg-[var(--accent)]" />
                <span className="font-mono-code text-[10px] tracking-[0.2em] text-[var(--accent)] uppercase">
                  {personal.title}
                </span>
              </div>

              {/* Giant Name */}
              <h1
                className="leading-[0.88] tracking-tight"
                style={{ fontSize: 'clamp(5rem, 14vw, 13rem)' }}
              >
                {/* UBAID — Inter extrabold */}
                <span
                  className="block text-[var(--fg)] font-extrabold"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
                >
                  UBAID
                </span>
                {/* ASHRAF — Instrument Serif italic bold */}
                <span
                  className="block text-[var(--accent)]"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 700,
                  }}
                >
                  ASHRAF.
                </span>
              </h1>
            </div>

            {/* Short bio + CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-8">
              {/* Bio */}
              <div className="max-w-sm">
                <p className="text-sm md:text-base text-[var(--fg-muted)] leading-relaxed font-normal">
                  Full-stack developer crafting high-scale web systems,{' '}
                  <span className="text-[var(--fg)] italic">
                    low-latency APIs,
                  </span>{' '}
                  and resilient event-driven architectures.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:ml-auto shrink-0">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] font-mono-code text-xs font-bold hover:opacity-90 transition-all duration-300"
                >
                  Download CV{' '}
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-1.5 text-[var(--fg-muted)] font-mono-code text-xs hover:text-[var(--accent)] transition-colors"
                >
                  Email me{' '}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--fg-dim)] hover:text-[var(--fg)] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--fg-dim)] hover:text-[var(--fg)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Portrait, flush to bottom */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-end items-end">
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="relative z-10 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 divide-x divide-[var(--border)] py-3">
            {[
              { label: 'EXPERIENCE', value: '3+ Years' },
              { label: 'SPECIALIZATION', value: 'Full-Stack Engineering' },
              { label: 'AVAILABILITY', value: 'Open to Work' },
            ].map((item) => (
              <div key={item.label} className="px-4 first:pl-0 last:pr-0">
                <span className="font-mono-code text-[9px] text-[var(--fg-dim)] tracking-widest block uppercase">
                  {item.label}
                </span>
                <span className="font-mono-code text-[10px] text-[var(--fg-muted)] tracking-wide">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
