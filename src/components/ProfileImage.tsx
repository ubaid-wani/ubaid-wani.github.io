import React from 'react';
import ubaidPortrait from '../assets/ubaid-portrait.jpg';

interface ProfileImageProps {
  className?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: 'clamp(240px, 28vw, 420px)', aspectRatio: '3/4' }}
    >
      {/* No border, no frame — just the image bleeding to bottom */}
      <img
        src={ubaidPortrait}
        alt="Ubaid Ashraf — Full-Stack Developer"
        className="w-full h-full object-cover object-top"
        style={{
          maskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
        }}
        loading="eager"
      />
    </div>
  );
};
