import React,{useState,useEffect,useCallback} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FaAngleRight,FaFire,FaDollarSign } from "react-icons/fa";
import SectionsScss from './sections.module.scss';
import Loading from './loading';
import {dataFilter} from '../../common/dataFilter';
import {useGlobalContext} from '../../common/context';
import BookCard from '../cardComponents/bookCard';

const CardsGroup = () => {
  const {apiKey,bookData} = useGlobalContext();
  const [freeEbooks,setFreeEbooks] = useState({title:'', books:[]})
  const [paidEbooks,setPaidEbooks] = useState({title:'', books:[]})
  const [downloadEbooks,setDownloadEbooks] = useState({title:'', books:[]});
  const [loading,setLoading] = useState(true);

  const getBooks = useCallback(() => {
    setLoading(true)
    dataFilter.map(async (res) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.filter}&key=${apiKey}&maxResults=8`);
      //get api data depending on filter from links
        switch(res.title){
          case 'free-ebooks':
            setFreeEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          case 'paid-ebooks':
            setPaidEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          case 'download':
            setDownloadEbooks({title:res.title,books:response.data.items});
            setLoading(false);
            break;
          default:
            throw new Error ('filter not found')
        }
      } catch (error) {
        setLoading(true);
        console.log(error)
      }
    });
  },[apiKey])

  useEffect(()=>{
    getBooks();
  },[getBooks])

  return (
    <>
      {
        loading ?  (
          <Loading />
        ) : (
          <div className="mt-3">
            {/* FREE-EBOOKS nuove uscite */}
            <div className="d-flex justify-content-between">
              <h2 className={SectionsScss['title']}><FaFire />{freeEbooks.title}</h2>
              <Link to={`/books/collection/${freeEbooks.title}`} className='ml-2'>
                Vedi tutti <FaAngleRight />
              </Link>
            </div>
            <section className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
              {freeEbooks.books.map((book)=>{
                if(book.id===bookData.id){
                  return null;
                }
                return <BookCard key={book.id} {...book} />
              })}
            </section>

            {/* PAID-EBOOKS i più venduti */}
            <div className="d-flex justify-content-between">
              <h2 className={SectionsScss['title']}><FaDollarSign /> {paidEbooks.title}</h2>
              <Link to={`/books/collection/${paidEbooks.title}`} className='ml-2'>
                Vedi tutti <FaAngleRight />
              </Link>
            </div>
            <section className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
              {paidEbooks.books.map((book)=>{
                if(book.id===bookData.id){
                  return null;
                }
                return <BookCard key={book.id} {...book} />
              })}
            </section>

            {/* EBOOKS-Scaricabili preorders */}
            <div className="d-flex justify-content-between">
              <h2 className={SectionsScss['title']}>{downloadEbooks.title}</h2>
              <Link to={`/books/collection/${downloadEbooks.title}`}>
                Vedi tutti <FaAngleRight />
              </Link>
            </div>
            <section className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
              {downloadEbooks.books.map((book)=>{
                if(book.id===bookData.id){
                  return null;
                }
                return <BookCard key={book.id} {...book} />
              })}
            </section>
          </div>
        )
      }
    </>
  )
}
export default CardsGroup;
