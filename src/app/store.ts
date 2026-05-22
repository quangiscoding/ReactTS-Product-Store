import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice.ts";
import cartReducer from "../features/cart/cartSlice.ts";
import productReducer from "../features/product/productSlice.ts";
import themeReducer from "../features/theme/themeSlice.ts";
import searchReducer from "../features/search/searchSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    theme: themeReducer,
    search: searchReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const theme = state.theme.mode;

  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
  document.documentElement.classList.toggle("dark", theme === "dark");
});

export type RootState = ReturnType<typeof store.getState>;
