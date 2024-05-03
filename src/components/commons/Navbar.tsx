"use client"
import { useState } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai"; // Corrected import for close icon
import Link from "next/link";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleClick = () => setSideNav(!sideNav);

  return (
    <div className="fixed z-20 mb-10 w-full h-16 flex justify-between items-center rounded-lg bg-opacity-45 bg-gray-900 text-white shadow-md backdrop-blur-md top-0 p-2 md:items-baseline">
      <Link href="/"> h
      </Link>
      <div className="flex items-center p-4 md:bg-gray-800 md:rounded-lg md:items-baseline">
        <ul className={`flex list-none gap-15 mr-16 ml-40 md:hidden ${sideNav ? 'flex-col' : 'hidden'}`}>
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
            <Link href="/">Resume</Link>
          </li>
          
          <li className="cursor-pointer">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <div className="z-20 md:hidden cursor-pointer" onClick={handleClick}>
            {sideNav ? <AiOutlineClose className="w-6 h-6 text-white" /> : <MdOutlineSegment className="w-6 h-6 text-white" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
