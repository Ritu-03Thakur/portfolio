import { FaLinkedin } from "react-icons/fa";
 import { IoLogoGithub } from "react-icons/io5";
 import { SiLeetcode } from "react-icons/si";
 import { FaXTwitter } from "react-icons/fa6";

 const style = {
    color : '#B5E3EB' , 
    fontSize : '35px' , 
 }

const contactDetails = [
    {
        id :"c1" , 
        icons : <IoLogoGithub  style={style} /> , 
        link : "https://github.com/Ritu-03Thakur" , 
    } ,
    {
        id :"c2" , 
        icons : <FaLinkedin style={style}/> , 
        link : "https://www.linkedin.com/in/ritu03" , 
    } ,
    {
        id :"c3" , 
        icons : <SiLeetcode style={style}/> , 
        link : "https://leetcode.com/u/ritu_03thakur/" , 
    } , 
    {
        id :"c4" , 
        icons : <FaXTwitter style={style}/> , 
        link : "https://twitter.com/Ritu_03Thakur" , 
    }
]

export {contactDetails} ; 