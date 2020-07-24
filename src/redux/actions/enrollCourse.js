import axios from "axios";
import { ENROLL_COURSE } from "./types";
import { toast } from "react-toastify";
import { baseUrl } from "./baseURL";


const token = localStorage.getItem('jwtToken');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
};

export const enrollCourse = (courseDetail) => dispatch => {
  axios
    .patch(`${baseUrl}/mentees`, courseDetail, {headers})
    .then(res => {
      dispatch({
        type: ENROLL_COURSE,
        payload: res.data
      })
      toast.success('Successfully Enrolled')
    })
    .catch(error => console.log(error));
};
