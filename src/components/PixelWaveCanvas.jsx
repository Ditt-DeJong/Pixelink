import { useRef, useEffect } from 'react';

const PixelWaveCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // willReadFrequently: false — we only write, never read pixels
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    if (!ctx) return;

    let rafId;
    let width = 0, height = 0;

    const COLS = 22;
    const ROWS = 11;
    const MOUSE_RADIUS = 110;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

    let particles = [];

    const buildParticles = () => {
      width  = canvas.width  = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      const sx = width  / (COLS - 1);
      const sy = height / (ROWS - 1);

      particles = new Array(COLS * ROWS);
      let i = 0;
      for (let c = 0; c < COLS; c++) {
        for (let r = 0; r < ROWS; r++) {
          const bx = c * sx;
          const by = height / 2 + (r - ROWS / 2) * (sy * 0.7);
          particles[i++] = {
            bx, by,
            x: bx, y: by,
            phase: (c / COLS) * Math.PI * 2 + (r / ROWS) * Math.PI,
            cr: c / (COLS - 1), // pre-calc color ratio
          };
        }
      }
    };

    buildParticles();

    // Debounced resize
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildParticles, 200);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Mouse
    const onMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };
    canvas.addEventListener('mousemove', onMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', onMouseLeave);

    let time = 0;

    // Pre-allocate bucket map to avoid per-frame object creation
    // Key = "r,g,b,opacityBucket" → array of particle draw calls
    const buckets = new Map();

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouseRef.current;

      buckets.clear();

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // Wave
        const wy = Math.sin(p.bx * 0.006 - time * 1.4) * 30;
        const wx = Math.cos(p.by * 0.005 - time * 0.75) * 8;
        let tx = p.bx + wx;
        let ty = p.by + wy;

        // Mouse repulsion (skip sqrt when far)
        const dx = tx - mx;
        const dy = ty - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_RADIUS_SQ) {
          const dist  = Math.sqrt(d2);
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          const inv   = 1 / dist;
          tx += dx * inv * force * 16;
          ty += dy * inv * force * 16;
        }

        // Spring lerp
        p.x += (tx - p.x) * 0.1;
        p.y += (ty - p.y) * 0.1;

        // Size & opacity envelope
        const hEnv = Math.sin((p.x / width) * Math.PI);
        const vEnv = Math.sin(((i % ROWS + 1) / (ROWS + 1)) * Math.PI);
        let sz = 6 * hEnv * vEnv + Math.sin(time * 2 + p.phase) * 1.2;
        if (sz < 0.7) sz = 0.7;

        const op = Math.round((0.15 + 0.85 * hEnv * vEnv) * 10) / 10; // quantise → fewer unique keys

        // Color (cyan → blue gradient)
        const r = Math.round(p.cr * 79);
        const g = Math.round(242 - p.cr * 70);
        const key = `${r},${g},254,${op}`;

        let bucket = buckets.get(key);
        if (!bucket) { bucket = []; buckets.set(key, bucket); }
        bucket.push(p.x, p.y, sz);
      }

      // Draw — one fillStyle set per unique colour bucket
      for (const [key, draws] of buckets) {
        ctx.fillStyle = `rgba(${key})`;
        const n = draws.length;
        for (let j = 0; j < n; j += 3) {
          const px  = draws[j];
          const py  = draws[j + 1];
          const sz  = draws[j + 2];
          const rx  = px - sz * 0.5;
          const ry  = py - sz * 0.5;
          const rad = sz * 0.35;

          ctx.beginPath();
          ctx.moveTo(rx + rad, ry);
          ctx.lineTo(rx + sz - rad, ry);
          ctx.arcTo(rx + sz, ry, rx + sz, ry + rad, rad);
          ctx.lineTo(rx + sz, ry + sz - rad);
          ctx.arcTo(rx + sz, ry + sz, rx + sz - rad, ry + sz, rad);
          ctx.lineTo(rx + rad, ry + sz);
          ctx.arcTo(rx, ry + sz, rx, ry + sz - rad, rad);
          ctx.lineTo(rx, ry + rad);
          ctx.arcTo(rx, ry, rx + rad, ry, rad);
          ctx.closePath();
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="absolute inset-0 border border-[rgba(0,242,254,0.06)] rounded-lg pointer-events-none" />
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[rgba(0,242,254,0.3)] pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[rgba(0,242,254,0.3)] pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[rgba(0,242,254,0.3)] pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[rgba(0,242,254,0.3)] pointer-events-none" />
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block', cursor: 'none' }}
      />
    </div>
  );
};

export default PixelWaveCanvas;
