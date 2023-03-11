import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { collectionApi } from "../services/collectionApi";
import { checkAuthDataMiddleware } from "./middleware/checkAuthDataMiddleware";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
  [collectionApi.reducerPath]: collectionApi.reducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      collectionApi.middleware,
      checkAuthDataMiddleware,
    ]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
