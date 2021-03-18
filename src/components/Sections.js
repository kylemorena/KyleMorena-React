import React,{useEffect ,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {links} from '../dataFilter';
import BookCard from './CardComponent/BookCard';
import SectionsScss from './Sections.module.scss';
import {useGlobalContext} from '../context';

const apiKey = process.env.REACT_APP_API_KEY;

const CardsGroup = () => {
  const {setFreeEbooks,setPaidEbooks,setDownloadEbooks,freeEbooks,paidEbooks,downloadEbooks} = useGlobalContext();
  
  //FILL every catgory with google books api 
  useEffect(()=>{
    const getBooks = () => {
      links.map(async (res) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.code}&key=${apiKey}&maxResults=5`);
        //get api data depending on filter from links
        switch(res.filter){
          case 'free-ebooks':
            return setFreeEbooks({title:res.filter,books:response.data.items});
          case 'paid-ebooks':
            return setPaidEbooks({title:res.filter,books:response.data.items});
          case 'download':
            return setDownloadEbooks({title:res.filter,books:response.data.items});
          default:
            throw new Error ('non esiste il filter di questo links')
        }
      });
    }
    getBooks();
  },[setDownloadEbooks, setFreeEbooks, setPaidEbooks])

  return (
    <div>
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
  )
}
export default CardsGroup;
