import * as actionTypes from "../types";

export const userReset = () => ({
  type: actionTypes.USER_RESET,
});

export const userLoggedIn = (user) => ({
  type: actionTypes.USER_LOGGED_IN,
  user
});

export const userFetched = (user) => ({
  type: actionTypes.USER_FETCHED,
  user,
});

export const userLoggedOut = () => ({
  type: actionTypes.USER_LOGGED_OUT
});
