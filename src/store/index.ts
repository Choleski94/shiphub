import logger from "redux-logger";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appReducer, { appState } from "./reducers/app";
import navReducer, { navState } from "./reducers/nav";
import userReducer, { userState } from "./reducers/user";
import settingsReducer, { settingsState } from "./reducers/settings";
import workspaceReducer, { workspaceState } from "./reducers/workspace";

// Combine all states.
export const preloadedState = {
  app: appState,
  nav: navState,
  user: userState,
  settings: settingsState,
  workspace: workspaceState,
};

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'settings'],
};

// Combine all reducers.
const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  user: userReducer,
  settings: settingsReducer,
  workspace: workspaceReducer,
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	// preloadedState,
	reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger), 
});

export const persistor = persistStore(store);

export default store;
