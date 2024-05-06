import { FaLinkedin } from "react-icons/fa";
 import { IoLogoGithub } from "react-icons/io5";
 import { SiLeetcode } from "react-icons/si";
 import { FaXTwitter } from "react-icons/fa6";

 

const contactDetails = [
    {
        id :"c1" , 
        name : "GITHUB" , 
        icons : <IoLogoGithub  className="text-[35px] text-[#B5E3EB] hover:text-[#5c8fb8]" /> , 
        link : "https://github.com/Ritu-03Thakur" , 
    } ,
    {
        id :"c2" , 
        name : "LINKEDIN" , 
        icons : <FaLinkedin className="text-[35px] text-[#B5E3EB] hover:text-[#5c8fb8]"/> , 
        link : "https://www.linkedin.com/in/ritu03" , 
    } ,
    {
        id :"c3" , 
        name : "LEETCODE" ,
        icons : <SiLeetcode className="text-[35px] text-[#B5E3EB] hover:text-[#5c8fb8]"/> , 
        link : "https://leetcode.com/u/ritu_03thakur/" , 
    } , 
    {
        id :"c4" , 
        name:"TWITTER",
        icons : <FaXTwitter className="text-[35px] text-[#B5E3EB] hover:text-[#5c8fb8]"/> , 
        link : "https://twitter.com/Ritu_03Thakur" , 
    }
]

export {contactDetails} ; 