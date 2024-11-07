'use client'

import {motion, useMotionTemplate, useSpring} from "framer-motion";
import {useEffect, useState} from "react";

export default function AnimateCard({children}: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, {stiffness: 2500, damping: 80});
  const mouseY = useSpring(0, {stiffness: 2500, damping: 80});
  
  function onMouseMove({currentTarget, clientX, clientY}: any) {
    const {left, top} = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  const baseHue = 284;
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, hsla(calc(var(--base-hue)), 80%, 60%, 0.85), transparent)`;
  const style = {
    backgroundImage: maskImage,
    WebkitMaskImage: maskImage,
  };
  
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}    // Начинаем анимацию при наведении
      onMouseLeave={() => setIsHovered(false)}
      className="hover:content-normal overflow-hidden relative w-96 h-96 duration-700 border rounded-xl md:gap-8 border-zinc-600 "
    >
      <motion.div
        animate={isHovered ? { "--base-hue": 0 } : { "--base-hue": baseHue }}
        initial={{"--base-hue": baseHue} as any}
        transition={{ duration: 10, repeat: isHovered ? Infinity : 0, repeatType: "loop", ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br"
        style={style}
      />
      {children}
    </div>
  );
}