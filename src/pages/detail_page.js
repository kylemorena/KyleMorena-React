import React, {useState,useEffect,useCallback} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";
import DetailScss from './detail.module.scss';
import {useGlobalContext} from '../common/context';
import NavBar from '../components/navBar';
import Sections from '../components/articleComponent/sections';
import DetailCard from '../components/cardComponents/detailCard';
import Loading from '../components/articleComponent/loading';

const Book = () => {
  const {bookData,setBookData} = useGlobalContext();
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const getBookData = useCallback(async()=>{
    setLoading(true);
    try{
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBookData(response.data);
      setLoading(false);
    }catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[id, setBookData])

  useEffect(()=>{
    getBookData()
  },[id,getBookData])

  return (
    <main className={DetailScss["detail"]}>
      <NavBar />
      <article className={`${DetailScss["cards"]} m-3`}>
        <Link to='/' className="d-inline-flex align-items-center">
          <FaAngleLeft /> Back home
        </Link>
          {
            loading ?  <Loading/> : <DetailCard {...bookData} />
          }
          <Sections />
      </article>
    </main>
  )
}

export default Book