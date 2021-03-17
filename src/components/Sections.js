import React,{useEffect ,useState} from 'react';
import axios from 'axios';
import {links} from '../dataFilter';
import BookCard from './CardComponent/BookCard';
import SectionsScss from './Sections.module.scss';

const apiKey = process.env.REACT_APP_API_KEY;

const CardsGroup = () => {
  const [freeEbooks,setFreeEbooks] = useState({title:'', books:[]})
  const [paidEbooks,setPaidEbooks] = useState({title:'', books:[]})
  const [download,setDownload] = useState({title:'', books:[]})
  
  //FILL every catgory with google books api 
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
          return setDownload({title:res.filter,books:response.data.items});
        default:
          throw new Error ('non esiste il filter di questo links')
      }
    });
    return links;
  }

  useEffect(()=>{
    getBooks();
  },[])

  return (
    <div>
      <h2 className={SectionsScss['title']}>{freeEbooks.title}</h2>
        <section className={"row m-0 p-0"}> 
          {freeEbooks.books.map((book)=>{
            return <BookCard key={book.id} {...book.volumeInfo} />
          })}
        </section>
      <h2 className={SectionsScss['title']}>{paidEbooks.title}</h2>
        <section className="row m-0 p-0"> 
          {paidEbooks.books.map((book)=>{
            return <BookCard key={book.id} {...book.volumeInfo} />
          })}
        </section>
      <h2 className={SectionsScss['title']}>Download</h2>
        <section className="row m-0 p-0"> 
          {download.books.map((book)=>{
            return <BookCard key={book.id} {...book.volumeInfo} />
          })}
        </section>
    </div>
  )
}
export default CardsGroup;
