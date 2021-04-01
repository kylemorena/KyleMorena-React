import React from 'react'
import illustration from '../../assets/Hero_illustration.png';
import HeroScss from './hero.module.scss'


const Hero = () => {
  return (
    <div className={`${HeroScss['hero']} p-3 bg-secondary`}>
      <div>
        <h2>Cos'è Booksss?</h2>
        <p>Cupidatat dolore veniam non irure consectetur et proident culpa ut pariatur. Occaecat dolore minim minim veniam. In fugiat eu sunt fugiat laborum laborum minim pariatur. Cupidatat ad id ipsum aliquip adipisicing ea est mollit fugiat incididunt consectetur dolor officia.</p>
      </div>
      <img src={illustration} alt="hero"/>
    </div>
  )
}

export default Hero
