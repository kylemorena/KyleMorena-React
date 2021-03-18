import React,{useEffect,useState,useCallback} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CollectionScss from './Collection.module.scss';
import BookCard from '../components/CardComponent/BookCard';
import { links } from '../dataFilter';
import {useGlobalContext} from '../context';

const BooksCollection = () => {
  const { id } = useParams()

  useEffect(()=>{

  },[])

  console.log(id);
  return (
    <div>
      <h2>Title</h2>
      <div className="row row-cols-4">
      </div>
    </div>
  )
}

export default BooksCollection
