import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const api = process.env.REACT_APP_API_KEY;
  useEffect(()=>{
    getBooksApi();
  },[])

  const getBooksApi = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${api}`)
    console.log(response.data);
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <button className='btn' onClick={getBooksApi}>prova</button>
    </div>
  );
}

export default App;
