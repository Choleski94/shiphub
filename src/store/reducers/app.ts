import * as actionTypes from "../types";

export interface IAppState {
  token: string;
  theme: string;
  loading: boolean;
  timezone: string;
  timeformat: string;
  locale: {
    lang: string;
    country: string;
  }
}

export const appState: IAppState = {
  token: "",
  theme: "light",
  loading: false,
  timezone: "America/Toronto",
  timeformat: "YYYY-MM-DD HH:mm",
  locale: {
    lang: "en",
    country: "US",
  },
};

const appReducer = (state: IAppState = appState, action) => {
  switch (action.type) {
    case actionTypes.APP_RESET:
      return appState;
    case actionTypes.APP_SET:
    case actionTypes.APP_LOADING:
      return { ...state, ...action.app };
    // settings
    case actionTypes.LOCALE_SET:
      return {
        ...state,
        locale: {
          lang: action.lang,
          country: action.country,
        },
      };
    case actionTypes.TIMEZONE_SET:
      return {
        ...state,
        timezone: action.timezone,
      };
    case actionTypes.TIMEFORMAT_SET:
      return {
        ...state,
        timeformat: action.timeformat,
      };
    case actionTypes.SETTING_SET:
      return {
        ...state,
        // locale: {
        // 	lang: action.lang,
        // 	country: action.country,
        // },
        timezone: action.timezone,
        timeformat: action.timeformat,
      };
    default:
      return state;
  }
};

export default appReducer;
