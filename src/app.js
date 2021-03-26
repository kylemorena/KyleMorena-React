import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import Error from './pages/Error';
import Book from './pages/BookDetail';
import Collection from './pages/BooksCollection';
import Whishlist from './pages/WhishList';


const App = () =>{
  
  return(
      <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/whishlist'>
              <Whishlist />
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