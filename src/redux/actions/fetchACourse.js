import { FETCH_A_COURSE } from "./types";
import axios from "axios";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};


export const fetchACourse = (courseId) => dispatch => {
  axios
    .get(`${baseUrl}/courses/${courseId}`, {headers})
    .then(res =>{
      console.log(res.data, 'coursjjjjjesssss')
      dispatch({
        type: FETCH_A_COURSE,
        payload: res.data
      })
    })
    .catch(error => console.log(error));
};
