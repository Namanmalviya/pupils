import React from 'react';

// Curved arrow pointing down-right or down-left
export const CurvedArrow = ({ className = "w-12 h-12 text-pupils-orange", direction = "down-right" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === "down-right" ? (
        <path
          d="M20 20 C 50 10, 80 40, 75 75 M75 75 L60 65 M75 75 L82 58"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M80 20 C 50 10, 20 40, 25 75 M25 75 L40 65 M25 75 L18 58"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

// Hand-drawn Crown accent
export const CrownAccent = ({ className = "w-8 h-8 text-pupils-orange" }) => {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 32 L10 10 L25 22 L30 5 L35 22 L50 10 L55 32 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2.5" fill="currentColor" />
      <circle cx="30" cy="3" r="2.5" fill="currentColor" />
      <circle cx="50" cy="8" r="2.5" fill="currentColor" />
    </svg>
  );
};

// Sparkle rays accent
export const SparkleRays = ({ className = "w-6 h-6 text-pupils-purple" }) => {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 V36 M4 20 H36 M8 8 L32 32 M32 8 L8 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// Hand-drawn Sun accent
export const SunAccent = ({ className = "w-8 h-8 text-pupils-orange" }) => {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="3" />
      <path d="M25 5 V11 M25 39 V45 M5 25 H11 M39 25 H45 M11 11 L15 15 M35 35 L39 39 M11 39 L15 35 M35 15 L39 11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// Verified Credential Badge
export const VerifiedCheckBadge = ({ text = "Verified Student", size = "normal" }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pupils-verifiedBg text-pupils-verified font-semibold border border-emerald-200/60 shadow-sm ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span>{text}</span>
    </div>
  );
};
