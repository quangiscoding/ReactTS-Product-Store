import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectProducts = (state: RootState) => state.products;
export const selectQuery = (state: RootState) => state.search.query;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectQuery],
  (products, query) =>
    products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
);
