import { FETCH_MENTORS } from "../actions/types";

const initialState = {
  mentors: [],
};

const fetchMentors = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENTORS:
      return {
        ...state,
        mentors: action.payload,
      };
    default:
      return state;
  }
};
export default fetchMentors;
