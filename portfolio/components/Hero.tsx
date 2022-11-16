import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
    const [text, counter] = useTypewriter({
        words: ["Hi, my name's Max! :)","UCLA.tsx", "<MaxwellGonick />", "Emacs > Vim", ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {/* <img src="https://i.chzbgr.com/full/9676759296/hF261C96A/cat" alt="cat-laying-down" className='relative rounded-full h-32 w-32 object-cover'/> */}
      <Image src="/catlayingdown.jpeg" alt="cat-laying-down" className='relative rounded-full object-cover mx-auto' width='128' height='128'/>

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Computer Science @ UCLA</h2>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor/>
        </h1>
        <div className='pt-5'>
          <Link href='#about'><button className='heroButton'>About</button></Link>
          <Link href='#experience'><button className='heroButton'>Experience</button></Link>
          <Link href='skills'><button className='heroButton'>Skills</button></Link>
          <Link href='projects'><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  )
}