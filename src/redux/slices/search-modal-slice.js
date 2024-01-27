import { createSlice } from "@reduxjs/toolkit";

const defaultStatus = {
  value: false,
};
const searchModal = createSlice({
  initialState: defaultStatus,
  name: "searchModal",
  reducers: {
    OPEN_SEARCH: (state, action) => {
      state.value = true;
    },
    CLOSE_SEARCH: (state, action) => {
      state.value = false;
    },
  },
});

export default searchModal.reducer;

export const { OPEN_SEARCH, CLOSE_SEARCH } = searchModal.actions;
