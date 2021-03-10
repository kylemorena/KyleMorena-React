import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.scss';
import Home from './Home';
import Contacts from './Contacts';
import Detail from './Detail';
import Error from './Error';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/detail'>
          <Detail />
        </Route>
        <Route exact path='/contacts'>
          <Contacts />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


