export const GET_GAMES = "GET_GAMES";
export const TOKEN = "TOKEN";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const REGISTER_EMAIL = "REGISTER_EMAIL";
export const REGISTER_COUNTRY = "REGISTER_COUNTRY";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_FILTERED_GAMES = "GET_FILTERED_GAMES";
export const SINGLE_GAME_FETCH = "SINGLE_GAME_FETCH";
export const GET_REVIEWS = "GET_REVIEWS";

const baseEndPoint = "http://localhost:3001";

export const fetchGames = (queryParams) => {
  return async (dispatch, getState) => {
    try {
      const queryString = new URLSearchParams(queryParams).toString();

      let resp = await fetch(`${baseEndPoint}/games?${queryString}`, {
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
      window.alert("ACCOUNT CREATION UNSUCCUSSESIFULL");
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

export const getMyProfile = () => {
  return async (dispatch, useState) => {
    try {
      const resp = await fetch(baseEndPoint + "/users/me", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      if (resp.ok) {
        let fetchedProfile = await resp.json();
        dispatch({ type: GET_MY_PROFILE, payload: fetchedProfile });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchFilteredGames = (queryParams) => {
  return async (dispatch, getState) => {
    try {
      const queryString = new URLSearchParams(queryParams).toString();

      let resp = await fetch(`${baseEndPoint}/games?${queryString}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      if (resp.ok) {
        let myGamesFetched = await resp.json();
        dispatch({ type: GET_FILTERED_GAMES, payload: myGamesFetched });
      } else {
        console.log("Error");
        alert("ERROR IN FETCHING GAMES");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSigleGames = (gameId) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(`${baseEndPoint}/games/${gameId.gameId}`, {
        method: "GET",
      });
      if (resp.ok) {
        let myGameFetched = await resp.json();
        dispatch({ type: SINGLE_GAME_FETCH, payload: myGameFetched });
      } else {
        console.log("Error");
        alert("ERROR IN FETCHING GAME");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchReviews = (queryParams) => {
  return async (dispatch, getState) => {
    try {
      const queryString = new URLSearchParams(queryParams).toString();

      let resp = await fetch(`${baseEndPoint}/reviews?${queryString}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      if (resp.ok) {
        let myFetchedReview = await resp.json();
        dispatch({ type: GET_REVIEWS, payload: myFetchedReview });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postReviews = (body) => {
  return async () => {
    try {
      const resp = await fetch(`${baseEndPoint}/reviews`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (resp.ok) {
        return resp.json();
      } else {
        console.log("error");
        alert("Error in posting review");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
