import React, {useState,useEffect,useCallback} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BookScss from './Book.module.scss';
import NavBar from '../components/NavBar';
import Sections from '../components/Sections';

const Book = () => {
  const { id } = useParams()
  const [bookData, setBookData] = useState({})
  const [loading, setLoading] = useState(true)
  const getBookData = useCallback(async()=>{
    setLoading(true);
    try{
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBookData(response.data);
      setLoading(false)
    }catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[id])

  useEffect(()=>{
    getBookData()
  },[id,getBookData])

  return (
    <main className={BookScss["detail"]}>
      <NavBar />
      <article className={BookScss["cards"]}>
        <Link to='/' className='ml-2'>
          back home
        </Link>
          <div className="title">
            <h1>{loading ? '' : bookData.volumeInfo.title}</h1>
          </div>
          <Sections />
      </article>
    </main>
  )
}

export default Book