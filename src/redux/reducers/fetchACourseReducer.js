import { FETCH_A_COURSE } from "../actions/types";


const initialState = {
  course: [],
};

const fetchACourse = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_A_COURSE:
      return {
        ...state,
        course: action.payload,
      };
    default:
      return state;
  }
};
export default fetchACourse;