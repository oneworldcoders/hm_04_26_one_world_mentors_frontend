import axios from "axios";
import {
  ADD_COURSE
} from "./types";
import { baseUrl } from "./baseURL";

const token = localStorage.getItem("jwtToken");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const addCourse = (userId, updateData) => (dispatch) => {
  axios
    .patch(`${baseUrl}/user/profile/${userId}`, updateData , { headers })
    .then((res) => {
      console.log(res.data, 'res.data')
      dispatch({
        type: ADD_COURSE,
        payload: res.data,
      })
      window.location = "/dashboard"
    })
    .catch((error) => console.log(error));
};