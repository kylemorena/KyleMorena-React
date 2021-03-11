import React,{useEffect} from 'react'

const cardBook = ({title,image}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="prova"/>
    </div>
  )
}

export default cardBook;
