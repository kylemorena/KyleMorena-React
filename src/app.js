import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './app.scss'
import Home from './pages/home';
import Error from './pages/error_page';
import Detail from './pages/detail_page';
import Collection from './pages/collection_page';
import Whishlist from './pages/whishlist_page';
import {useGlobalContext} from './common/context';
import Toast from './components/toast';

const App = () =>{
  const {showToast} = useGlobalContext();
  return(
    <>
      {showToast && <Toast />}
      <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/whishlist'>
              <Whishlist />
            </Route>
            <Route path='/book/:id'>
              <Detail />
            </Route>
            <Route path='/books/collection/:id'>
              <Collection />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
      </Router>
    </>
  )
}

export default App;