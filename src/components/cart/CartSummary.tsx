import type { RootState } from "../../app/store.ts";
import { clearCart } from "../../features/cart/cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const products = useSelector((state: RootState) => state.products);
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const subtotal = Object.values(cartItems).reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId);

    if (!product) return acc;

    return acc + product.price * item.quantity;
  }, 0);

  const dispatch = useDispatch();
  return (
    <div className="h-fit rounded-2xl border  p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total products</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <hr className="border-gray-500" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${subtotal}</span>
        </div>
      </div>
      <button
        className="btn-danger mt-3 w-full rounded-xl border py-3 font-semibold"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartSummary;
