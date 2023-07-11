import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

type Props = {};

const Projects = ({}: Props) => {
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 100,
    },
  });

  return (
    <div className="flex flex-col h-screen text-left max-w-full relative">
      <div className="flex flex-col mt-[7rem] gap-8">
        <motion.div
          className="top-32 left-14 tracking-[5px] sm:tracking-[10px] text-[#9CA3AF] text-md sm:text-2xl border-[#e1ce38] border-l-2 px-3"
          initial={{
            x: -200,
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
          Projects
        </motion.div>
        <div className="">
          <div className="keen-slider" ref={sliderRef}>
            <div className="keen-slider__slide bg-blue-500 flex flex-col">
              <h1>Mapify</h1>
              <div>
                Mapify is a geosocial networking platform that utilizes the
                Spotify API for a more social listening experience
              </div>
            </div>
            <div className="keen-slider__slide w-7 bg-red-500">
              <h1>UCLA Crafting for Cancer</h1>
              <div>
                The homepage of the UCLA Crafting for Cancer club, which serves
                meeting dates, instructions, and attendence tools to over 1000
                monthly users.
              </div>
            </div>
            <div className="keen-slider__slide w-10 bg-green-600">
              <h1>Instameet</h1>
              <div>
                A meeting scheduling platform which helps users find the best
                time to organize meetups taking into account all users&apos;
                availabilities.
              </div>
            </div>
            <div className="keen-slider__slide">4</div>
            <div className="keen-slider__slide">5</div>
            <div className="keen-slider__slide">6</div>
            <div className="keen-slider__slide">7</div>
            <div className="keen-slider__slide">8</div>
            <div className="keen-slider__slide">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
