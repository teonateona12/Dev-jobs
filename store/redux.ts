import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";

const store = configureStore({
  reducer: {
    inputValue: inputReducer,
  },
});

export default store;
