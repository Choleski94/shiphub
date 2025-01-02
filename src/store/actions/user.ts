
import { appSet, appReset } from './app';
import * as actionTypes from './../types';

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

export const logInUser = (user) => (dispatch) => {
  dispatch(userLoggedIn({
    id: user?.id,
    email: user?.email,
    phone: user?.phone,
    lastName: user?.lastName,
    firstName: user?.firstName,
    workspaces: user?.workspaces,
    isActivated: user?.isActivated,
    isOnboarded: user?.isOnboarded,
  }));

  dispatch(appSet({
    token: user.token,
  }));
};

export const logOutUser = () => (dispatch) => {
  dispatch(userLoggedOut());
  dispatch(appReset());
};