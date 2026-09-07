import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GridBackground } from '../components/GridBackground';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden border-b border-[var(--border)]">
      <GridBackground mask="radial" density="sparse" />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] glow-accent pointer-events-none opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Big editorial heading */}
        <div className="mb-16">
          <span className="font-mono-code text-[10px] text-[var(--accent)] tracking-widest uppercase block mb-6">
            // 04 — Contact
          </span>
          <h2
            className="leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
          >
            <span
              className="block text-[var(--fg)] font-extrabold"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
            >
              LET'S
            </span>
            <span
              className="block text-[var(--accent)]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              work together.
            </span>
          </h2>
        </div>

        {/* Two-column: contact links + info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[var(--border)] pt-10">

          {/* Left: Primary CTA + socials */}
          <div className="md:col-span-7 space-y-8">
            <p className="text-sm md:text-base text-[var(--fg-muted)] leading-relaxed max-w-md">
              Open for{' '}
              <span className="text-[var(--fg)] italic">full-time engineering roles</span>{' '}
              and interesting collaborations. Based in Kashmir, working remotely.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={`mailto:${personal.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] font-mono-code text-xs font-bold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                Email me
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[var(--fg-muted)] font-mono-code text-xs hover:text-[var(--fg)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[var(--fg-muted)] font-mono-code text-xs hover:text-[var(--fg)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Quick info */}
          <div className="md:col-span-5 space-y-6">
            {[
              { label: 'EMAIL', value: personal.email, href: `mailto:${personal.email}` },
              { label: 'PHONE', value: personal.phone, href: `tel:${personal.phone}` },
              { label: 'LOCATION', value: personal.location, href: null },
            ].map((item) => (
              <div key={item.label} className="border-t border-[var(--border)] pt-4">
                <span className="font-mono-code text-[9px] text-[var(--fg-dim)] tracking-widest uppercase block mb-1">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-mono-code text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-mono-code text-sm text-[var(--fg-muted)]">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
