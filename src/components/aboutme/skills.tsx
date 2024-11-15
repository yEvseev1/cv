import Marquee from "@/components/ui/marquee";
import {cn} from "@/lib/utils";

const reviews = [
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Zustand",
    img: "https://github.com/pmndrs/zustand/raw/main/docs/bear.jpg", // GitHub avatar as no official icon is available
  },
  {
    name: "Axios",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png",
  },
  {
    name: "Orval",
    img: "https://orval.dev/images/emblem.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://res.cloudinary.com/dcss55nem/image/upload/v1701032021/15_pzbsyb.png",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Nest.js",
    img: "https://nestjs.com/logo-small-gradient.d792062c.svg",
  },
];

const ReviewCard = ({
                      img,
                      name,
                    }: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative  cursor-pointer overflow-hidden rounded-xl border p-4",
        'flex items-center',
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img}/>
        <div className="flex items-center">
          {name}
        </div>
      </div>
    </figure>
  );
};

export default function Skills() {
  return <>
    <div className='w-full grid grid-rows-[1fr,1fr] duration-1000 animate-fade-in'>
      <Marquee pauseOnHover>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  </>
}