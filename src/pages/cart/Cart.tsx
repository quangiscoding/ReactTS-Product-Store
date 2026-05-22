import MainLayout from "../../layouts/MainLayout.tsx";

import CartList from "../../components/cart/CartList.tsx";
import CartSummary from "../../components/cart/CartSummary.tsx";
const Cart = () => {
  return (
    <>
      <MainLayout showSearch={false}>
        <div className="max-w-360 w-full">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Items */}
            <div className="col-span-1 lg:col-span-2">
              <CartList />
            </div>
            {/* Checkout */}
            <div className="col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Cart;
