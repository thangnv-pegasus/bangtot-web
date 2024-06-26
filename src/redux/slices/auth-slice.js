import { createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/config";

let init = {
  isLogin: false,
  isAdmin: false
  // token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      return action.payload;
    },

    SET_REMOVE_USER: (state, action) => {
      return {
        user: {},
        isLogin: false,
        // token: "",
      };
    },
  },
});

export default authSlice.reducer;

export const { SET_ACTIVE_USER, SET_REMOVE_USER } = authSlice.actions;
