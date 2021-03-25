import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import {useGlobalContext} from '../context';
import BookCard from '../components/CardComponent/BookCard';

const WhishList = () => {
  const {whishList} = useGlobalContext();
  return (
    <main className="d-flex">
      <NavBar />
      <article className="">
        <Link to='/' className='ml-2 text-dark'>
          Back to home
        </Link>
        <div className="row row-cols-4">
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
