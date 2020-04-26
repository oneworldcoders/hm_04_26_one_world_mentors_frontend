import axios from 'axios';
import { LOGIN, LOGIN_LOADING } from './types';

export const requestLoading = type => ({
  type
});
const baseUrl = "https://owc-mentor-backend.herokuapp.com";

export const loginUser = login_detail => dispatch => {
  dispatch(requestLoading(LOGIN_LOADING));
  axios
    .post(`${baseUrl}/login`, login_detail)
    .then(res => {
      dispatch({
        type: LOGIN,
        payload: res.data
      });
      window.location = "/dashboard"
    })
    .catch(error => console.log(error));
};
