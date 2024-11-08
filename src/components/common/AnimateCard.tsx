'use client'

import {motion, useMotionTemplate, useSpring} from "framer-motion";

export default function AnimateCard({children}: { children: React.ReactNode }) {
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
      className=" overflow-hidden relative w-96 h-96 duration-700 border rounded-xl hover:bg-zinc-800/10 md:gap-8 border-zinc-600 "
    >
      <motion.div
        className="absolute inset-0 opacity-5 bg-gradient-to-br"
        style={style}
      />
      
      {children}
    </div>
  );
}