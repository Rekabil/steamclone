import { GET_COUNTRIES } from "../action";

const initialState = {
  content: null,
};
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
