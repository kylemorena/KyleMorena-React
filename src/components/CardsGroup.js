import React,{useEffect ,useState} from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import {links} from '../dataFilter';
import CardBook from './CardComponents/SingleCard';


const apiKey = process.env.REACT_APP_API_KEY;

const CardsGroup = () => {
  const [freeEbooks,setFreeEbooks] = useState({title:'', books:[]})
  const [paidEbooks,setPaidEbooks] = useState({title:'', books:[]})
  const [download,setDownload] = useState({title:'', books:[]})

  const getBooks = () => {
    links.map(async (res) => {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.code}&key=${apiKey}&maxResults=5`);
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
      <h2>{freeEbooks.title}</h2>
        <div key={2} className="row row-cols-4"> 
          {freeEbooks.books.map((book)=>{
            return <CardBook key={book.id} {...book.volumeInfo} />
          })}
        </div>
      <h2>{paidEbooks.title}</h2>
        <div className="row row-cols-4"> 
          {paidEbooks.books.map((book)=>{
            return <CardBook key={book.id} {...book.volumeInfo} />
          })}
        </div>
      <h2 >Download</h2>
        <div className="row row-cols-4"> 
          {download.books.map((book)=>{
            return <CardBook key={book.id} {...book.volumeInfo} />
          })}
        </div>
    </div>
  )
}
export default CardsGroup;
