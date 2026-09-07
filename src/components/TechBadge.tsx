import React from 'react';

interface TechBadgeProps {
  name: string;
  isCore?: boolean;
  isFamiliar?: boolean;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  isCore = false,
  isFamiliar = false,
  size = 'md',
}) => {
  const sizeClasses =
    size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs md:text-sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono-code rounded-md hairline-border bg-[var(--card)] text-[var(--fg)] hover:bg-[var(--card-hover)] hover:border-[var(--border-strong)] transition-all duration-200 ${sizeClasses}`}
    >
      {isCore && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse"
          title="Core Technology Stack"
        />
      )}
      {isFamiliar && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-[var(--fg-dim)]"
          title="Familiar Technology"
        />
      )}
      {name}
    </span>
  );
};
