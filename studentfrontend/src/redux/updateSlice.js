import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUpdateOpen: false,
};

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    openUpdate: (state) => {
      state.isUpdateOpen = true;
    },
    closeUpdate: (state) => {
      state.isUpdateOpen = false;
    },
  },
});

export const { openUpdate, closeUpdate } = updateSlice.actions;

export default updateSlice.reducer;
