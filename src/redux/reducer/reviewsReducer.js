import { GET_REVIEWS } from "../action";

const initialState = {
  content: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
