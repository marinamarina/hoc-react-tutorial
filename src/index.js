import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router'

import Authentication from './components/requreAuth'
import AboutUs from './components/aboutUs'
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
        <Route path="/resources" component={Authentication(Resources)} />
        <Route path="/about-us" component={AboutUs} />
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.container'));
