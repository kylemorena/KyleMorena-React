import React,{useEffect,useState,useCallback} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CollectionScss from './Collection.module.scss';
import BookCard from '../components/CardComponent/BookCard';
import { dataFilter } from '../dataFilter';

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
    <div className={`${CollectionScss['collection']}`}>
      <Link to='/' className='ml-2'>
          back home
      </Link>
      <h2>{id}</h2>
      <div className="row row-cols-4">
        {loading ? '' : 
          books.map((book)=>{
            return <BookCard key={book.id} {...book} />
          })
        }
      </div>
    </div>
  )
}

export default BooksCollection
