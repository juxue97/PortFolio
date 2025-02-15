import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import globalReducer from "./state";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem: async (_key: string) => null,
    setItem: async (_key: string, value: any) => value,
    removeItem: async (_key: string) => {},
  };
};

// Select storage based on environment (No-op storage for SSR)
const storage =
  typeof window === "undefined"
    ? createNoopStorage()
    : createWebStorage("local");

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global"], // Only persist the "global" state
};

// Root Reducer
const rootReducer = combineReducers({
  global: globalReducer,
  // Add more reducers if needed
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store Factory Function
export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

// Store Type Inference
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
