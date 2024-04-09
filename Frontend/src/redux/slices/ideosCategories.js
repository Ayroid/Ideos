import { createSlice } from "@reduxjs/toolkit";

export const ideosCategoriesSlice = createSlice({
  name: "ideosCategories",
  initialState: {
    value: [],
  },
  reducers: {
    addIdeosCategory: (state, action) => {
      state.value.push(action.payload);
    },
    removeIdeosCategory: (state, action) => {
      state.value = state.value.filter(
        (category) => category !== action.payload
      );
    },
  },
});

export const { addIdeosCategory, removeIdeosCategory } =
  ideosCategoriesSlice.actions;
export default ideosCategoriesSlice.reducer;
