import { createSlice } from "@reduxjs/toolkit";

export const ideosDataSlice = createSlice({
  name: "ideosData",
  initialState: {
    value: [],
  },
  reducers: {
    addIdeosData: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    updateIdeosData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addIdeosData, updateIdeosData } = ideosDataSlice.actions;
export default ideosDataSlice.reducer;
