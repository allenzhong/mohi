import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'


import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import AppReducer from '../app/AppReducer';
// const defaultState = {
//   access_token: ''
// }
// Apply the middleware to the store
const routeMiddleware = routerMiddleware(browserHistory)
const loggerMiddleware = createLogger();
const store = createStore(
                AppReducer,
                applyMiddleware(
                  thunkMiddleware,
                  loggerMiddleware,
                  routeMiddleware
                )
              );

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
