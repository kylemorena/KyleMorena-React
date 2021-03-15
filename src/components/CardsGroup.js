import React,{useEffect ,useState} from 'react';
import CardBook from './CardBook';
import {links} from '../dataFilter';

import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;

const CardsGroup = () => {
  const [ebooks,setEbooks] = useState([])

  const getBooks = async (code) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${code}&key=${apiKey}&maxResults=5`);
    return setEbooks(response.data.items);
  }
  useEffect(()=>{
    getBooks();
  },[])

  return (
    <div>
      {links.map(res=>{
        return (
          <div key={res.id}>
            <h2>{res.filter}</h2>
            <div className="row">
              {ebooks.map((res)=>{
                return <CardBook key={res.id} {...res.volumeInfo} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default CardsGroup;
