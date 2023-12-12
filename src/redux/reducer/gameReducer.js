import { GET_GAMES } from "../action";

const initialState = {
  content: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
