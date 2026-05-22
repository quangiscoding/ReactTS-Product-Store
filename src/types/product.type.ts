type Category = "phone" | "laptop" | "headphone" | "screen";
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
  description: string;
}
