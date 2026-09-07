import React from 'react';
import type { EngineeringMetric } from '../data/portfolio';

interface MetricCardProps {
  metric: EngineeringMetric;
  index: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
  return (
    <div className="group relative rounded-2xl p-6 md:p-8 tech-card overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono-code text-xs text-[var(--accent)] font-semibold">
            // METRIC [0{index + 1}]
          </span>
        </div>

        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--accent)] font-mono-code mb-2">
          {metric.value}
        </div>

        <h3 className="text-lg font-bold text-[var(--fg)] mb-2">
          {metric.label}
        </h3>
      </div>

      <p className="text-xs font-mono-code text-[var(--fg-muted)] pt-3 hairline-divider leading-relaxed">
        {metric.detail}
      </p>
    </div>
  );
};
