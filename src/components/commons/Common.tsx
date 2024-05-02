"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const MyHeading = ({ text }: { text: string }) => {
    const controls = useAnimation();

  useEffect(() => {
    const animation = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };

    animation();

    return () => {
      controls.stop();
    };
  }, [controls]);
  return(
    <>
     <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className='text-purple-300 font-semibold text-2xl '
      >
        {text}
      </motion.h1>
    </>
  )
}

const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-cyan-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {text}
        </span>
      </button>
    </>
  );
};

export { Button , MyHeading };
