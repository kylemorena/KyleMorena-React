import React from 'react'
import {useGlobalContext} from '../../context';

const Whishlist = () => {
  const {whishList} = useGlobalContext()

  return (
    <div>
      <button>My Whishlist</button>
      <p>{whishList.length}</p>
    </div>
  )
}

export default Whishlist
