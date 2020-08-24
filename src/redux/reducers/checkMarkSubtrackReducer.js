import { CHECK_MARK_SUBTRACK } from "../actions/types";

const initialState = {
  subtrack: {},
  isChecked: false,
};

const checkMarckSubtrack = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_MARK_SUBTRACK:
      return {
        ...state,
        subtrack: action.payload,
        isChecked: true,
      };
    default:
      return state;
  }
};
export default checkMarckSubtrack;
