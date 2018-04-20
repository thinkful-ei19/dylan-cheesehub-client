import { API_BASE_URL } from '../config';

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheeses => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = error => ({
  type: FETCH_CHEESE_SUCCESS,
  error
});

export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheeseRequest());
  return fetch(API_BASE_URL)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(fetchCheeseSuccess(data)))
    .catch(err => dispatch(fetchCheeseError(err)));
};