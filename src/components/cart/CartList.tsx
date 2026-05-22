import { useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import CartItemEl from "./CartItem.tsx";

const CartList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <ul className="flex flex-col gap-4">
      {Object.entries(cartItems).map(([id, item]) => (
        <CartItemEl key={id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
