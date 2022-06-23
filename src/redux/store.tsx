import { configureStore } from "@reduxjs/toolkit";
import { reducer, signReducer } from "./reducer";

const store = configureStore({ reducer });

export { store };
