import React from 'react'
import AutocompleteScss from './Autocomplete.module.scss';
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../common/context';

const Autocomplete = ({books}) => {
  const {dispatch,ResetData} = useGlobalContext();

  function handleClick(){
    dispatch(ResetData([]))
  }

  return (
    <div className={`${AutocompleteScss['searchList']} p-1 rounded bg-light`}>
        {
          books !==undefined ? (
            books.map(book=>{
              return(
                <Link to={`/book/${book.id}`} key={book.id} onClick={handleClick}>
                  <div className="bookBtn">{book.volumeInfo.title}</div>
                </Link>
              )
            })
          ) : 'Nessun Risultato'
        }
    </div>
  )
}

export default Autocomplete
