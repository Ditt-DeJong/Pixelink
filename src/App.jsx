import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    }
  }

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate="default"
      />
      <div className="ambient-glow"></div>
      <Navbar />
      <main>
        <Hero />
        <div className="divider"></div>
        <Services />
        <div className="divider"></div>
        <Works />
        <div className="divider"></div>
        <Contact />
        <div className="divider"></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
