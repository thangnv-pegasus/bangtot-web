import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import searchModalSlice from "./slices/search-modal-slice";
import cartSlice from "./slices/cart-slice";
import homeSlice from "./slices/home-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    searchModal: searchModalSlice,
    cart: cartSlice,
    home: homeSlice
  },
});

export default store;
