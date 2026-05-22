import MainLayout from "../../layouts/MainLayout.tsx";
import ProductList from "../../components/products/ProductList.tsx";

const Home = () => {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};

export default Home;
