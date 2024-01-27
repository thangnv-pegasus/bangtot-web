import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import searchModalSlice from "./slices/search-modal-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    searchModal: searchModalSlice,
    cart: cartSlice
  },
});

export default store;
