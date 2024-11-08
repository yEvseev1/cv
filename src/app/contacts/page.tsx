import Particles from "@/components/ui/particles";
import Link from "next/link";
import AnimateCard from "@/components/common/AnimateCard";
import {Github, Mail, Send} from "lucide-react";
import React from "react";

interface Contact {
  label: string
  href: string
  icon: React.ReactNode
  link: string
}

const contacts: Contact[] = [
  {
    label: 'Telegram',
    href: '#',
    link: '@NextEnjoyer',
    icon: <Send/>
  },
  {
    label: 'Email',
    href: '#', //https://t.me/NextEnjoyer
    link: '@NextEnjoyer',
    icon: <Mail/>
  },
  {
    label: 'Github',
    href: '#', //https://github.com/yEvseev1
    link: 'yEvseev1',
    icon: <Github/>
  }
]

export default function ContactPage() {
  return <div
    className="w-full h-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-black via-slate-900/30 to-black">
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      quantity={100}
      ease={70}
      color={"#ae00ff"}
      refresh
    />
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-8 px-12 py-12">
      {
        contacts.map((contact, index) => <AnimateCard key={index} className='text-white max-w-96 max-h-96 w-full h-full rounded-xl'>
          <div className="flex flex-col items-center gap-8">
          
          </div>
        </AnimateCard>)
      }
    </div>
  </div>
}