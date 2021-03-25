import React from 'react'
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../context';

const Whishlist = () => {
  const {whishList} = useGlobalContext()

  return (
    <div>
      <Link to={'/whishlist'} className="text-light">
        My Whishlist <span className="text-success">{whishList.length}</span>
      </Link>
    </div>
  )
}

export default Whishlist
