import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBookmark,FaRegBookmark } from "react-icons/fa";
import CardScss from './bookCard.module.scss';
import {useGlobalContext} from '../../common/context';
import defaultImage from '../../assets/Default_Cover.png';

const CardBook = ({volumeInfo,id}) => {
  const {user,addWhish,removeWhish,whishList,setShowToast} = useGlobalContext();
  const [toggle,setToggle] = useState(false)
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;
  const authors = volumeInfo.authors && volumeInfo.authors.toString();

  // function noScroll() {
  //   document.body.style.overflow="hidden";
  // }

  const AddItem = () => {
    if(user){
      addWhish({id,volumeInfo});
      setToggle(!toggle);
    }else{
      setShowToast(true);
      // noScroll()
    };
  }
  const RemoveItem = () => {
    if(user){
      removeWhish({id,volumeInfo});
      setToggle(!toggle);
    }else{
      setShowToast(true);
      // noScroll()
    };
  }

  useEffect(()=>{
    if(user){
      whishList.forEach(res=>{
        if(res.id===id){
          setToggle(true);
        }
      })
    }else{
      setToggle(false);
    }
  },[whishList, id, user])

  return (
    <div className={`${CardScss['card']} col mb-4 p-0 bookBtn`}>
      <div className="">
        <Link to={`/book/${id}`}>
            <img src={links || defaultImage} alt={volumeInfo.title} />
            <div>
              <p className="m-0 lead">{volumeInfo.title}</p>
              <p className="mb-0 text-primary">{authors || 'Sconosciuto'}</p>
            </div>
        </Link>
        {
          toggle ? (
            <button onClick={RemoveItem} className="text-primary"><FaBookmark /></button>
          ) : ( 
            <button onClick={AddItem} className="text-primary"><FaRegBookmark /></button>
          )
        }
      </div>
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
