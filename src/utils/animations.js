import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Kill existing instances before re-init (hot reload safety)
const killExisting = () => {
  ScrollTrigger.getAll().forEach(t => t.kill());
};

export const initReveal = (motionLevel = 'MAXIMUM') => {
  const config = {
    MAXIMUM:  { y: 55,  duration: 0.85, stagger: 0.06 },
    MODERATE: { y: 35,  duration: 0.8,  stagger: 0.06 },
    GENTLE:   { y: 20,  duration: 0.6,  stagger: 0.04 },
  };

  const { y, duration, stagger } = config[motionLevel] ?? config.MAXIMUM;

  killExisting();

  // Batch is more efficient than individual ScrollTriggers
  ScrollTrigger.batch('[data-reveal]', {
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        overwrite: true,
      }),
    start: 'top 90%',
    once: true,   // remove trigger after firing — saves memory
  });

  // Group stagger: [data-reveal-group] > [data-reveal-item]
  gsap.utils.toArray('[data-reveal-group]').forEach(group => {
    const children = group.querySelectorAll('[data-reveal-item]');
    if (!children.length) return;
    gsap.fromTo(
      children,
      { y, opacity: 0 },
      {
        y: 0, opacity: 1, duration, stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      }
    );
  });

  // Single refresh AFTER all triggers are registered
  ScrollTrigger.refresh();
};

export const initParallax = (strength = 0.2) => {
  gsap.utils.toArray('[data-parallax]').forEach(el => {
    gsap.fromTo(
      el,
      { yPercent: -strength * 100 },
      {
        yPercent: strength * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5, // higher = smoother, less CPU
          invalidateOnRefresh: true,
        },
      }
    );
  });
};
