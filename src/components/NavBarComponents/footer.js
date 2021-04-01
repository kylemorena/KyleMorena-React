import React from 'react';
import {Link} from 'react-router-dom';

const Copyright = () => {
  return (
    <footer className="blockquote mt-5 text-light">
      &copy;2021 Designed and Developed by &nbsp;
      <strong title="SourceTitle"> 
        <Link to="https://kyle-morena.web.app/" target="_blank">Kyle Denver Morena</Link>
      </strong>
    </footer>
  )
}

export default Copyright
