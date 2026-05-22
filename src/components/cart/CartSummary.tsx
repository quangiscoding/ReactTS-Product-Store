import {
  selectTotalQuantity,
  selectSubtotal,
} from "../../features/cart/cartSelectors.ts";
import { clearCart } from "../../features/cart/cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";

const CartSummary = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const subtotal = useSelector(selectSubtotal);

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
