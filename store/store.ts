import { configureStore } from "@reduxjs/toolkit";
import visitReducer from "./visitSlice";

export const store = configureStore({
  reducer: {
    visit: visitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
