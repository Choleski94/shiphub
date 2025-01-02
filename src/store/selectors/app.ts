import { createSelector } from "reselect";

const appSelect = (state) => state.app;

export const selectApp = createSelector([appSelect], (app) => app);

export const selectToken = createSelector([appSelect], (app) => app.token);


export const selectTimeSettings = createSelector(
  [appSelect],
  (settings) => ({
    timezone: settings?.timezone,
    timeformat: settings?.timeformat,
  }),
);

export const selectCurrentSettings = createSelector(
  [appSelect],
  (settings) => settings,
);

export const selectLocaleSettings = createSelector(
  [selectCurrentSettings],
  (settings) => settings.locale,
);
