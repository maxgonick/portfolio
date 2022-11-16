import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between mx-auto max-w-7xl z-30 xl:items-center p-5'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.linkedin.com/in/maxwellgonick/" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://github.com/maxgonick" fgColor='gray' bgColor='transparent'/>
        </motion.div>

        <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
        className='flex flex-row items-center text-grey-300 cursor-pointer'>
            {/* Mail */}
            <SocialIcon url="mailto:maxgonick@gmail.com" className='cursor-pointer' fgColor='gray' bgColor='transparent'/>

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>



        </motion.div>
    </header>
  )
}