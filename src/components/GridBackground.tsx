import React from 'react';

interface GridBackgroundProps {
  density?: 'normal' | 'dense' | 'sparse';
  mask?: 'radial' | 'hero' | 'top' | 'none';
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  density = 'normal',
  mask = 'radial',
  className = '',
}) => {
  const sizeMap = {
    dense: '32px 32px',
    normal: '64px 64px',
    sparse: '96px 96px',
  };

  const maskClasses = {
    radial: 'grid-mask-radial',
    hero: 'grid-mask-hero',
    top: 'mask-[linear-gradient(to_bottom,black_0%,transparent_100%)]',
    none: '',
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div
        className={`h-full w-full grid-bg-pattern ${maskClasses[mask]}`}
        style={{ backgroundSize: sizeMap[density] }}
      />
    </div>
  );
};
