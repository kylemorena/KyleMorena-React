import React from 'react'
import SearchListScss from './SearchList.module.scss';

const SearchList = ({title}) => {
  return (
    <div className={`${SearchListScss['searchList']}`}>
      <h5>{title}</h5>
    </div>
  )
}

export default SearchList
