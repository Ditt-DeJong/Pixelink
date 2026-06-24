import React, { useRef, useEffect } from 'react';

/**
 * Logo component for Kabin Code.
 * Renders a cabin silhouette with a door and the word "Code".
 * 
 * Props:
 * - size: height of the logo in pixels (default: 40)
 * - animated: if true, starts in a closed state so that Preloader can animate it.
 *             if false, renders in the final open/complete state.
 */
const Logo = ({ size = 40, animated = false, className = '' }) => {
  const doorRef = useRef(null);
  const textRef = useRef(null);

  // The aspect ratio of our viewBox (0 0 120 60) is 2:1.
  // So width is size * 2.
  const width = size * 2.

  useEffect(() => {
    if (!animated) {
      // Set to final state immediately if not animated
      if (doorRef.current) {
        doorRef.current.style.transform = 'scaleX(0.15)';
        doorRef.current.style.transformOrigin = '19px 34px';
      }
      if (textRef.current) {
        textRef.current.style.transform = 'translateX(0px)';
        textRef.current.style.opacity = '1';
      }
    } else {
      // Start in closed / hidden state
      if (doorRef.current) {
        doorRef.current.style.transform = 'scaleX(1)';
        doorRef.current.style.transformOrigin = '19px 34px';
      }
      if (textRef.current) {
        textRef.current.style.transform = 'translateX(-32px)';
        textRef.current.style.opacity = '0';
      }
    }
  }, [animated]);

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Clip path starting at the middle of the door (x = 25) going to the right.
            This ensures the text "Code" is hidden while inside the cabin (x < 25) 
            and only reveals itself as it slides out to the right. */}
        <clipPath id="cabin-door-clip">
          <rect x="25" y="0" width="100" height="60" />
        </clipPath>
      </defs>

      {/* Cabin Silhouette */}
      <path
        d="M 5 28 L 25 12 L 45 28 L 41 28 L 41 52 L 9 52 L 9 28 Z"
        fill="var(--accent)"
        style={{ transition: 'fill 0.3s' }}
      />

      {/* Dark Cabin Interior (Door Opening) */}
      <rect
        x="19"
        y="34"
        width="12"
        height="18"
        rx="1"
        fill="#231C13"
      />

      {/* Animatable Text "Code" - Clipped by the door boundary */}
      <g clipPath="url(#cabin-door-clip)">
        <text
          ref={textRef}
          x="52"
          y="48"
          fill="var(--text-primary)"
          className="logo-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '18px',
            letterSpacing: '-0.02em',
            transition: 'fill 0.3s, transform 0.5s ease-out, opacity 0.5s ease-out',
          }}
        >
          Code
        </text>
      </g>

      {/* Animatable Cabin Door (Swings/scales to the left) */}
      <rect
        ref={doorRef}
        x="19"
        y="34"
        width="12"
        height="18"
        rx="0.5"
        fill="var(--accent-warm)"
        className="logo-door"
        style={{
          transition: 'transform 0.5s var(--ease-out-expo), fill 0.3s',
        }}
      />
    </svg>
  );
};

export default Logo;
