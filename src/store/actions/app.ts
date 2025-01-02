import * as actionTypes from "../types";

export const appSet = (app) => ({
  type: actionTypes.APP_SET,
  app,
});

export const appReset = () => ({
  type: actionTypes.APP_RESET,
});

export const appLoading = (app) => ({
  type: actionTypes.APP_LOADING,
  app,
});

export const loadingApp = (loading = false) => (dispatch) => dispatch(appLoading({ loading }));

export const localeSet = ({ lang, country }) => ({
  type: actionTypes.LOCALE_SET,
  lang,
  country,
});

export const timezoneSet = (timezone) => ({
  type: actionTypes.TIMEZONE_SET,
  timezone,
});

export const timeformatSet = (timeformat) => ({
  type: actionTypes.TIMEFORMAT_SET,
  timeformat,
});

export const settingSet = (settingObj) => ({
  type: actionTypes.SETTING_SET,
  timeformat: settingObj.timeformat,
  timezone: settingObj.timezone,
  country: settingObj.country,
  lang: settingObj.lang,
});
