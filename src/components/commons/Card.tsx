import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

interface CardProps {
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
    techs: string[];
  }



  const Card: React.FC<CardProps> = ({ title, description, githubLink, liveLink, techs }) => {
  return (
    <div>
       <div className="w-full max-w-[320px] min-w-[280px] h-72 rounded-lg bg-primary border border-chover p-6 flex flex-col justify-center gap-6 gap-y-4 hover:-translate-y-2 transition-transform duration-300 group">
      
      <div className="flex justify-between items-center">
        <Link href={githubLink} >
          <IoLogoGithub className="text-white text-2xl hover:text-chover" />
        </Link>

        
        <Link href={liveLink} >
          <LuExternalLink className="text-white text-2xl hover:text-textGreen" />
        </Link>
      </div>

     
      <div>
       
        <Link href={liveLink} >
          <h2 className="text-xl font-titleFont font-semibold tracking-wide text-white group-hover:text-textGreen">
            {title}
          </h2>
        </Link>

       
        <p className="text-sm mt-3 text-white">{description}</p>
      </div>

      
      <ul className="text-xs mdl:text-sm text-textpara flex items-center gap-2 justify-between flex-wrap">
        {techs.map((item, i) => (
          <li className="hover:text-chover cursor-pointer text-sm" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Card
