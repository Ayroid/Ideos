import { configureStore } from "@reduxjs/toolkit";
import activeNavigationSlice from "./slices/activeNavigation";

const store = configureStore({
  reducer: {
    activeNavigation: activeNavigationSlice,
  },
});

export default store;
