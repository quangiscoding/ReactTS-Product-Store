import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectProducts = (state: RootState) => state.products;

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0),
);

export const selectSubtotal = createSelector(
  [selectCartItems, selectProducts],
  (cartItems, products) =>
    Object.values(cartItems).reduce((acc, item) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) return acc;

      return acc + product.price * item.quantity;
    }, 0),
);
