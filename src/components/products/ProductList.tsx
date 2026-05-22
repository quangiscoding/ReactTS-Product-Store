import type { Product } from "../../mock/product.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full max-w-360 mx-auto px-4 md:px-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
