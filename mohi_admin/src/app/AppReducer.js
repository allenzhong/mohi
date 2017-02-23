import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from '../auth/AuthReducers';


const AppReducer = combineReducers({
  auth,
  routing: routerReducer
});
export default AppReducer;
