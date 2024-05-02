"use client"
import { MyHeading } from "../commons/Common";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid" ; 
import {ProjectDesc} from "@/Data/data"

const ProjectSection = () => {
  return (
    <> 
    <div className="flex flex-col">
       <MyHeading text="Projects" />
        <BentoGrid className="max-w-4xl mx-auto">
      {ProjectDesc.slice(0,3).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
    </>
  )
}

export default ProjectSection
