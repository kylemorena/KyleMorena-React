import React from 'react';
import {Link} from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import {useGlobalContext} from '../common/context';
import NavBar from '../components/navBar';
import BookCard from '../components/cardComponents/bookCard';

const WhishList = () => {
  const {whishList} = useGlobalContext();
  return (
    <main>
      <NavBar />
      <article className="m-3">
        <Link to='/' className="d-inline-flex align-items-center">
          <FaAngleLeft/> Indietro
        </Link>
        <h2 className="mb-3">My WhishList</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
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
