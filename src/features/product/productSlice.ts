import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../mock/product.ts";
import type { Product } from "../../types/product.type.ts";

const initialState: Product[] = products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
