import * as actionTypes from "../types";

export interface IUserState {
  id: string;
  email: string;
  phone: string;
  lastName: string;
  firstName: string;
  workspaces: any[];
  isActivated: boolean;
  isOnboarded: boolean;
}

export const userState: IUserState = {
  id: "",
  email: "",
  phone: "",
  lastName: "",
  firstName: "",
  workspaces: [],
  isActivated: true,
  isOnboarded: true,
};

const userReducer = (state: IUserState = userState, action) => {
  switch (action.type) {
    case actionTypes.USER_RESET:
      return userState;
    case actionTypes.USER_LOGGED_IN:
      return { ...state, ...action.user };
    case actionTypes.USER_LOGGED_OUT:
      return userState;
    case actionTypes.USER_FETCHED:
      return { ...state, ...action.user };
    case actionTypes.FAILED_REQUEST:
      return userState;
    default:
      return state;
  }
};

export default userReducer;
