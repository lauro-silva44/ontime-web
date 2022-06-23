import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "click",
  initialState: {
    open: false,
    driverId: "",
  },
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.driverId = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
