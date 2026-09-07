import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeader } from '../components/SectionHeader';
import { TechBadge } from '../components/TechBadge';
import { ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elev)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader number="02" title="Featured" serifWord="Projects" />

        <div className="space-y-0">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group py-8 md:py-10 cursor-default ${idx !== 0 ? 'border-t border-[var(--border)]' : ''} hover:bg-[var(--card)] -mx-4 px-4 md:-mx-8 md:px-8 transition-colors duration-300 rounded-lg`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start">

                {/* Index number */}
                <div className="md:col-span-1">
                  <span className="font-mono-code text-xs text-[var(--fg-dim)]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Main content */}
                <div className="md:col-span-8">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--fg)] tracking-tight mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} size="sm" isCore={false} />
                    ))}
                  </div>
                </div>

                {/* Metrics + Arrow */}
                <div className="md:col-span-3 flex md:flex-col md:items-end justify-between md:justify-start gap-2">
                  <span className="font-mono-code text-[10px] text-[var(--fg-dim)] leading-relaxed text-right max-w-[160px]">
                    {project.metrics}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--fg-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
