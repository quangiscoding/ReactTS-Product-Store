import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { CartItem } from "./cartItem.type.ts";

interface CartState {
  cartItems: Record<number, CartItem>;
}

let parsed: Record<number, CartItem> = {};
try {
  const saved = localStorage.getItem("cartItems");
  parsed = saved ? JSON.parse(saved) : {};
} catch {
  parsed = {};
}

const initialState: CartState = {
  cartItems: parsed || {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.cartItems[productId];
      if (!existingItem) {
        state.cartItems[productId] = {
          productId,
          quantity: 1,
          userId: 1,
        };
      } else {
        existingItem.quantity += 1;
      }
      // state.cartItems = {};
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      delete state.cartItems[productId];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cartItems[productId].quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.cartItems[productId];
      if (!existingItem) return;
      if (state.cartItems[productId].quantity === 1) {
        delete state.cartItems[productId];
        return;
      }
      state.cartItems[productId].quantity -= 1;
    },
    clearCart: (state) => {
      state.cartItems = {};
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
