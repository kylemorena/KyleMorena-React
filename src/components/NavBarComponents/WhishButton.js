import React from 'react'
import {Link} from 'react-router-dom';
import { FaBookmark } from "react-icons/fa";
import WishButtonScss from './whishButton.module.scss';
import {useGlobalContext} from '../../common/context';

const Whishlist = () => {
  const {whishList} = useGlobalContext()

  return (
    <Link to={'/whishlist'} className={`${WishButtonScss['btn']} p-0 mt-4 color`}>
      <FaBookmark/>&nbsp; PREFERITI &nbsp;
      <span className="px-2">{whishList.length}</span>
    </Link>
  )
}

export default Whishlist
