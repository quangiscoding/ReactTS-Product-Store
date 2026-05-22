import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../features/cart/cartSelectors.ts";

const CartButton = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  return (
    <Link className="relative btn btn-secondary" to="/cart">
      <ShoppingCart />
      <div className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full text-xs font-bold bg-red-500 text-white">
        {totalQuantity}
      </div>
    </Link>
  );
};

export default CartButton;
