import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      { /* Hero */}
      <section id='hero'>
      <Hero />
      </section>
      { /* About */}

      { /* Experience */}

      { /* Skills */}

      { /* Projects */}

      { /* Contact */}

    </div>
  )
}
