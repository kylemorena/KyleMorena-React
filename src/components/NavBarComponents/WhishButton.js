import React from 'react'
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../common/context';
import WishButtonScss from './WhishButton.module.scss';
import { FaBookmark } from "react-icons/fa";

const Whishlist = () => {
  const {whishList} = useGlobalContext()

  return (
    <div className={`${WishButtonScss['btn']} mt-3`}>
      <Link to={'/whishlist'} className="text-light">
        <FaBookmark /> PREFERITI <span className="text-light p-1 rounded-lg bg-warning">{whishList.length}</span>
      </Link>
    </div>
  )
}

export default Whishlist
