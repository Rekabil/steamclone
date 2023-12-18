import { GET_FILTERED_GAMES } from "../action";

const initialState = {
  content: [],
};

const filteredGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_GAMES:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default filteredGamesReducer;
