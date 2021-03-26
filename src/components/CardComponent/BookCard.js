import React,{useEffect,useState,useCallback} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardScss from './SingleCard.module.scss';
import defaultImage from '../../assets/KM_logo.svg'
import {useGlobalContext} from '../../context';
import {db} from '../../firebaseConfig';

const CardBook = ({volumeInfo,id}) => {
  const {addWhish,removeWhish,whishList} = useGlobalContext();
  const [toggle,setToggle] = useState(false)
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

  const AddClick = () => {
    addWhish({id,volumeInfo,addItem:!toggle});
  }
  const RemoveClick = () => {
    removeWhish({id,volumeInfo,addItem:toggle});
    setToggle(!toggle);
  }

  useEffect(()=>{
    whishList.forEach(res=>{
      if(res.id===id){
        setToggle(res.addItem);
      }
    })
  },[id,whishList])

  return (
    <div className="col m-2 p-0 bookBtn">
    <>
      {/* FIXME: Devi fixare perchè cambia il toogle a tutti */}
      <Link to={`/book/${id}`}>
        <div className={`${CardScss['card']} shadow`}>
          <img src={links || defaultImage} alt={volumeInfo.title} />
          {/* <h1>{title}</h1> */}
        </div>
      </Link>
      {
        toggle ? (
          <button onClick={RemoveClick}>Remove</button>
        ) : ( 
          <button onClick={AddClick}>Add</button>
        )
      }
    </>
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
