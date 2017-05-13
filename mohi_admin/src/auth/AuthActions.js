import fetch from 'isomorphic-fetch';
import { push, replace } from 'react-router-redux';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN';
export const UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN';

const url = '/auth/sign_in';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json; charset=utf-8');

const myInit = {
  method: 'POST',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

function signin(username, password){
  return {
    type: SIGN_IN,
    username,
    password
  }
}

export function signout() {
  return dispatch => {
    dispatch({
      type: SIGN_OUT,
    });
    dispatch(replace('/auth'));
  }
}

function requestAccessToken(status) {
  return {
    type: REQUEST_ACCESS_TOKEN,
    status
  }
}

function updateAccessToken(json) {
  localStorage.setItem('access_token', json.access_token);
  return {
    type: UPDATE_ACCESS_TOKEN,
    access_token: json.access_token
  }
}

function fetchAccessToken(username, password) {
  return dispatch => {
    dispatch(requestAccessToken({status: 'fetching'}));
    let initParams = {
      ...myInit,
      body: JSON.stringify({
        email: username,
        password: password
      })
    }
    return fetch(url, initParams)
      .then(response => {
          let token = response.headers.get('access-token');
          return dispatch(updateAccessToken({'access_token': token}));
      })
      .then((result) => {
        if (result.access_token == null){
          //here should show alerts or errors in front-end page
          dispatch(push('/auth'))
        } else {
          dispatch(push('/admin'));
        }
      });
  }
}

export function fetchAccessTokenIfNeeded(username, password) {
  return (dispatch, getState) => {
    return dispatch(fetchAccessToken(username, password));
  }
}
