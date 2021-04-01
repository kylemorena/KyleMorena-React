import React from 'react'
import illustration from '../../assets/Hero_illustration.png';
import HeroScss from './hero.module.scss'


const Hero = () => {
  return (
    <div className={`${HeroScss['hero']} p-3 bg-secondary`}>
      <div>
        <h2>Benvenuto su  BookMarks</h2>
        <p>Il sito che ti permette di cercare qualsiasi libro presente nel database di Google, se sei qui per cercare un libro in particolare non ti resta che registrarti o accedere.</p>
      </div>
      <img src={illustration} alt="hero"/>
    </div>
  )
}

export default Hero
