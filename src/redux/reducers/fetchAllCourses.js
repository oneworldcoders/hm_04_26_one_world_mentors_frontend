import { ALL_COURSES } from "../actions/types";

const initialState = {
  courses: [],
};

const fetchCourses = (state = initialState, action) => {

  switch (action.type) {
    case ALL_COURSES:
      return {
        ...state,
        courses: action.payload.courses,
      };
    default:
      return state;
  }
};
export default fetchCourses;
