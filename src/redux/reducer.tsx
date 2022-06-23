import { combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import signSlice from "./slices/signSlice";
const reducer = combineReducers({ modal: modalSlice });
const signReducer = combineReducers({ sign: signSlice });

export { reducer, signReducer };
