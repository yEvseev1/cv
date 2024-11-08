"use client";

import React, { useRef, useEffect } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export default function Particles({
                                    className = "",
                                    quantity = 30,
                                  }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  
  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initializeCanvas();
    animateParticles();
    window.addEventListener("resize", initializeCanvas);
    
    return () => {
      window.removeEventListener("resize", initializeCanvas);
    };
  }, []);
  
  const initializeCanvas = () => {
    resizeCanvas();
    createParticles();
  };
  
  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };
  
  const createParticle = () => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const size = Math.random() * 2 + 0.1;
    const alpha = 0;
    const targetAlpha = Math.random() * 0.5 + 0.1;
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    return { x, y, size, alpha, targetAlpha, dx, dy };
  };
  
  const createParticles = () => {
    for (let i = 0; i < quantity; i++) {
      const particle = createParticle();
      circles.current.push(particle);
    }
    drawParticles();
  };
  
  const drawParticles = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((circle) => {
        drawCircle(circle);
      });
    }
  };
  
  const drawCircle = (circle: any) => {
    if (context.current) {
      const { x, y, size, alpha } = circle;
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill();
    }
  };
  
  const animateParticles = () => {
    circles.current.forEach((circle, i) => {
      // Плавное изменение прозрачности
      if (circle.alpha < circle.targetAlpha) {
        circle.alpha += 0.01;
      }
      
      // Движение в случайном направлении
      circle.x += circle.dx;
      circle.y += circle.dy;
      
      // Проверка выхода за границы и перезапуск частицы
      if (
        circle.x < 0 ||
        circle.x > canvasSize.current.w ||
        circle.y < 0 ||
        circle.y > canvasSize.current.h
      ) {
        circles.current[i] = createParticle();
      }
    });
    drawParticles();
    window.requestAnimationFrame(animateParticles);
  };
  
  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}