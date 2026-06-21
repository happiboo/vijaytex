'use client';
import { useRef, useEffect } from 'react';

export default function MagnetDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];
    const magnetRadius = 140;
    let started = false;

    let mouse = { x: -1000, y: -1000 };

    const init = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      const tWidth = Math.floor(width);
      const tHeight = Math.floor(height);
      
      const textCanvas = document.createElement('canvas');
      const tCtx = textCanvas.getContext('2d', { willReadFrequently: true });
      textCanvas.width = tWidth;
      textCanvas.height = tHeight;
      
      tCtx.fillStyle = 'white';
      const fontSize = Math.min(tWidth * 0.11, 110);
      tCtx.font = `300 ${fontSize}px 'Cormorant Garamond', Georgia, serif`;
      tCtx.textAlign = 'center';
      tCtx.textBaseline = 'middle';
      const textY = tHeight - 190; 
      tCtx.fillText('VIJAY TEX', tWidth / 2, textY);
      
      let textData = [];
      if (tWidth > 0 && tHeight > 0) {
        textData = tCtx.getImageData(0, 0, tWidth, tHeight).data;
      }
      
      let textPoints = [];
      const textSampleSpacing = 4; // Strict grid for a perforated metal / LED matrix look
      if (textData.length > 0) {
        for (let x = 0; x < tWidth; x += textSampleSpacing) {
          for (let y = 0; y < tHeight; y += textSampleSpacing) {
            const pixelIndex = (y * tWidth + x) * 4;
            if (textData[pixelIndex + 3] > 128) {
              // No random offset - we want a highly precise, engineered grid
              textPoints.push({ x, y });
            }
          }
        }
      }
      
      particles = textPoints.map(pt => {
        const isAccent = Math.random() > 0.85;
        return {
          x: pt.x, // Start exactly in position
          y: pt.y,
          tx: pt.x,
          ty: pt.y,
          baseColor: isAccent ? 'rgba(29, 78, 216, 0.7)' : 'rgba(107, 114, 128, 0.35)', // Muted brand blue or steel gray
          activeColor: isAccent ? '#60a5fa' : '#ffffff', // Bright blue or crisp white
          size: 2,
          isActive: false
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const hovering = mouse.x > -100 && mouse.y > height - 350;
      
      // We will draw connections between active particles to look like a technical blueprint
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      
      particles.forEach((p, i) => {
        let targetX = p.tx;
        let targetY = p.ty;
        p.isActive = false;
        
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        // Industrial interaction: Dense, heavy magnetic attraction (not a chaotic repel)
        if (hovering && dist < magnetRadius) {
          p.isActive = true;
          let pull = Math.pow(1 - (dist / magnetRadius), 2);
          // Pulls slightly towards the cursor, representing precision mechanical tension
          targetX += dx * pull * 0.15; 
          targetY += dy * pull * 0.15;
        }
        
        // High tension spring - snaps back into strict grid very fast
        p.x += (targetX - p.x) * 0.3;
        p.y += (targetY - p.y) * 0.3;
        
        // Draw Blueprint Lines for active nodes
        if (p.isActive) {
           for (let j = 1; j < 5; j++) {
              if (i + j < particles.length) {
                 let p2 = particles[i + j];
                 if (Math.abs(p.x - p2.x) < 8 && Math.abs(p.y - p2.y) < 8) {
                    ctx.moveTo(p.x + p.size/2, p.y + p.size/2);
                    ctx.lineTo(p2.x + p2.size/2, p2.y + p2.size/2);
                 }
              }
           }
        }
        
        // Draw the particle as a sharp, precise square
        ctx.fillStyle = p.isActive ? p.activeColor : p.baseColor;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      
      ctx.stroke(); // Render blueprint lines
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    const onResize = () => {
      init();
    };
    
    const startAnimation = async () => {
      if (started) return;
      started = true;
      window.addEventListener('resize', onResize);
      window.addEventListener('mousemove', onMouseMove);
      document.documentElement.addEventListener('mouseleave', onMouseLeave);
      await document.fonts.ready;
      init();
      draw();
    };

    /* Defer heavy init + getImageData until canvas scrolls into view */
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startAnimation(); },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
