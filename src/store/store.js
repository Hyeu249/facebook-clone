import { configureStore } from "@reduxjs/toolkit";
import credentialsSlice from "./credentials/credentialsSlice.js";

const store = configureStore({
  reducer: credentialsSlice,
});

export default store;
