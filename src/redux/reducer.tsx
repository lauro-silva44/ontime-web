import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
const reducer = combineReducers({ modal: modalSlice });

export { reducer };
