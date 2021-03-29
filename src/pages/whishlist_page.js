import React from 'react';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../common/context';
import NavBar from '../components/navBar';
import BookCard from '../components/cardComponents/bookCard';

const WhishList = () => {
  const {whishList} = useGlobalContext();
  return (
    <main className="d-flex">
      <NavBar />
      <article className="m-3">
        <Link to='/' className='ml-2 text-danger'>
          Back to home
        </Link>
        <div className="row row-cols-4 m-0 p-0">
          {
            whishList.map((book)=>{
              return <BookCard key={book.id} {...book} />
            })
          }
        </div>
      </article>
    </main>
  )
}

export default WhishList
