import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center py-20'>
      <h3 className='absolute top-24 text-gray-500 tracking-[10px] text-2xl'>About</h3>

      <motion.div className='hidden flex-shrink-0 w-56 h-56 sm:flex'
      initial={{
        x: -200,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 1.5
      }}
      
      >
        <Image className='rounded-full object-cover'
        src='/hamster.jpeg'
        alt='hamster'
        width={224}
        height={224}
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-20'>
        <h4 className='text-2xl md:text-4xl font-semibold '>Sir Hammington&#39;s Story</h4>
        <p className='text-sm'>
      Curabitur fermentum ullamcorper nibh at molestie. Maecenas cursus convallis ipsum, quis maximus sapien varius eget. Quisque mattis neque sed lorem condimentum ullamcorper. Curabitur maximus, eros a finibus vehicula, nunc ante viverra ante, eget feugiat nisi justo quis est. Sed pharetra non arcu non iaculis. Nunc tincidunt elit id sapien condimentum aliquet. Fusce cursus quam nec augue dignissim, sed tempus eros elementum. Nam porta, tellus at euismod pretium, justo felis lacinia nulla, vel auctor mauris urna sed libero. Cras sed nulla lacus. Morbi egestas ante vulputate, malesuada mauris ac, facilisis leo. Sed dignissim a sapien in ullamcorper. Ut auctor turpis ac accumsan elementum. Curabitur ut suscipit lacus. Pellentesque interdum leo nec gravida pretium. Cras vel vulputate sapien. In volutpat sit amet libero sed porta.
        </p>
      </div>

    </div>
  )
}