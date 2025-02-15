import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore, // Ensure it's used if needed
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
    getItem: async () => null, // Removed `_key`
    setItem: async (_key: string, value: unknown) => value, // Changed `any` to `unknown`
    removeItem: async () => {}, // Removed `_key`
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

export const store = makeStore();
export const persistor = persistStore(store); // Ensure `persistStore` is used

// Store Type Inference
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
