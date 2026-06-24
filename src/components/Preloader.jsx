import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

/**
 * Preloader component for Kabin Code.
 * Displays a loading percentage, a progress bar, and then
 * animates the Cabin logo door opening and the word "Code" sliding out.
 * Finally, slides up to reveal the landing page.
 */
const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Find the logo elements inside this container
      const door = containerRef.current.querySelector('.logo-door');
      const text = containerRef.current.querySelector('.logo-text');

      // Ensure initial styles are set properly for the animated state
      if (door) {
        gsap.set(door, { scaleX: 1, transformOrigin: '19px 34px' });
      }
      if (text) {
        gsap.set(text, { x: -32, opacity: 0 });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1. Animate progress count from 0 to 100
      const count = { val: 0 };
      tl.to(count, {
        val: 100,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          const current = Math.floor(count.val);
          setProgress(current);
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, { scaleX: current / 100 });
          }
        }
      });

      // 2. Fade out progress text and progress bar
      tl.to([progressTextRef.current, progressBarRef.current?.parentElement], {
        opacity: 0,
        y: 10,
        duration: 0.35,
        ease: 'power2.inOut',
        stagger: 0.05
      });

      // 3. Open the cabin door
      tl.to(door, {
        scaleX: 0.15,
        duration: 0.5,
        ease: 'power2.inOut'
      }, '+=0.1');

      // 4. Slide the "Code" text out from inside the cabin
      tl.to(text, {
        x: 0,
        opacity: 1,
        duration: 0.65,
        ease: 'back.out(1.4)'
      }, '-=0.25');

      // 5. Hold the completed logo for a brief moment
      // 6. Slide up the entire preloader panel to reveal the website
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power4.inOut'
      }, '+=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--s6)',
      }}
    >
      {/* Centered Logo Container */}
      <div className="flex flex-col items-center justify-center">
        <Logo size={55} animated={true} />
      </div>

      {/* Progress Container (centered, fixed width) */}
      <div className="flex flex-col items-center" style={{ width: '120px', gap: 'var(--s2)' }}>
        {/* Progress bar track */}
        <div
          style={{
            width: '100%',
            height: '2px',
            background: 'var(--border)',
            borderRadius: '1px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Progress bar fill */}
          <div
            ref={progressBarRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '100%',
              background: 'var(--accent)',
              transformOrigin: 'left',
              transform: 'scaleX(0)'
            }}
          />
        </div>

        {/* Progress Text */}
        <span
          ref={progressTextRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: 'var(--accent)',
          }}
        >
          {progress.toString().padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
