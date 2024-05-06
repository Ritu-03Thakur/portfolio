"use client"
import { motion } from 'framer-motion';
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSegment } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
 import { IoLogoGithub } from "react-icons/io5";
import { Button, SubHeading } from "./Common";
import { contactDetails } from '../links/links';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

interface SidebarProps {
  show: boolean;
  handleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ show, handleSidebar }) => { 
  return (
    <motion.div 
     className=" fixed top-0 left-0 h-[600px] w-full opacity-90  justify-center items-center  z-20 p-2 flex flex-col gap-3  rounded-lg bg-opacity-45 bg-gray-900 text-white shadow-md backdrop-blur-md  "
    >
          <div className="z-20 md:hidden cursor-pointer" onClick={handleSidebar}>
            {show ? <AiOutlineClose className="w-6 h-6 text-white" /> : <MdOutlineSegment className="w-6 h-6 text-white" />}
      
      </div>
      <div className='flex flex-col gap-4 items-center'>
        {/* Github and LinkedIN */}
        <div className="flex gap-2 flex-wrap">
          <Link href={"https://github.com/Ritu-03Thakur"}>
          <div className='bg-[#050612E0] text-textpara flex flex-col p-4 rounded-md border-[2px] border-[#3c4f51]'>
            <div className='flex gap-1 text-xl items-center'>
              <IoLogoGithub className='text-[25px] hover:text-chover'/> Github
            </div>
            <p className=''>Access my full code</p>
          </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/ritu03"}>
          <div className='bg-[#050612E0] text-textpara flex flex-col p-4 rounded-md border-[2px] border-[#3c4f51]'>
          <div className='flex gap-1 text-xl items-center'>
              <FaLinkedin className='text-[25px] hover:text-chover'/> LinkedIN
            </div>
            <p>Full Stack Developer .....</p>
          </div>
          </Link>
        </div>
        {/* Projects and Achievement */}
       <div className='flex flex-col gap-4'>
        <hr className=' rounded border border-[#7d7676] w-[350px]  flex mx-auto'/>
        <div>
         <Link href={"/#projects"} className='flex gap-1 items-center'>
          <SubHeading text={'Projects'} />{' '}<IoIosArrowForward className='text-[30px] text-chover '/>
         </Link>
        </div>
        <hr className=' rounded border border-[#7d7676] w-[350px]  flex mx-auto'/>
       </div>

       {/* Social Links */}

       <div className='flex flex-col gap-3 items-center'>
       <SubHeading text='CONTACT ME'/>
       <Link href={`mailto:${'ritutec001@gmail.com'}`} >
         <Button text='Say Hello :)'/>
          </Link>
       <ul className='list-none flex gap-3 flex-col'>
          {
            contactDetails.map((det , index)=>{
              return (  
            <li key={index} >
                <Link href={det.link} className='flex items-center gap-2 hover:text-chover'>{det.icons} {det.name} </Link>
            </li>    
              )
            })
          }  
         </ul>
       </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
