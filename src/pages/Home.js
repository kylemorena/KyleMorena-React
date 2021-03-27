import React from 'react'
import HomeScss from './home.module.scss';
import NavBar from '../components/navBar';
import Hero from '../components/articleComponent/hero';
import Sections from '../components/articleComponent/sections';

const Home = () => {
  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["Home"]}>
          <Hero />
          <Sections />
      </article>
    </main>
  )
}

export default Home