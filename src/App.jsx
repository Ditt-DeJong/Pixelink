import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initReveal, initParallax } from './utils/animations';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Custom Cursor
    const cursor = cursorRef.current;
    let rafId;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const renderCursor = () => {
      if (cursor) {
        cursor.style.transform = `translate(${targetX - 16}px, ${targetY - 16}px)`;
      }
      rafId = requestAnimationFrame(renderCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(renderCursor);

    // 3. Init Animations
    setTimeout(() => {
      initReveal('MAXIMUM');
      initParallax(0.25);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
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
