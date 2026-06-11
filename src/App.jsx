import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initReveal, initParallax } from './utils/animations';

import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Services from './components/Services';
import Works    from './components/Works';
import Contact  from './components/Contact';
import Footer   from './components/Footer';
import './index.css';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // ── ScrollTrigger — native scroll, no wrapper needed ──────
    ScrollTrigger.config({ ignoreMobileResize: true });

    // ── Custom cursor (zero-lag RAF) ───────────────────────────
    const cursor = cursorRef.current;
    let rafId;
    let tx = 0, ty = 0;
    let visible = false;

    const onMouseMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible && cursor) {
        cursor.style.opacity = '1';
        visible = true;
      }
    };

    const renderCursor = () => {
      if (cursor) cursor.style.transform = `translate(${tx - 14}px,${ty - 14}px)`;
      rafId = requestAnimationFrame(renderCursor);
    };

    if (cursor) cursor.style.opacity = '0';
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(renderCursor);

    // ── Scroll animations (after first paint) ─────────────────
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initReveal('MAXIMUM');
        initParallax(0.18);
      });
    });

    // ── Cleanup ────────────────────────────────────────────────
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
