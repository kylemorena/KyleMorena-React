import React from 'react';

const Copyright = () => {
  return (
    <footer className="blockquote mt-5 text-light">
      &copy;{new Date().getFullYear()} Designed by &nbsp;
      <strong title="SourceTitle">
        <a href="https://www.linkedin.com/in/lorenzo-laluna" target="blank">Lorenzo Laluna</a>
      </strong>
      &nbsp; and Developed by &nbsp;
      <strong title="SourceTitle"> 
        <a href="https://kyle-morena.web.app/" target="blank">Kyle Denver Morena</a>
      </strong>
    </footer>
  )
}

export default Copyright
