import { SINGLE_GAME_FETCH } from "../action";

const initialState = {
  content: [],
};

const singleGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_GAME_FETCH:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default singleGameReducer;
