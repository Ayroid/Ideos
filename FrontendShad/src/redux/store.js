import { configureStore } from "@reduxjs/toolkit";
import activeNavigationSlice from "./slices/activeNavigationSlice";
import ideosDataSlice from "./slices/ideosData";

const store = configureStore({
  reducer: {
    activeNavigation: activeNavigationSlice,
    ideosData: ideosDataSlice,
  },
});

export default store;
