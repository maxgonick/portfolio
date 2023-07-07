import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center py-20">
      <h3 className="hidden sm:block absolute top-24 text-gray-500 tracking-[10px] text-2xl">
        About
      </h3>

      <motion.div
        className="hidden flex-shrink-0 w-56 h-56 sm:flex"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          className="rounded-full object-cover"
          src="/hamster.jpeg"
          alt="hamster"
          width={224}
          height={224}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-20 ">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          A Little About Me
        </h4>
        <p className="text-md">
          Hi! My name is Maxwell Gonick and I&apos;m a 3rd year studying
          Computer Science at UCLA. I have worked on many projects from larger
          scale projects working with teams over 10+ developers, to personal
          passion projects by myself. I love working with Full-Stack Web
          Development, messing around with Databases, solving Leetcode
          questions, and learning new technologies for fun. I put an emphasis on
          building maintainable, scalable, and performant applications that are
          simple to navigate, and accomplish the project core values.
        </p>
      </div>
    </div>
  );
}
