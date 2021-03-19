import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import Error from './pages/Error';
import Book from './pages/BookDetail';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Collection from './pages/BooksCollection';

const App = () =>{
  return(
      <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Login'>
              <Login />
            </Route>
            <Route path='/Signup'>
              <Signup />
            </Route>
            <Route path='/book/:id'>
              <Book />
            </Route>
            <Route path='/books/collection/:id'>
              <Collection />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
      </Router>
  )
}

export default App;