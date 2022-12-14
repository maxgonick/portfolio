import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div className='relative flex items-center justify-center'
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 2, 2.5, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        // borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5,
    }}
    >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
        <div className='border rounded-full border-[#333333] sm:h-[300px] sm:w-[300px] mt-52 absolute'></div>
        <div className='border rounded-full border-[#333333] sm:h-[500px] sm:w-[500px] mt-52 absolute'></div>
        <div className='border rounded-full border-[#4c8ac8] sm:h-[650px] sm:w-[650px] mt-52 absolute animate-pulse opacity-30 '></div>
        <div className='border rounded-full border-[#333333] min-[2000px]:h-[800px] min-[2000px]:w-[800px] mt-52 absolute'></div>
    </motion.div>
  )
}