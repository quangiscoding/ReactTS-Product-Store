import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice.ts";
import cartReducer from "../features/cart/cartSlice.ts";
import productReducer from "../features/product/productSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
});

export type RootState = ReturnType<typeof store.getState>;
