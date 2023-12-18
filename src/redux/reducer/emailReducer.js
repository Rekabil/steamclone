import { REGISTER_EMAIL } from "../action";

const initialState = {
  email: null,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_EMAIL: {
      return {
        email: action.payload,
      };
    }
    default:
      return state;
  }
};

export default emailReducer;
