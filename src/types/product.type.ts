export type Category = "phone" | "laptop" | "tablet" | "headphones" | "watch";
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
}
