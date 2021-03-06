import React from 'react';
import {Link} from 'react-router-dom';
import AutocompleteScss from './autocomplete.module.scss';
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
                book.volumeInfo.title ? 
                <Link to={`/book/${book.id}`} key={book.id} onClick={handleClick}>
                  <div className="p-1 text-info bookBtn">{book.volumeInfo.title}</div>
                </Link> : 
                <div key={book.id}>non ho trovato il titolo del libro'</div>
              )
            })
          ) : (<div className="p-1">Nessun Risultato</div>)
        }
    </div>
  )
}

export default Autocomplete
