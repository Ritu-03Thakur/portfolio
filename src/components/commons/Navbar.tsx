"use client"
import { useState } from "react";
import { motion } from 'framer-motion';
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlineSegment } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai"; 
import Link from "next/link";
import { FaLinkedin, FaSun } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { SubHeading } from "./Common";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleClick = () => setSideNav(!sideNav);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed z-20  w-full h-16 p-2 flex justify-between items-center rounded-lg bg-opacity-45 bg-gray-900 text-white shadow-md backdrop-blur-md top-0  "
    >
      
      <Link href="/"><SubHeading text="RITU" /> </Link>
      <div className="flex justify-center items-center p-4  md:rounded-lg md:items-baseline gap-2">
        {/* Toogle and links */}
        <div>
      <button onClick={handleToggle} >
        {isToggled ? <FaSun size={"20px"} className="text-yellow-300 hover:text-yellow-700"/> : <GiNightSleep size={"20px"} className="text-yellow-300 hover:text-yellow-700"/>}
      </button>
    </div>
        <div className="md:flex  hidden" >
        <ul className="flex gap-3 list-none justify-center items-center text-xl " >
          <li className="cursor-pointer">
            <Link href="/#about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#skills">Skill</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        </div>
        <div className="flex gap-3">
          <div className="z-20 md:hidden cursor-pointer" onClick={handleClick}>
            {sideNav ? <AiOutlineClose className="w-6 h-6 text-white" /> : <MdOutlineSegment className="w-6 h-6 text-white" />}
                {sideNav && <Sidebar  />}
          
        </div>
      </div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
