import { ADD_COURSE } from "../actions/types";

const initialState = {
  course: {},
};
const addCourse = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};

export default addCourse;
