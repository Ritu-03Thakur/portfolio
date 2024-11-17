"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {  MyHeading } from "../commons/Common";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { AboutDesc } from "@/Data/data";

const HomeSummary = () => {
  const options = {
    strings: [
      "    ",
      "Full-Stack Developer",
      "JAVA Programmer",
      "React Developer",
      "Next.js Developer",
      "Web Developer",
    ],
    autoStart: true,
    loop: true,
  };

  const words = `Driven by a passion for creating seamless digital experiences.
   I craft innovative, user-focused solutions that merge creativity with cutting-edge technology.`;
  return (
    <>
      <div className="p-2 flex flex-col justify-center items-center gap-5">
        <MyHeading text="Hello ! I'm " />
        <Image
        src="/hello.gif"
        alt="hello gif"
        width={100}
        height={100}

        />
        <MyHeading text="RITU " />
        <div className=" text-2xl md:text-3xl flex font-bold  bg-gradient-to-r from-[#51bad2] to-[#4543d4] text-transparent bg-clip-text">
          {"<"} <Typewriter options={options} /> {"/>"}
        </div>
        <TextGenerateEffect words={words} />
        <Link href={"https://www.linkedin.com/in/ritu03"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="inline-flex h-16  w-[200px] text-xl animate-shimmer items-center justify-center rounded-md border border-[#18737d] bg-[linear-gradient(45deg,#151b21,45%,#497ec6,55%,#000000)] bg-[length:200%_100%]  font-medium text-[#9FB3CE] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Let&apos;s Connect
          </motion.button>
        </Link>
      </div>
    </>
  );
};

const AboutSummary = () => {

  return (
    <div
      className="p-2 flex justify-center items-center gap-3 flex-col md:flex-row "
      id="about"
    >
      <div>
        <Image src={"/about.jpeg"} alt="Me" width={300} height={450} />
      </div>
      <div className="p-1 flex flex-col gap-y-3 justify-center items-center max-w-[500px]">
        <MyHeading text="ABOUT ME" />
        {
          AboutDesc.map((about)=> (
            <div key={about.id}>
              <p>{about.para}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export { AboutSummary, HomeSummary };
