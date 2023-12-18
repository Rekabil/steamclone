import { REGISTER_COUNTRY } from "../action";

const initialState = {
  country: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_COUNTRY:
      return {
        country: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
