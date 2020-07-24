import axios from "axios";
import { MENTEE_RECORD } from "./types";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const fetchMenteeRecord = (id) => dispatch => {
  axios
    .get(`${baseUrl}/mentees/${id}`, {headers})
    .then(res => {
      dispatch({
        type: MENTEE_RECORD,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
};
