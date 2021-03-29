import React from 'react'
import illustration from '../../assets/Hero_illustration.png';

const Hero = () => {
  return (
    <div className="d-flex p-3 mt-3 mx-4 rounded-lg bg-secondary">
      <div>
        <h2 className="display-4">Titolo molto lungo</h2>
        <p className="lead">Cupidatat dolore veniam non irure consectetur et proident culpa ut pariatur. Occaecat dolore minim minim veniam. In fugiat eu sunt fugiat laborum laborum minim pariatur. Cupidatat ad id ipsum aliquip adipisicing ea est mollit fugiat incididunt consectetur dolor officia.</p>
      </div>
      <img src={illustration} alt="" height="30%" width="30%"/>
    </div>
  )
}

export default Hero
