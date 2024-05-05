"use client"
import React from 'react'
import { MyHeading } from '../commons/Common'
import {motion} from 'framer-motion';

const Skills = () => {
    const techDetails = [
        { name: "HTML5"} , 
        {name:"CSS3" } , 
        {name:"JavaScript" } , 
        {name:"NodeJS" } , 
        {name:"ExpressJS" } , 
        {name:"MongoDB" } , 
        {name:"Java" } , 
        {name:"C/C++" } , 
        {name:"ReactJS" } , 
        {name:"NextJS" } , 
        {name:"Git/GitHub" } , 
        {name:"Linux" } , 
        {name:"Tailwind CSS" } , 
        {name:"Data Structures & Algorithms" } , 

    ]
  return (
    <div className='flex flex-col items-center gap-4 mx-auto' id='skills'>
      <MyHeading text='SKILLS' />
      <div className='flex flex-wrap gap-3 justify-center items-center'>
        {
            techDetails.map((detail, index) =>{
                return(
      <motion.button 
      whileHover={{ scale: 1.1 }}
      key={index} 
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#18737d] bg-[linear-gradient(45deg,#151b21,45%,#497ec6,55%,#000000)] bg-[length:200%_100%] px-6 font-medium text-[#9FB3CE] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
               {detail.name}
      </motion.button>
                )
            })}
      </div>
    </div>
  )
}

export default Skills
