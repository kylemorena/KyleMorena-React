import React from 'react'
import AutocompleteScss from './Autocomplete.module.scss';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../context';

const Autocomplete = ({books}) => {
  const {dispatch,resetData} = useGlobalContext();

  function handleClick(){
    dispatch(resetData([]))
  }

  return (
    <div className={`${AutocompleteScss['searchList']} p-1 rounded bg-light`}>
      {books.map(book=>{
        return(
          <Link to={`/book/${book.id}`} key={book.id} onClick={handleClick}>
            <div className="bookBtn">{book.volumeInfo.title}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Autocomplete
