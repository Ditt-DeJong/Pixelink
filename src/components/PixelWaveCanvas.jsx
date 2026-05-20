import React, { useRef, useEffect } from 'react';

const PixelWaveCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Grid configuration
    const cols = 28;
    const rows = 14;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);
    
    // Create particles representing the grid
    let particles = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // We set coordinates with a natural wave envelope to start with
        const baseX = c * spacingX;
        const baseY = height / 2 + (r - rows / 2) * (spacingY * 0.7);
        
        particles.push({
          c,
          r,
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          size: 0,
          opacity: 0,
          phase: (c / cols) * Math.PI * 2 + (r / rows) * Math.PI
        });
      }
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      const newSpacingX = width / (cols - 1);
      const newSpacingY = height / (rows - 1);
      
      particles.forEach(p => {
        p.baseX = p.c * newSpacingX;
        p.baseY = height / 2 + (p.r - rows / 2) * (newSpacingY * 0.7);
      });
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle horizontal mesh lines connecting the wave columns to make it look linked
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
      ctx.lineWidth = 1;

      const mouse = mouseRef.current;

      // Update positions and draw
      particles.forEach((p, index) => {
        // Base mathematical sine wave to create the wave motion
        // We use sine wave based on X coordinate + time to make a running wave
        const waveY = Math.sin(p.baseX * 0.006 - time * 1.5) * 35;
        const waveX = Math.cos(p.baseY * 0.005 - time * 0.8) * 10;
        
        const targetX = p.baseX + waveX;
        const targetY = p.baseY + waveY;

        // Mouse interaction displacement
        let dispX = 0;
        let dispY = 0;
        if (mouse.active) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 120;

          if (dist < forceRadius) {
            const force = (forceRadius - dist) / forceRadius; // 0 to 1
            const angle = Math.atan2(dy, dx);
            // Push particles away
            const push = force * 20;
            dispX = Math.cos(angle) * push;
            dispY = Math.sin(angle) * push;
          }
        }

        // Apply smooth spring-like physics interpolation
        p.x += (targetX + dispX - p.x) * 0.1;
        p.y += (targetY + dispY - p.y) * 0.1;

        // Halftone size calculation matching the wave logo:
        // Larger in the middle of the wave, tapering off to tiny dots at the left and right ends
        const horizontalEnvelope = Math.sin((p.x / width) * Math.PI);
        const verticalEnvelope = Math.sin(((p.r + 1) / (rows + 1)) * Math.PI);
        
        // Base size multiplier
        let finalSize = 7 * horizontalEnvelope * verticalEnvelope;
        
        // Size pulsation
        finalSize += Math.sin(time * 2 + p.phase) * 1.5;
        
        if (finalSize < 1) finalSize = 1;

        p.size = finalSize;
        p.opacity = 0.2 + 0.8 * horizontalEnvelope * verticalEnvelope;

        // Calculate gradient color
        // Left columns are lighter cyan, right columns are deeper electric blue
        const colorRatio = p.x / width;
        const r = Math.round(0 + (79 - 0) * colorRatio);
        const g = Math.round(242 + (172 - 242) * colorRatio);
        const b = Math.round(254 + (254 - 254) * colorRatio);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;

        // Draw rounded squares (representing the halftone pixels of the logo)
        const radius = p.size * 0.35; // Rounded corners
        ctx.beginPath();
        
        // Custom draw rounded rectangle (ctx.roundRect may not be supported in older platforms, so we use standard arc curves)
        const px = p.x - p.size / 2;
        const py = p.y - p.size / 2;
        const w = p.size;
        const h = p.size;
        
        ctx.moveTo(px + radius, py);
        ctx.lineTo(px + w - radius, py);
        ctx.quadraticCurveTo(px + w, py, px + w, py + radius);
        ctx.lineTo(px + w, py + h - radius);
        ctx.quadraticCurveTo(px + w, py + h, px + w - radius, py + h);
        ctx.lineTo(px + radius, py + h - radius);
        ctx.quadraticCurveTo(px, py + h, px, py + h - radius);
        ctx.lineTo(px, py + radius);
        ctx.quadraticCurveTo(px, py, px + radius, py);
        ctx.closePath();
        ctx.fill();

        // Optional: Adding a micro cyan glow overlay for very premium feeling
        if (p.size > 5 && Math.random() > 0.99) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(0, 242, 254, 0.6)';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Decorative tech border around the canvas area */}
      <div className="absolute inset-0 border border-[rgba(0,242,254,0.06)] rounded-lg pointer-events-none"></div>
      
      {/* Corner indicators for futuristic agency HUD feel */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[rgba(0,242,254,0.3)] pointer-events-none"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[rgba(0,242,254,0.3)] pointer-events-none"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[rgba(0,242,254,0.3)] pointer-events-none"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[rgba(0,242,254,0.3)] pointer-events-none"></div>
      
      {/* Subtle halftone background overlay for the HUD */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,254,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>
      
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          cursor: 'none'
        }} 
      />
    </div>
  );
};

export default PixelWaveCanvas;
