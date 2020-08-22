import { MENTEE_SUBTRACKS } from "../actions/types";

const initialState = {
  mentee_subtracks: [],
  progress: 0,
};

const fetchMenteeSubtracks = (state = initialState, action) => {
  switch (action.type) {
    case MENTEE_SUBTRACKS:
      return {
        ...state,
        mentee_subtracks: action.payload.subtracks,
        progress: action.payload.progress,
      };
    default:
      return state;
  }
};
export default fetchMenteeSubtracks;
