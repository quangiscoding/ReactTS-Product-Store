import type { Product } from "../../types/product.type.ts";

export const products: Product[] = Array.from({ length: 50 }, (_, i) => {
  return {
    id: i,
    name: "Phone " + i,
    price: 999,
    category: "phone",
    image: `https://picsum.photos/300/200?random=${i + 1}`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
});
