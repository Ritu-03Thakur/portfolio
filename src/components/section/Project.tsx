
import Link from "next/link";
import Card from "../commons/Card";
import { Button, MyHeading } from "../commons/Common";
import { ProjectDesc } from "@/Data/data";

const ProjectSection = () => {
  return (
    <> 
    <div className="flex flex-col mt-2 items-center gap-y-5 " id="projects">
       <MyHeading text="Projects" />
       <div className="flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10">

     { ProjectDesc.slice(0,4).map((project, index) => {
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
      <Link href={"/projects"}>
      <Button text = {"More Projects"} />
      </Link>
    </div>
    </>
  )
}

export default ProjectSection
