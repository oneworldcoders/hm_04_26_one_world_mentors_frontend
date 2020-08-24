import { CHECK_MARK_SUBTRACK } from "./types";
import axios from "axios";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};


export const checkMarkSubtrack = (subtrackId) => dispatch => {
  console.log(headers, "headers");
  axios
    .patch(`${baseUrl}/mentee_subtracks/${subtrackId}`, {headers})
    .then(res =>{
      console.log(res, "completed");
      dispatch({
        type: CHECK_MARK_SUBTRACK,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
};
