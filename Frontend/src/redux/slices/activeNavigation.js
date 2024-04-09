import { createSlice } from "@reduxjs/toolkit";

export const activeNavigationSlice = createSlice({
  name: "activeNavigation",
  initialState: {
    value: "home",
  },
  reducers: {
    updateNavigation: (state, action) => {
      if (action.payload === state.value) {
        return;
      }
      state.value = action.payload;
    },
  },
});

export const { updateNavigation } = activeNavigationSlice.actions;
export default activeNavigationSlice.reducer;
