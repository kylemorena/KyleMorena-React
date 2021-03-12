import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './app.scss'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Error from './pages/Error';

const App = () =>{
  return(
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detail'>
            <Detail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;