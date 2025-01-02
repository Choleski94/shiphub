import * as actionTypes from "../types";

export interface IAppState {
  theme: string;
  loading: boolean;
}

export const appState: IAppState = {
  theme: "light",
  loading: false,
};

const appReducer = (state: IAppState = appState, action) => {
  switch (action.type) {
    case actionTypes.APP_RESET:
      return appState;
    case actionTypes.APP_LOADING:
      return { ...state, ...action.app };
    default:
      return state;
  }
};

export default appReducer;
