import { GET_MY_PROFILE } from "../action";

const initialState = {
  content: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
