import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import cheat from "./slices/cheatSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    cheat,
  },
});
