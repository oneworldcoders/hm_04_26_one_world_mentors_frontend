import axios from "axios";
import { MENTEE_SUBTRACKS } from "./types";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const fetchMenteeSubtracks = () => dispatch => {
  axios
    .get(`${baseUrl}/mentee_subtracks/`, {headers})
    .then(res => {
      dispatch({
        type: MENTEE_SUBTRACKS,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
};
