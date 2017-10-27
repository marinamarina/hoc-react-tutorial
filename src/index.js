import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router'

import Resources from './components/resources'
import Home from './components/Home'
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/resources" component={Resources} />
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.container'));
