import { useEffect, useRef } from 'react';

const pastelPinks = ['#ffe0e9ff', '#e5b6bd', '#eed8e3', '#ffcfd6', '#f4e0ea'];

class Bubble {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.r = Math.random() * 100 + 100;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = (Math.random() - 0.5) * 4;
    this.dy = (Math.random() - 0.5) * 4;
    this.colorStart = pastelPinks[Math.floor(Math.random() * pastelPinks.length)];
    this.colorEnd = pastelPinks[Math.floor(Math.random() * pastelPinks.length)];
  }

  draw() {
    const grad = this.ctx.createRadialGradient(
      this.x, this.y, this.r * 0.2,
      this.x, this.y, this.r
    );
    grad.addColorStop(0, this.colorStart);
    grad.addColorStop(1, this.colorEnd);

    this.ctx.beginPath();
    this.ctx.fillStyle = grad;
    this.ctx.shadowColor = this.colorEnd;
    this.ctx.shadowBlur = 40;
    this.ctx.globalAlpha = 0.4;
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.globalAlpha = 1;
    this.ctx.shadowBlur = 0;
  }

  attractTo(mouse) {
    const dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    if (mouse.x !== null && dist < this.r + 100) {
      this.x += (mouse.x - this.x) * 0.1;
      this.y += (mouse.y - this.y) * 0.1;
    }
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > this.canvas.width || this.x - this.r < 0) this.dx *= -1;
    if (this.y + this.r > this.canvas.height || this.y - this.r < 0) this.dy *= -1;

    this.draw();
  }
}

export default function BubbleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bubbles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < 18; i++) {
      bubbles.push(new Bubble(canvas, ctx));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Find the closest bubble to the mouse
      let closest = null;
      let minDist = Infinity;

      if (mouse.current.x !== null) {
        for (let bubble of bubbles) {
          const dist = Math.hypot(bubble.x - mouse.current.x, bubble.y - mouse.current.y);
          if (dist < minDist) {
            minDist = dist;
            closest = bubble;
          }
        }
      }

      // Update all bubbles
      for (let bubble of bubbles) {
        bubble.update();
      }

      // Attract only the closest one
      if (closest && mouse.current.x !== null) {
        closest.attractTo(mouse.current);
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleMouseMove = e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 blur-xl"
      style={{ pointerEvents: 'auto' }} // ensures mouse events register
    />
  );
}
