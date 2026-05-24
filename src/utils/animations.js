import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initReveal = (motionLevel = 'MAXIMUM') => {
  const config = {
    MAXIMUM:    { y: 70,  duration: 1.0, stagger: 0.08 },
    MODERATE:   { y: 40,  duration: 0.8, stagger: 0.06 },
    SLOW:       { y: 20,  duration: 1.4, stagger: 0.12 },
    SENSORY:    { y: 30,  duration: 1.2, stagger: 0.10 },
    GENTLE:     { y: 0,   duration: 0.6, stagger: 0.04 },
    CONVERSION: { y: 20,  duration: 0.5, stagger: 0.04 },
    ACCESSIBLE: { y: 0,   duration: 0.4, stagger: 0.0  },
  };
  
  const { y, duration, stagger } = config[motionLevel] || config.MAXIMUM;
  
  gsap.utils.toArray('[data-reveal]').forEach(el => {
    gsap.fromTo(el,
      { y, opacity: 0 },
      {
        y: 0, opacity: 1, duration, ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  gsap.utils.toArray('[data-reveal-group]').forEach(group => {
    const children = group.querySelectorAll('[data-reveal-item]');
    if (children.length > 0) {
      gsap.fromTo(children,
        { y, opacity: 0 },
        {
          y: 0, opacity: 1, duration, stagger, ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 80%' }
        }
      );
    }
  });
};

export const wordReveal = (selector) => {
  document.querySelectorAll(selector).forEach(el => {
    if (el.dataset.wordRevealed) return;
    el.dataset.wordRevealed = 'true';
    
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words
      .map(w => `<span class="word" style="overflow:hidden;display:inline-block;vertical-align:top;">
                   <span class="word-inner" style="display:inline-block;transform-origin:0 100%;">${w}</span>
                 </span>`)
      .join(' ');
    
    gsap.fromTo(
      el.querySelectorAll('.word-inner'),
      { yPercent: 115, rotation: 2 },
      {
        yPercent: 0, rotation: 0,
        duration: 0.85, ease: 'power4.out', stagger: 0.055,
        scrollTrigger: { trigger: el, start: 'top 82%' }
      }
    );
  });
};

export const initParallax = (strength = 0.25) => {
  gsap.utils.toArray('[data-parallax]').forEach(img => {
    gsap.fromTo(img,
      { yPercent: -strength * 100 },
      {
        yPercent: strength * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
};
