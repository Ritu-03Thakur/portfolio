import { ProjectDesc } from "@/Data/data";
import Card from "@/components/commons/Card";
import { Button, MyHeading } from "@/components/commons/Common";
import Link from "next/link";

const Projects = () => {
  return (
    <>
     <div className="flex flex-col mt-2 items-center gap-y-5">
    <Link href={"/"}>
      <Button text = {"HOME"} />
      </Link>
       <MyHeading text="Projects" />
       <div className="flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10">

     { ProjectDesc.map((project, index) => {
            return (
              <Card 
               key={index}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                techs={project.techs}
              />
            );
          } 
        )}
      </div>
    </div>
    </>
  )
}

export default Projects
