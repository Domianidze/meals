import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./reducers/bookmarksReducer";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
