import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardScss from './SingleCard.module.scss';
import defaultImage from '../../assets/KM_logo.svg'
import {useGlobalContext} from '../../common/context';

const CardBook = ({volumeInfo,id}) => {
  const {addWhish,removeWhish,whishList} = useGlobalContext();
  const [toggle,setToggle] = useState(false)
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

  const AddItem = () => {
    addWhish({id,volumeInfo,addItem:!toggle});
  }
  const RemoveItem = () => {
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
      <Link to={`/book/${id}`}>
        <div className={`${CardScss['card']} shadow`}>
          <img src={links || defaultImage} alt={volumeInfo.title} />
          {/* <h1>{title}</h1> */}
        </div>
      </Link>
      {
        toggle ? (
          <button onClick={RemoveItem}>Remove</button>
        ) : ( 
          <button onClick={AddItem}>Add</button>
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
