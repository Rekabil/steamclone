export const GET_GAMES = "GET_GAMES";
export const TOKEN = "TOKEN";
export const GET_COUNTRIES = "GET_COUNTRIES";

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

export const login = (body) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(baseEndPoint + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        const token = await resp.json();
        dispatch({ type: TOKEN, payload: token.accessToken });
        sessionStorage.setItem("token", token.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const register = (body) => {
  return async () => {
    try {
      const resp = await fetch(baseEndPoint + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(baseEndPoint + "/countries");

      if (resp.ok) {
        let fechedCountries = await resp.json();
        dispatch({ type: GET_COUNTRIES, payload: fechedCountries });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
