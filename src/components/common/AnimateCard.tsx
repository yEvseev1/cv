'use client'

import {motion, useMotionTemplate, useSpring} from "framer-motion";
import {cn} from "@/lib/utils";

export default function AnimateCard({children, className}: { children: React.ReactNode, className?: string }) {
  const mouseX = useSpring(0, {stiffness: 500, damping: 80});
  const mouseY = useSpring(0, {stiffness: 500, damping: 80});
  
  function onMouseMove({currentTarget, clientX, clientY}: any) {
    const {left, top} = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  const maskImage = useMotionTemplate`radial-gradient(ellipse 220px 200px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = {
    backgroundImage: maskImage,
    WebkitMaskImage: maskImage,
  };
  
  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={cn("overflow-hidden relative duration-700 border hover:bg-zinc-800/10 md:gap-8 border-zinc-600", className)}
    >
      <motion.div
        className="absolute inset-0 opacity-10 bg-gradient-to-br"
        style={style}
      />
      
      {children}
    </div>
  );
}