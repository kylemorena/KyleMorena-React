import React from 'react'
import NavBar from '../components/NavBar';
import HomeScss from './Home.module.scss';
import CardGroup from '../components/CardsGroup';


const Home = () => {
  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["cards"]}>
          {/* TODO: Devo creare il component per l'Hero */}
          <div className="title">
            <h1>Titolo molto lungo</h1>
            <div>Cupidatat dolore veniam non irure consectetur et proident culpa ut pariatur. Occaecat dolore minim minim veniam. In fugiat eu sunt fugiat laborum laborum minim pariatur. Cupidatat ad id ipsum aliquip adipisicing ea est mollit fugiat incididunt consectetur dolor officia.
            Consequat amet minim Lorem ex est nostrud nostrud labore Lorem dolor velit et exercitation. Qui cillum Lorem aliqua labore ipsum exercitation dolore et eu. Et proident Lorem duis amet sit occaecat aliquip reprehenderit voluptate aliqua exercitation est fugiat. Culpa non nostrud culpa velit cillum. Proident minim exercitation adipisicing anim non consectetur non cillum enim voluptate.</div>
          </div>
          <CardGroup />
      </article>
    </main>
  )
}

export default Home