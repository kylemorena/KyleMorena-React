import React, {useEffect} from 'react'
import NavBar from '../components/NavBar';
import HomeScss from './Home.module.scss';
import CardBook from '../components/CardBook';
import { useGlobalContext } from '../context.js';
import axios from 'axios';


const Home = () => {
  const {books,setBooks,apiKey} = useGlobalContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&key=${apiKey}&maxResults=10`);
    setBooks(response.data.items) 
  }

  useEffect(()=>{
    getBooks();
  }, [apiKey])

  return (
    <main className={HomeScss["home"]}>
      <NavBar />
      <article className={HomeScss["cards"]}>
          {books.map(res=>{
            console.log(res);
            return <CardBook 
              key={res.id} {...res.volumeInfo}
            />
          })}
      </article>
    </main>
  )
}

export default Home