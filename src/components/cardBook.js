import React from 'react'
import PropTypes from 'prop-types';
import CardScss from './Card.module.scss';
import defaultImage from '../assets/KM_logo.svg';

const CardBook = ({title, imageLinks}) => {
  const links = imageLinks && imageLinks.thumbnail;
  console.log(links)
  return (
    <div className={CardScss['card']}>
      <img src={links || defaultImage} alt={title} />
      <h1>{title}</h1>
    </div>
  )
}
CardBook.propTypes = {
  links: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
CardBook.defaultProps={
  title: ' '
}

export default CardBook;
