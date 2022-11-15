import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


type Props = {}

export default function Hero({}: Props) {
    const [text, counter] = useTypewriter({
        words: ["Hi, my name's Max!","meep.js", "<MaxwellGonick />", "Aspiring Software Engineer", "Computer Science at UCLA"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        {text}
        <Cursor />
    </div>
  )
}