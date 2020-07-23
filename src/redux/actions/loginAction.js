import axios from 'axios';
import { LOGIN, LOGIN_LOADING } from './types';
import { baseUrl } from "./baseURL";

export const requestLoading = type => ({
  type
});

export const loginUser = login_detail => dispatch => {
  dispatch(requestLoading(LOGIN_LOADING));
  axios
    .post(`${baseUrl}/login`, login_detail)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      console.log(res, 'resssssssss')
      dispatch({
        type: LOGIN,
        payload: res.data
      });
      window.location = "/dashboard"
    })
    .catch(error => console.log(error));
};
