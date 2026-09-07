import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  serifWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  serifWord,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="font-mono-code text-xs tracking-widest text-[var(--accent)] uppercase font-medium">
          // {number}
        </span>
        <div className="h-px w-8 bg-[var(--border-strong)] inline-block" />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--fg)]">
        {title}{' '}
        {serifWord && (
          <span className="font-serif-italic font-normal text-[var(--accent)] italic">
            {serifWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--fg-muted)] max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
