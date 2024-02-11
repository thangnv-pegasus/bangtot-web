import { createSlice } from "@reduxjs/toolkit";

const init = {
  name: "",
  message: "",
};

const ToastSlice = createSlice({
  initialState: init,
  name: "toast",
  reducers: {
    ACTIVE_TOAST_SUCCESS: (state, action) => {
      return {
        name: "success",
        message: action.payload,
      };
    },
    ACTIVE_TOAST_WARNING: (state, action) => {
      return {
        name: "warning",
        message: action.payload,
      };
    },
    ACTIVE_TOAST_ERROR: (state, action) => {
      return {
        name: "error",
        message: action.payload,
      };
    },
    CLOSE_TOAST: (state, action) => {
        return {
            name: '',
            message: ''
        }
    }
  },
});

export default ToastSlice.reducer;

export const {ACTIVE_TOAST_ERROR, ACTIVE_TOAST_SUCCESS, ACTIVE_TOAST_WARNING, CLOSE_TOAST} = ToastSlice.actions