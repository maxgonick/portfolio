import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text, counter] = useTypewriter({
        words: ["Hi, my name's Sir Meowington!","meep.js", "<MaxwellGonick />", "Aspiring Software Engineer", ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src="https://i.chzbgr.com/full/9676759296/hF261C96A/cat" alt="cat-laying-down" className='relative rounded-full h-32 w-32 object-cover'/>


      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Computer Science @ UCLA</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
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