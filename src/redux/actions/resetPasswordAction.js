import axios from "axios";
import { RESET_PASSWORD } from "./types";

const baseUrl = "https://owc-mentor-backend.herokuapp.com";
const headers = {
  'Content-Type': 'application/json'
};

export const reset_password = (reset_password_detail) => dispatch => {
  axios
    .post(`${baseUrl}/password/reset`, reset_password_detail, {headers})
    .then(res => {
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      });
      window.location = '/login'
    })
    .catch(error => console.log(error));
};
