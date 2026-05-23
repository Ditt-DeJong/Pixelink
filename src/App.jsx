import React, { useEffect, useRef } from 'react';
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
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const render = () => {
      cursor.style.transform = `translate(${targetX - 16}px, ${targetY - 16}px)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-[var(--clr-accent)] rounded-full pointer-events-none z-[9999] bg-[rgba(0,229,255,0.1)] backdrop-blur-sm mix-blend-difference will-change-transform" />
      <div className="ambient-glow fixed inset-0 -z-10 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 20% 20%, rgba(0,242,254,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(79,172,254,0.05) 0%, transparent 60%)',
        backgroundImage: 'radial-gradient(rgba(0,242,254,0.03) 1.5px, transparent 1.5px), radial-gradient(ellipse 60% 50% at 20% 20%, rgba(0,242,254,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(79,172,254,0.05) 0%, transparent 60%)',
        backgroundSize: '24px 24px, 100% 100%, 100% 100%'
      }} />
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-px bg-[var(--clr-border)]" />
        <Services />
        <div className="w-full h-px bg-[var(--clr-border)]" />
        <Works />
        <div className="w-full h-px bg-[var(--clr-border)]" />
        <Contact />
        <div className="w-full h-px bg-[var(--clr-border)]" />
      </main>
      <Footer />
    </>
  );
}

export default App;
