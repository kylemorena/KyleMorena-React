import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardScss from './SingleCard.module.scss';
import defaultImage from '../../assets/KM_logo.svg'
import {useGlobalContext} from '../../context';

const CardBook = ({volumeInfo,id}) => {
  const {prova,addWhish,removeWhish} = useGlobalContext();
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

  const handleClick = () => {
    console.log(prova)
    if(prova===false){
      addWhish({id,volumeInfo});
    }else{
      removeWhish({id,volumeInfo});
    }
  }

  return (
    <div>
      {/* FIXME: Devi fixare perchè cambia il toogle a tutti */}
      <Link to={`/book/${id}`}>
        <div className={`${CardScss['card']} col m-2 p-0 bookBtn shadow`}>
          <img src={links || defaultImage} alt={volumeInfo.title} />
          {/* <h1>{title}</h1> */}
        </div>
      </Link>
      {
        prova ? (
          <button onClick={handleClick}>Remove</button>
        ) : (
          <button onClick={handleClick}>Add</button>
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
