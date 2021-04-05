import React from 'react'
import NavBar from '../components/navBar';
import Hero from '../components/articleComponent/hero';
import Sections from '../components/articleComponent/sections';

const Home = () => {
  return (
    <main>
      <NavBar />
      <article className="m-3">
          <Hero />
          <Sections />
      </article>
    </main>
  )
}

export default Home