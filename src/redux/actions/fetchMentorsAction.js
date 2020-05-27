import axios from "axios";
import { FETCH_MENTORS } from "./types";


const baseUrl = "https://owc-mentor-backend.herokuapp.com";


export const fetchMentors = () => dispatch => {
  const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};
  axios
    .get(`${baseUrl}/mentors`, {headers})
    .then(res =>
      dispatch({
        type: FETCH_MENTORS,
        payload: res.data
      })
    )
    .catch(error => console.log(error));
};
