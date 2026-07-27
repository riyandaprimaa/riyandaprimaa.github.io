import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let nodes = [];
    let shockwaves = [];
    let mouse = { x: -1000, y: -1000, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleMouseDown = (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        r: 5,
        maxR: 220,
        alpha: 1,
      });
    };

    const initNodes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Process shockwaves
      for (let sIdx = shockwaves.length - 1; sIdx >= 0; sIdx--) {
        const sw = shockwaves[sIdx];
        sw.r += 7;
        sw.alpha -= 0.025;

        if (sw.alpha <= 0 || sw.r >= sw.maxR) {
          shockwaves.splice(sIdx, 1);
          continue;
        }

        // Draw shockwave ring
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${sw.alpha * 0.7})`;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#00d4ff';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.r - 20), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${sw.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#7c3aed';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Push nearby nodes outwards
        nodes.forEach((n) => {
          const dx = n.x - sw.x;
          const dy = n.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - sw.r) < 30) {
            const force = (1 - Math.abs(dist - sw.r) / 30) * 4;
            const angle = Math.atan2(dy, dx);
            n.x += Math.cos(angle) * force;
            n.y += Math.sin(angle) * force;
          }
        });
      }

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Interactive mouse attraction
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 190) {
            n.x += dx * 0.014;
            n.y += dy * 0.014;
          }
        }
      });

      // Draw node-to-node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 145;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw mouse-to-node connections
      if (mouse.active) {
        nodes.forEach((n) => {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 190) {
            const alpha = (1 - dist / 190) * 0.45;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      // Draw nodes
      nodes.forEach((n) => {
        const glow = Math.sin(n.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${glow * 0.85})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00d4ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        opacity: 0.65,
        zIndex: 0,
      }}
    />
  );
}
