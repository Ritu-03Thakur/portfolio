 "use client"
 import {motion} from 'framer-motion' ; 
import { Button, MyHeading } from '../commons/Common';
import Link from 'next/link';
import { contactDetails } from './links';
const Contact = () => {
  return (
    <>
      <motion.div id='contact' className='flex flex-col items-center p-5 mx-auto my-10 gap-10'>
        <MyHeading text='GET IN TOUCH'/>
        <MyHeading text='Send me an email'/>
         
         <Link href={`mailto:${'ritutec001@gmail.com'}`} >
         <Button text='Say Hello :)'/>
          </Link>
         <ul className='list-none flex gap-3 '>
          {
            contactDetails.map((det , index)=>{
              return (  
            <li key={index} >
                <Link href={det.link}>{det.icons}</Link>
            </li>    
              )
            })
          }  
         </ul>

      </motion.div>
    </>
  )
}

export default Contact
