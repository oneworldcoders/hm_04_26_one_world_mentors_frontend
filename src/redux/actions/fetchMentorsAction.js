import axios from "axios";
import { FETCH_MENTORS } from "./types";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const fetchMentors = () => dispatch => {
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
