import React from 'react'
import { useState } from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
    const [hover, setHover] = useState(['gray', 'gray', 'gray'])

  return (
    <header className='sticky top-2 flex items-start justify-between mx-auto max-w-7xl z-30 xl:items-center p-5'>
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
            <SocialIcon url="https://www.linkedin.com/in/maxwellgonick/" fgColor={hover[0]} bgColor='transparent' onMouseEnter={() => setHover(['white', 'gray', 'gray'])} onMouseLeave={() => setHover(['gray','gray','gray'])}/>
            <SocialIcon url="https://github.com/maxgonick" fgColor={hover[1]} bgColor='transparent' onMouseEnter={() => setHover(['gray','white','gray'])} onMouseLeave={() => setHover(['gray','gray','gray'])}/>
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
            <SocialIcon url="mailto:maxgonick@gmail.com" className='cursor-pointer' fgColor={hover[2]} bgColor='transparent' onMouseEnter={() => setHover(['gray','gray','white'])} onMouseLeave={() => setHover(['gray','gray','gray'])}/>

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Contact Me</p>



        </motion.div>
    </header>
  )
}