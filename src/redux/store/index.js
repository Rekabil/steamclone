import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import gameReducer from "../reducer/gameReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import countriesReducer from "../reducer/countriesReducer";
import tokenReducer from "../reducer/tokenReducer";
import countryReducer from "../reducer/countryReducer";
import emailReducer from "../reducer/emailReducer";
import myProfileReducer from "../reducer/myProfileReducer";
import filteredGamesReducer from "../reducer/filteredGamesReducer";
import singleGameReducer from "../reducer/singleGameReducer";
import reviewsReducer from "../reducer/reviewsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  games: gameReducer,
  countries: countriesReducer,
  token: tokenReducer,
  email: emailReducer,
  country: countryReducer,
  myProfile: myProfileReducer,
  filteredGames: filteredGamesReducer,
  game: singleGameReducer,
  reviews: reviewsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
