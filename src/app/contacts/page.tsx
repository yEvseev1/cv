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
    className="w-full h-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-black via-slate-900/50 to-black">
    <Particles
      className="absolute inset-0 -z-10 "
      quantity={200}
      ease={70}
      color={"#ffffff"}
      refresh
    />
    <div className="container px-4 sm:px-0">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
        {contacts.map((contact, index) => (
          <AnimateCard key={index}>
            <div
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16"
            >
              <span
                className="relative z-10 flex items-center justify-center w-14 h-14 duration-1000 border rounded-full bg-zinc-950 text-zinc-200 group-hover:text-white group-hover:bg-zinc-700">
									{contact.icon}
								</span>
              <div className="z-10 flex flex-col items-center">
									<span
                    className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{contact.link}
									</span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{contact.label}
									</span>
              </div>
            </div>
          </AnimateCard>
        ))}
      </div>
    </div>
  </div>
}