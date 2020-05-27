import axios from "axios";
import { FETCH_SINGLE_USER } from "./types";


const baseUrl = "https://owc-mentor-backend.herokuapp.com";
const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const fetchSingleUserProfile = (userId) => dispatch => {
  axios
    .get(`${baseUrl}/user/${userId}`, {headers})
    .then(res =>
      dispatch({
        type: FETCH_SINGLE_USER,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
