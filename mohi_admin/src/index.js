import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { push, replace } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store/store.js';
import AuthLogin from './auth/AuthLogin';
import DashBoard from './dashboard/DashBoard';


const app_route = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/admin" component={App} onEnter={authenticate}>
        <IndexRoute component={DashBoard} />
      </Route>
      <Route path="/auth" component={AuthLogin} />
    </Router>
  </Provider>
)

function authenticate(nextState, replace) {
  let state = store.getState();
  console.log(`state : ${state.auth.access_token}` );
  if(!state.auth.access_token) {
    replace('/auth');
  }
}

ReactDOM.render(
  app_route,
  document.getElementById('root')
);
