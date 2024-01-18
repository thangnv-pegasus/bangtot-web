import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
});

export default store;
