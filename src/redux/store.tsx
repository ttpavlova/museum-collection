import { configureStore } from "@reduxjs/toolkit";
import { collectionApi } from "../services/collectionApi";

export const store = configureStore({
  reducer: {
    [collectionApi.reducerPath]: collectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(collectionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
