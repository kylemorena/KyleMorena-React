import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CardScss from './SingleCard.module.scss';
import defaultImage from '../../assets/KM_logo.svg'

const CardBook = ({volumeInfo,id}) => {
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;
  return (
    <Link to={`/book/${id}`}>
      <div className={`${CardScss['card']} col m-2 bookBtn`}>
        <img src={links || defaultImage} alt={volumeInfo.title} />
        {/* <h1>{title}</h1> */}
      </div>
    </Link>
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
