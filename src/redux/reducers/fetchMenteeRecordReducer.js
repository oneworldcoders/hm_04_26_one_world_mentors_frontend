import { MENTEE_RECORD } from "../actions/types";

const initialState = {
  menteeRecord: [],
};

const fetchMenteeRecord = (state = initialState, action) => {

  switch (action.type) {
    case MENTEE_RECORD:
      return {
        ...state,
        menteeRecord: action.payload,
      };
    default:
      return state;
  }
};
export default fetchMenteeRecord;
