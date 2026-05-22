import type { Product } from "../../types/product.type.ts";

const categories = [
  "phone",
  "laptop",
  "tablet",
  "headphones",
  "watch",
] as const;

const brands = {
  phone: ["Apple", "Samsung", "Xiaomi", "OnePlus"],
  laptop: ["Dell", "HP", "Lenovo", "Asus", "Apple"],
  tablet: ["Apple", "Samsung", "Huawei"],
  headphones: ["Sony", "Bose", "JBL", "Anker"],
  watch: ["Apple", "Samsung", "Garmin", "Fitbit"],
} as const;

const models = ["Pro", "Air", "Max", "Lite", "Ultra", "Plus"];

const getCategory = (i: number) => categories[i % categories.length];
const getModel = (i: number) => models[i % models.length];

export const products: Product[] = Array.from({ length: 2000 }, (_, i) => {
  const category = getCategory(i);
  const brandList = brands[category];
  const brand = brandList[i % brandList.length];
  const model = getModel(i);

  return {
    id: i + 1,
    name: `${brand} ${category.toUpperCase()} ${model} ${i + 1}`,
    price: 200 + (i % 20) * 25,
    category,
    image: `https://picsum.photos/300/200?random=${i + 1}`,
    description: `${brand} ${model} ${category} with premium build quality.`,
  };
});
