import React, { useEffect, useRef } from 'react';

interface NetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  maxDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  nodeSize?: number;
  animationSpeed?: number;
  opacity?: number;
}

export function NetworkBackground({
  className = '',
  nodeCount = 5000,
  maxDistance = 150,
  nodeColor = '#8b5cf6',
  lineColor = '#a855f7',
  nodeSize = 5,
  animationSpeed = 0.5,
  opacity = 1.0
}: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const initNodes = () => {
      nodesRef.current = [];
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
        });
      }
    };

    const drawNode = (node: { x: number; y: number }) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.globalAlpha = opacity;
      ctx.fill();
    };

    const drawLine = (node1: { x: number; y: number }, node2: { x: number; y: number }, distance: number) => {
      const alpha = Math.max(0, 1 - distance / maxDistance) * opacity;
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = lineColor;
      ctx.globalAlpha = alpha * 0.3;
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
          );

          if (distance < maxDistance) {
            drawLine(node1, node2, distance);
          }
        }
      }

      // Draw nodes
      nodesRef.current.forEach(drawNode);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [nodeCount, maxDistance, nodeColor, lineColor, nodeSize, animationSpeed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}