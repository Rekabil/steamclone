export const GET_GAMES = "GET_GAMES";

const baseEndPoint = "http://localhost:3001";

export const fetchGames = (queryParams) => {
  return async (dispatch, getState) => {
    try {
      const queryString = new URLSearchParams(queryParams).toString();

      let resp = await fetch(`${baseEndPoint}/games${queryString}`, {
        method: "GET",
      });
      if (resp.ok) {
        let myGamesFetched = await resp.json();
        dispatch({ type: GET_GAMES, payload: myGamesFetched });
      } else {
        console.log("Error");
        alert("ERROR IN FETCHING GAMES");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
