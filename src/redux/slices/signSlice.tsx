import { createSlice } from "@reduxjs/toolkit";

const signSlice = createSlice({
  name: "signIn",
  initialState: {
    display: false,
  },
  reducers: {
    displayModal: (state) => {
      state.display = true;
    },
    closeModal: (state) => {
      state.display = false;
    },
  },
});

export const { displayModal, closeModal } = signSlice.actions;
export default signSlice.reducer;
