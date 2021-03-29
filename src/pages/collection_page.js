import React,{useEffect,useState,useCallback} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CollectionScss from './collection.module.scss';
import BookCard from '../components/cardComponents/bookCard';
import { dataFilter } from '../common/dataFilter';
import NavBar from '../components/navBar';

const BooksCollection = () => {
  const { id } = useParams();
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState(false)

  const fetchBooks = useCallback(() => {
    setLoading(true)
    dataFilter.map(async (res) => {
      if(res.title===id){
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${res.filter}&maxResults=10`);
        setBooks(response.data.items);
        setLoading(false);
      }
    })
  },[id])

  useEffect(()=>{
    fetchBooks();
  },[id,fetchBooks])

  return (
    <main className="d-flex">
      <NavBar />
      <article className={`${CollectionScss['collection']} m-3`}>
        <Link to='/' className='ml-2'>
          Indietro
        </Link>
        <h2>{id}</h2>
        <div className="row row-cols-3 m-0 p-0">
          {loading ? '' : 
            books.map((book)=>{
              return <BookCard key={book.id} {...book} />
            })
          }
        </div>
      </article>
    </main>
  )
}

export default BooksCollection
