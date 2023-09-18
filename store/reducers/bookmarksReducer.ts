import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BookmarksState {
  ids: string[];
}

const initialState: BookmarksState = {
  ids: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const existingId = state.ids.find((id) => id === action.payload);

      if (existingId) {
        state.ids.splice(state.ids.indexOf(existingId), 1);
      } else {
        state.ids.push(action.payload);
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
