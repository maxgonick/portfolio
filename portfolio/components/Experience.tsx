import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-between mx-auto items-center">
      <motion.div
        className="absolute top-28 left-8 sm:top-32 sm:left-14 tracking-[5px] sm:tracking-[10px] text-[#9CA3AF] text-md sm:text-2xl border-[#0956EF] border-l-2 px-3"
        initial={{
          x: -400,
          opacity: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        Relevent Experience
      </motion.div>
      <div>test</div>
    </div>
  );
}
