import BoxReveal from "@/components/ui/box-reveal";
import {Button} from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";

export default function Information() {
  
  return <div className='h-full px-2 w-full mb-12'>
    <div className="size-full  items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[45px] lg:text-[3.5rem] font-semibold">
          <span className="text-[#5046e6]">Евсеев</span> Юрий Владимирович
        </p>
      </BoxReveal>
      
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Фронтенд разработчик, <NumberTicker value={21} className='text-inherit tracking-normal	'/> год
        </h2>
      </BoxReveal>
      
      <div className="mt-6 duration-500 animate-fade-in">
        <TypingAnimation className='text-lg text-left' duration={35} text='Меня зовут Юрий Евсеев, я увлеченный фронтенд-разработчик, который любит работать с современными
            технологиями и создавать интуитивно понятные интерфейсы. Мне нравится, когда код не только работает,
            но и выглядит красиво, и особенно, когда он улучшает жизнь пользователей. Я всегда стремлюсь к тому,
            чтобы учиться новому, и получаю настоящее удовольствие от поиска решений сложных задач. В своей
            работе я фокусируюсь на том, чтобы не просто создавать продукты, а делать их удобными и приятными
            в использовании.'/>
      </div>
      
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Link href='/contacts'>
          <Button className="mt-[1.6rem] bg-[#5046e6]">Связаться</Button>
        </Link>
      </BoxReveal>
    </div>
  </div>
}