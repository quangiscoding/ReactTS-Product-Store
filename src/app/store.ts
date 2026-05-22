import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.ts";
import productReducer from "../features/product/productSlice.ts";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
});

export type RootState = ReturnType<typeof store.getState>;
