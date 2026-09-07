import React from 'react';
import type { ProjectItem } from '../data/portfolio';
import { TechBadge } from './TechBadge';
import { Server, Activity } from 'lucide-react';


interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const renderAbstractVisual = (id: string) => {
    switch (id) {
      case 'surecatch-cdp':
        return (
          <div className="w-full bg-[var(--bg-elev)] rounded-xl p-3.5 hairline-border overflow-hidden space-y-3 font-mono-code text-[10px]">
            <div className="flex items-center justify-between text-[var(--accent)] font-semibold pb-2 hairline-divider">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" /> CDP EVENT INGESTION
              </span>
              <span>4,000,000+ PROFILES</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-[var(--card)] hairline-border">
                <span className="block text-[var(--fg)] font-semibold">Identity Data</span>
                <span className="text-[9px] text-[var(--accent)]">Browser SDK</span>
              </div>
              <div className="p-2 rounded bg-[var(--accent)]/10 hairline-border border-[var(--accent)]/30">
                <span className="block text-[var(--accent)] font-bold">AWS SQS</span>
                <span className="text-[9px] text-[var(--fg-muted)]">Async Queue</span>
              </div>
              <div className="p-2 rounded bg-[var(--card)] hairline-border">
                <span className="block text-[var(--fg)] font-semibold">Redis / DB</span>
                <span className="text-[9px] text-[var(--fg-dim)]">Cached Store</span>
              </div>
            </div>
          </div>
        );

      case 'prepx':
        return (
          <div className="w-full bg-[var(--bg-elev)] rounded-xl p-3.5 hairline-border overflow-hidden space-y-2 font-mono-code text-[10px]">
            <div className="flex items-center justify-between text-[var(--fg)] font-semibold pb-2 hairline-divider">
              <span className="flex items-center gap-1.5 text-[var(--accent)]">
                <Server className="w-3.5 h-3.5" /> ELYSIA.JS / BUN RUNTIME
              </span>
              <span>TEST_ENGINE</span>
            </div>
            <div className="space-y-1.5">
              <div className="p-1.5 rounded bg-[var(--card)] hairline-border flex justify-between">
                <span>Frontend Layer</span>
                <span className="text-[var(--accent)]">React + TanStack Query</span>
              </div>
              <div className="p-1.5 rounded bg-[var(--card)] hairline-border flex justify-between">
                <span>Database & Storage</span>
                <span className="text-[var(--fg-muted)]">MySQL / Turso / R2</span>
              </div>
            </div>
          </div>
        );

      case 'salah-times':
        return (
          <div className="w-full bg-[var(--bg-elev)] rounded-xl p-3.5 hairline-border overflow-hidden font-mono-code text-[10px]">
            <div className="flex items-center justify-between text-[var(--accent)] font-semibold pb-2 hairline-divider">
              <span>BACKEND MIGRATION</span>
              <span>FIREBASE ➔ HONO/BUN</span>
            </div>
            <div className="my-2 p-2 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-center text-[var(--accent)] font-bold">
              Low Latency · Custom Hono Microservice
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="group relative rounded-2xl p-6 tech-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-3 font-mono-code text-xs text-[var(--fg-dim)]">
          <span>// PROJECT [0{index + 1}]</span>
          <span className="text-[var(--accent)] font-semibold">{project.metrics}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Abstract Graphic */}
        <div className="mb-4">{renderAbstractVisual(project.id)}</div>

        {/* Short Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((h, idx) => (
            <li key={idx} className="text-xs text-[var(--fg)] flex items-start gap-1.5">
              <span className="text-[var(--accent)] font-mono-code">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 hairline-divider flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TechBadge key={tag} name={tag} size="sm" />
        ))}
      </div>
    </div>
  );
};
