import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: false,
  productId: null,
  open: false,
};

const confirmSlice = createSlice({
  initialState: initState,
  name: "confirm",
  reducers: {
    SET_ACTIVE_CONFIRM: (state, action) => {
      return {
        status: true,
        productId: action.payload.productId,
        open: false,
      };
    },
    SET_OPEN_MODAL: (state, action) => {
      return {
        status: false,
        productId: null,
        open: true,
      };
    },
    SET_INACTIVE_CONFIRM: (state, action) => {
      return {
        status: false,
        productId: null,
        open: false,
      };
    },
  },
});

export const { SET_ACTIVE_CONFIRM, SET_INACTIVE_CONFIRM, SET_OPEN_MODAL } =
  confirmSlice.actions;
export default confirmSlice.reducer;
