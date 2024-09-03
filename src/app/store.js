import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartItems";

export const store = configureStore({
  reducer: {
    cartItems: cartSlice,
  },
});
