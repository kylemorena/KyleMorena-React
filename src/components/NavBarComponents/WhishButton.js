import React from 'react'
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../common/context';
import WishButtonScss from './WhishButton.module.scss';
import { FaBookmark } from "react-icons/fa";

const Whishlist = () => {
  const {whishList} = useGlobalContext()

  return (
    <Link to={'/whishlist'} className={`${WishButtonScss['btn']} p-0 mt-4 color`}>
      <FaBookmark/>&nbsp; PREFERITI &nbsp;
      <span className="px-2 rounded-circle">{whishList.length}</span>
    </Link>
  )
}

export default Whishlist
