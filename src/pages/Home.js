import React from 'react'
import NavBar from '../components/NavBar';
import HomeScss from './Home.module.scss';
import CardGroup from '../components/CardsGroup';


const Home = () => {
  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["cards"]}>
          <CardGroup />
      </article>
    </main>
  )
}

export default Home