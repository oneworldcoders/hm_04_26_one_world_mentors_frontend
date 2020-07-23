import axios from "axios";
import { FORGOT_PASSWORD } from "./types";
import { baseUrl } from "./baseURL";


const headers = {
  'Content-Type': 'application/json'
};

export const forgotPassword = (email) => dispatch => {
  axios
    .post(`${baseUrl}/password/forgot`, email, {headers})
    .then(res => {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: res.data
      });
    window.location = '/reset';
    })
    .catch(error => console.log(error));
};
