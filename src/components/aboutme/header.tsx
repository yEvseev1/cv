'use client'

import {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    if (!headerRef.current) return
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      console.log(entry.isIntersecting)
    })
    
    observer.observe(headerRef.current);
    
    return () => observer.disconnect()
  }, []);
  
  return <header ref={headerRef}
                 className='relative isolate text-zinc-200 '>
    <div className={cn(
      'fixed inset-x-0 top-0 z-50 max-w-[1500px] duration-200 w-full  backdrop-blur-[2px] mx-auto px-6 py-6 flex justify-between items-center',
      isIntersecting ? 'border-b-transparent' : 'border-b border-slate-800/90 bg-slate-900/10'
    )}>
      <Link href='/'>
        <ArrowLeft/>
      </Link>
      <div className='flex items-center gap-6'>
        <Link href='/contacts'>
          Контакты
        </Link>
        {/*<Link href='#'>*/}
        {/*  Проекты*/}
        {/*</Link>*/}
      </div>
    </div>
  </header>
}