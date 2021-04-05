import React,{useEffect,useState,useCallback} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";
import CollectionScss from './collection.module.scss';
import BookCard from '../components/cardComponents/bookCard';
import { dataFilter } from '../common/dataFilter';
import NavBar from '../components/navBar';
import Error from '../common/error_404';
import Loading from '../components/articleComponent/loading';

const BooksCollection = () => {
  const { id } = useParams();
  const [title,setTitle] = useState('')
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)

  const fetchBooks = useCallback(() => {
    setLoading(true)
    dataFilter.map(async (res) => {
      if(res.url===id){
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.filter}&maxResults=10`);
          setTitle(res.title);
          setBooks(response.data.items);
          setLoading(false);
          setError(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
        
      }
    })
  },[id])

  useEffect(()=>{
    fetchBooks();
  },[id,fetchBooks])

  return (
    <main>
      <NavBar />
      <article className={`${CollectionScss['collection']} m-3`}>
        <Link to='/' className="d-inline-flex align-items-center">
          <FaAngleLeft/> Indietro
        </Link>
        <h2>{title}</h2>
        {
          error ? ( <Error /> ) : (
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 row-cols-xl-6 m-0 p-0">
              {
                loading ? (<Loading />) : (
                  books.map((book)=>{
                    return <BookCard key={book.id} {...book} />
                  })
                )
              }
            </div>
          )
        }
      </article>
    </main>
  )
}

export default BooksCollection
