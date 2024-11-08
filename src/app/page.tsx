import Link from "next/link";
import Particles from "@/components/ui/particles";

interface navigation {
  label: string
  link: string
}

const navigations: navigation[] = [
  {label: 'Обо мне', link: 'aboutMe'},
  {label: 'Контакты', link: 'contacts'},
  {label: 'Проекты', link: 'projects'},
]

export default function Home() {
  return <div
    className="w-full h-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-bl from-black via-slate-800/40 to-black">
    <Particles
      className="absolute inset-0"
      quantity={200}
      ease={70}
      color={"#ffffff"}
      refresh
    />
    <nav className='animate-fade-in'>
      <ul className="relative bottom-8 flex items-center justify-center gap-8">
        {
          navigations.map((navigation, index) => <Link
            href={navigation.link} key={index}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            {navigation.label}
          </Link>)
        }
      </ul>
    </nav>
    <div className='w-full h-px bg-gradient-to-r from-zinc-500/50 to-zinc-800/30 animate-to-left'/>
    <div
      className='z-10 text-4xl text-transparent bg-white cursor-default text-stroke animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text'>
      yvEvseev
    </div>
    <div className='w-full h-px bg-gradient-to-l from-zinc-500/50 to-zinc-800/30 animate-to-right'/>
  </div>
}
