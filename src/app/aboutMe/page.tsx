import Header from "@/components/aboutme/header";
import Particles from "@/components/ui/particles";
import Skills from "@/components/aboutme/skills";
import Information from "@/components/aboutme/information";


export default function AboutMePage() {
  
  return <div
    className="text-zinc-200 min-h-screen h-full overflow-x-hidden bg-gradient-to-bl from-black via-slate-900/40 to-black">
    <Particles className='absolute inset-0 z-10' quantity={100} ease={70}
               color={"#ffffff"}
               refresh/>
    <Header/>
    <div className='container lg:px-20 mx-auto mt-20 overflow-y-auto'>
      <Information/>
      <Skills/>
    </div>
  </div>
}