import { SIGN_IN, SIGN_OUT, REQUEST_ACCESS_TOKEN, UPDATE_ACCESS_TOKEN } from './AuthActions';

function auth(state = [], action){
  switch (action.type) {
    case SIGN_IN:
      return state;
    case REQUEST_ACCESS_TOKEN:
      return state;
    case UPDATE_ACCESS_TOKEN:
      return Object.assign({}, state, { access_token: action.access_token});
    case SIGN_OUT:
      return Object.assign({}, state, { access_token: ''});
    default:
      return state;
  }
}
export default auth;
