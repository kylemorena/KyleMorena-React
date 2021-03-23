import React from 'react'
import NavBar from '../components/NavBar';
import HomeScss from './Home.module.scss';
import Sections from '../components/Sections';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["cards"]}>
          <Hero />
          <Sections />
      </article>
    </main>
  )
}

export default Home