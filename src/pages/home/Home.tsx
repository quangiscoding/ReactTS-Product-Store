import MainLayout from "../../layouts/MainLayout.tsx";
import ProductList from "../../components/products/ProductList.tsx";
import { products } from "../../mock/data/product.data.ts";

const Home = () => {
  return (
    <MainLayout>
      <ProductList products={products} />
    </MainLayout>
  );
};

export default Home;
