import React from 'react'
import NavBar from '../components/NavBar';
import HomeScss from './Home.module.scss';
import Sections from '../components/Sections';
import Hero from '../components/Hero';
import Toast from '../components/Toast';
import {useGlobalContext} from '../common/context';

const Home = () => {
  const {showToast} = useGlobalContext();
  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["cards"]}>
          {showToast && <Toast />}
          <Hero />
          <Sections />
      </article>
    </main>
  )
}

export default Home