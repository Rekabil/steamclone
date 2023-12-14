import { REGISTER_COUNTRY, REGISTER_EMAIL } from "../action";

const initialState = {
  email: null,
  country: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_COUNTRY:
      return {
        country: action.payload,
      };
    case REGISTER_EMAIL: {
      return {
        email: action.payload,
      };
    }
    default:
      return state;
  }
};

export default registerReducer;
