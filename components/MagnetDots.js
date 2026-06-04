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
    const magnetRadius = 200; // Increased radius for a wider interaction area
    
    let mouse = { x: -1000, y: -1000 };

    // Create offscreen canvases for circular particles to maximize rendering performance
    const createCircle = (color, radius) => {
      const c = document.createElement('canvas');
      const size = Math.ceil(radius * 2);
      c.width = size;
      c.height = size;
      const cCtx = c.getContext('2d');
      cCtx.fillStyle = color;
      cCtx.beginPath();
      cCtx.arc(radius, radius, radius, 0, Math.PI * 2);
      cCtx.fill();
      return { canvas: c, size };
    };
    
    // Light blue/periwinkle shades inspired by the reference image
    const colors = ['#93c5fd', '#a5b4fc', '#c7d2fe', '#e0e7ff'];
    const circleCanvases = colors.map(c => createCircle(c, 1.5)); // Radius 1.5 makes very small 3px circles

    const init = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      const tWidth = Math.floor(width);
      const tHeight = Math.floor(height);
      
      // Offscreen canvas for secret text
      const textCanvas = document.createElement('canvas');
      const tCtx = textCanvas.getContext('2d', { willReadFrequently: true });
      textCanvas.width = tWidth;
      textCanvas.height = tHeight;
      
      tCtx.fillStyle = 'white';
      // Reduced the font size multiplier and max size to make the text a bit smaller
      const fontSize = Math.min(tWidth * 0.11, 110);
      // Use the website's display font (Cormorant Garamond, serif) to match the elegant look
      tCtx.font = `500 ${fontSize}px 'Cormorant Garamond', Georgia, serif`;
      tCtx.textAlign = 'center';
      tCtx.textBaseline = 'middle';
      const textY = tHeight - 190; // Center of the playground spacer
      tCtx.fillText('VIJAY TEX', tWidth / 2, textY);
      
      let textData = [];
      if (tWidth > 0 && tHeight > 0) {
        textData = tCtx.getImageData(0, 0, tWidth, tHeight).data;
      }
      
      // Sample text points with extremely high density (spacing 3) for a "full" look
      let textPoints = [];
      const textSampleSpacing = 3;
      if (textData.length > 0) {
        for (let x = 0; x < tWidth; x += textSampleSpacing) {
          for (let y = 0; y < tHeight; y += textSampleSpacing) {
            const pixelIndex = (y * tWidth + x) * 4;
            if (textData[pixelIndex + 3] > 128) {
              // Slight random offset to give that organic dotted texture
              textPoints.push({ 
                x: x + (Math.random() - 0.5), 
                y: y + (Math.random() - 0.5) 
              });
            }
          }
        }
      }
      
      particles = textPoints.map(pt => ({
        x: Math.random() * width, 
        y: (height - 350) + Math.random() * 350, // Scatter initially in the bottom area
        tx: pt.x,
        ty: pt.y,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.04,
        colorIdx: Math.floor(Math.random() * colors.length)
      }));
    };

    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);
      
      const hovering = mouse.x > -100 && mouse.y > height - 350;
      
      particles.forEach(p => {
        // Base target is the text position with a constant ambient jitter
        let targetX = p.tx + Math.sin(p.phase + time * p.speed) * 1.5;
        let targetY = p.ty + Math.cos(p.phase + time * p.speed) * 1.5;
        
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        // When hovered, the mouse repels the text particles, creating an interactive hole
        if (hovering && dist < magnetRadius) {
          let pull = Math.pow(1 - (dist / magnetRadius), 2);
          // Significantly increased the multiplier (from 1.5 to 5.0) for a much stronger repel effect
          targetX -= dx * pull * 5.0; 
          targetY -= dy * pull * 5.0;
        }
        
        // Ease towards target
        p.x += (targetX - p.x) * 0.15;
        p.y += (targetY - p.y) * 0.15;
        
        const circle = circleCanvases[p.colorIdx];
        ctx.drawImage(circle.canvas, p.x, p.y);
      });
      
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
    
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    
    init();
    draw();
    
    return () => {
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
