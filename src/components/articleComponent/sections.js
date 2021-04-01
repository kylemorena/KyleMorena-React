import React,{useState,useEffect,useCallback} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { FaAngleRight,FaFire,FaDollarSign } from "react-icons/fa";
import SectionsScss from './sections.module.scss';
import Loading from './loading';
import {dataFilter} from '../../common/dataFilter';
import {useGlobalContext} from '../../common/context';
import BookCard from '../cardComponents/bookCard';
import Error from '../../common/Error_404';

const CardsGroup = () => {
  const {apiKey,bookData} = useGlobalContext();
  const [freeEbooks,setFreeEbooks] = useState({title:'', books:[]})
  const [paidEbooks,setPaidEbooks] = useState({title:'', books:[]})
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  const getBooks = useCallback(() => {
    setLoading(true)
    dataFilter.map(async (res) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.filter}&key=${apiKey}&maxResults=8`);
      //get api data depending on filter from links
        switch(res.url){
          case 'newest':
            setFreeEbooks({title:res.title,url:res.url,books:response.data.items});
            setLoading(false);
            setError(false);
            break;
          case 'best-sellers':
            setPaidEbooks({title:res.title,url:res.url,books:response.data.items});
            setLoading(false);
            setError(false);
            break;
          default:
            throw new Error ('filter not found')
        }
      } catch (error) {
        setLoading(false);
        setError(true);
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
            <div className="d-flex justify-content-between align-items-center my-4">
              <h2 className={SectionsScss['title']}><FaFire />{freeEbooks.title}</h2>
              <Link to={`/books/collection/${freeEbooks.url}`}>
                Vedi tutti <FaAngleRight />
              </Link>
            </div>
            {
              error ? ( <Error /> ) : (
                <section className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
                  {freeEbooks.books.map((book)=>{
                    if(book.id===bookData.id){
                      return null;
                    }
                    return <BookCard key={book.id} {...book} />
                  })}
                </section>
              )
            }
            

            {/* PAID-EBOOKS i più venduti */}
            <div className="d-flex justify-content-between align-items-center my-4">
              <h2 className={SectionsScss['title']}><FaDollarSign /> {paidEbooks.title}</h2>
              <Link to={`/books/collection/${paidEbooks.url}`}>
                Vedi tutti <FaAngleRight />
              </Link>
            </div>
            {
              error ? ( <Error /> ) : (
                <section className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0"> 
                  {paidEbooks.books.map((book)=>{
                    if(book.id===bookData.id){
                      return null;
                    }
                    return <BookCard key={book.id} {...book} />
                  })}
                </section>
              ) 
            }
            
          </div>
        )
      }
    </>
  )
}
export default CardsGroup;
