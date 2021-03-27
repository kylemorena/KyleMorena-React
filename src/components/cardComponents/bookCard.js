import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBookmark,FaRegBookmark } from "react-icons/fa";
import CardScss from './bookCard.module.scss';
import {useGlobalContext} from '../../common/context';
import defaultImage from '../../assets/KM_logo.svg'

const CardBook = ({volumeInfo,id}) => {
  const {user,addWhish,removeWhish,whishList,setShowToast} = useGlobalContext();
  const [toggle,setToggle] = useState(false)
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

  const AddItem = () => {
    if(user){
      addWhish({id,volumeInfo,addItem:!toggle});
    }else{
      setShowToast(true);
    };
  }
  const RemoveItem = () => {
    if(user){
      removeWhish({id,volumeInfo,addItem:toggle});
      setToggle(!toggle);
    }else{
      setShowToast(true);
    };
  }

  useEffect(()=>{
    whishList.forEach(res=>{
      if(res.id===id){
        setToggle(res.addItem);
      }
    })
  },[id,whishList])

  return (
    <div className={`${CardScss['card']} shadow col m-2 p-0 bookBtn`}>
      <Link to={`/book/${id}`}>
          <img src={links || defaultImage} alt={volumeInfo.title} />
          <h3>{volumeInfo.title}</h3>
      </Link>
      {
        toggle ? (
          <button onClick={RemoveItem} className="text-primary"><FaBookmark /></button>
        ) : ( 
          <button onClick={AddItem} className="text-primary"><FaRegBookmark /></button>
        )
      }
    </div>
  )
}

CardBook.propTypes = {
  volumeInfo: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired,
}
CardBook.defaultProps={
  volumeInfo: {},
  id: ' ',
  links: ' '
}

export default CardBook;