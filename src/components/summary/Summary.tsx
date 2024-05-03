"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button, MyHeading } from "../commons/Common";


const HomeSummary = () => {

  const words = `I'm focused on building responsive
 web apps for creatives and
  small businesses to scale.`;
  return (
    <>
       <div className="p-2 flex flex-col justify-center items-center" >
        <MyHeading text="Hello ! I'm "/>
        <MyHeading text="RITU "/>
       <TextGenerateEffect
        words={words}
         />
       </div>
    </>
  )
}

const AboutSummary = () => {

  const words = `I love building cool software that improves the lives & business of others.
  I create responsive websites from scratch for creatives ranging from portfolio websites to 
  functional websites for small businesses so they can focus on what makes them money.
  I'm intrested in design, writing, teaching, tech, and how small technical parts works.`;
    return (
        
        <div className="p-2 flex justify-center items-center gap-3 flex-col md:flex-row " id="about">
            <div>
                <Image 
                 src={"/about.jpeg"}
                 alt = "Me" 
                 width={300} 
                 height={450}
                />
            </div>
            <div className="p-1 flex flex-col gap-y-3 justify-center items-center max-w-[500px]">
            <MyHeading text="ABOUT ME"/>
        <TextGenerateEffect
         words={words}
         className="text-xl"
          />
          <Button text = {"Download CV"} />
            </div>
        </div>
    )
  }

export  {AboutSummary , HomeSummary} ; 