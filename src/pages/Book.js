import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import BookScss from './Book.module.scss';
import NavBar from '../components/NavBar';
import Sections from '../components/Sections';

import { useGlobalContext } from '../context';


const Book = () => {
  const { id } = useParams()
  const { setSendId, book ,loading } = useGlobalContext();

  useEffect(() => {
    setSendId(id)
  }, [id])

  return (
    <main className={BookScss["detail"]}>
      <NavBar />
      <article className={BookScss["cards"]}>
        <Link to='/' className='btn btn-primary ml-2'>
          back home
        </Link>
          <div className="title">
            <h1>{loading ? '' : book.volumeInfo.title}</h1>
          </div>
          <Sections />
      </article>
    </main>
  )
}

export default Book