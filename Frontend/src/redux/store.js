import { configureStore } from "@reduxjs/toolkit";
import activeNavigationSlice from "./slices/activeNavigation";

export const store = configureStore({
  reducer: {
    activeNavigation: activeNavigationSlice,
  },
});
