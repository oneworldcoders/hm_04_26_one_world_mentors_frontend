import { ENROLL_COURSE } from "../actions/types";

const initialState = {
  enrollDetails: {},
};

const enrollCourse = (state = initialState, action) => {

  switch (action.type) {
    case ENROLL_COURSE:
      return {
        ...state,
        enrollDetails: action.payload,
      };
    default:
      return state;
  }
};
export default enrollCourse;
