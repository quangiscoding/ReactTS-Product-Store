import { useSelector } from "react-redux";
import ProductCard from "./ProductCard.tsx";
import { selectFilteredProducts } from "../../features/product/productSelector.ts";

const ProductList = () => {
  const products = useSelector(selectFilteredProducts);
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
