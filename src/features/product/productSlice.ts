import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../mock/data/product.data.ts";
import type { Product } from "../../types/product.type.ts";

const initialState: Product[] = products;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
