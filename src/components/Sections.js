import React from 'react';
import {Link} from 'react-router-dom';
import BookCard from './CardComponent/BookCard';
import SectionsScss from './Sections.module.scss';
import {useGlobalContext} from '../context';

const CardsGroup = () => {
  const {loading,freeEbooks,paidEbooks,downloadEbooks} = useGlobalContext();
  return (
    <>
      {
        loading || 
        <div className="mt-3 bg-secondary">
          <h2 className={SectionsScss['title']}>{freeEbooks.title} </h2>
          <Link to={`/books/collection/${freeEbooks.title}`} className='ml-2'>
            vedi tutti
          </Link>
          <section className={"row m-0 p-0"}> 
            {freeEbooks.books.map((book)=>{
              return <BookCard key={book.id} {...book} />
            })}
          </section>
          <h2 className={SectionsScss['title']}>{paidEbooks.title}</h2>
          <Link to={`/books/collection/${paidEbooks.title}`} className='ml-2'>
            vedi tutti
          </Link>
          <section className="row m-0 p-0"> 
            {paidEbooks.books.map((book)=>{
              return <BookCard key={book.id} {...book} />
            })}
          </section>
          <h2 className={SectionsScss['title']}>{downloadEbooks.title}</h2>
          <Link to={`/books/collection/${downloadEbooks.title}`} className='ml-2'>
            vedi tutti
          </Link>
          <section className="row m-0 p-0"> 
            {downloadEbooks.books.map((book)=>{
              return <BookCard key={book.id} {...book} />
            })}
          </section>
        </div>
      }
    </>
  )
}
export default CardsGroup;
