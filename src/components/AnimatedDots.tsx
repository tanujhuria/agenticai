import React, { useEffect, useRef } from 'react';

interface AnimatedDotsProps {
  className?: string;
  particleCount?: number;
  maxDistance?: number;
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  particleSize?: number;
  lineWidth?: number;
  animationSpeed?: number;
  opacity?: number;
}

export function AnimatedDots({
  className = '',
  particleCount = 60,
  maxDistance = 100,
  backgroundColor = 'transparent',
  primaryColor = '#3b82f6'  , // stronger blue
  secondaryColor = '#a855f7' ,// stronger purple
  particleSize = 20,
  lineWidth = 1.0,
  animationSpeed = 0.3,
  opacity = 0.6
}: AnimatedDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
          size: Math.random() * particleSize + 1,
          color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        });
      }
    };

    const drawParticle = (particle: any) => {
      // Draw glowing dot
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      
      // Create radial gradient for glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.globalAlpha = opacity;
      ctx.fill();

      // Draw inner bright dot
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = opacity * 0.9;
      ctx.fill();
    };

    const drawConnection = (p1: any, p2: any, distance: number) => {
      const alpha = Math.max(0, 1 - distance / maxDistance) * opacity * 0.4;
      
      // Create line gradient
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, p1.color);
      gradient.addColorStop(1, p2.color);
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const animate = () => {
      // Clear with background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls with some randomness
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1;
          particle.vx += (Math.random() - 0.5) * 0.1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1;
          particle.vy += (Math.random() - 0.5) * 0.1;
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Limit velocity
        const maxVelocity = animationSpeed * 2;
        particle.vx = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vx));
        particle.vy = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vy));
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < maxDistance) {
            drawConnection(p1, p2, distance);
          }
        }
      }

      // Draw particles
      particlesRef.current.forEach(drawParticle);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [
    particleCount,
    maxDistance,
    backgroundColor,
    primaryColor,
    secondaryColor,
    particleSize,
    lineWidth,
    animationSpeed,
    opacity
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}