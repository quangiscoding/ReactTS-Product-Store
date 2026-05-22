import type { CartItem } from "../../features/cart/cartItem.type.ts";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";
import {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
} from "../../features/cart/cartSlice.ts";

interface CartItemProps {
  item: CartItem;
}

const CartItemEl = ({ item }: CartItemProps) => {
  const { productId, quantity } = item;

  const product = useSelector((state: RootState) => {
    return state.products.find((product) => product.id === productId);
  });
  if (!product) return null;

  const dispatch = useDispatch();

  const { name, price, description, image } = product;
  return (
    <li className="h-40 border-[0.5px] border-gray-200">
      <div className="h-full flex">
        <div className="h-full max-w-[20%] flex">
          <img src={image} alt={name} className="object-cover object-center" />
        </div>
        {/* Content */}
        <div className="px-4 py-2 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-md italic text-gray-700">{description}</p>
          <span className="text-blue-400 text-xl font-bold">${price}</span>
        </div>
        {/* Buttons */}
        <div className="ml-auto mr-4 flex flex-col items-center justify-center gap-4">
          {/* Increase - Decrease */}
          <div className="flex items-center rounded-xl shadow-sm overflow-hidden">
            <button
              className="px-3 py-2 text-lg font-bold cursor-pointer hover:bg-gray-100 active:bg-white transition"
              onClick={() => {
                dispatch(decreaseQuantity(productId));
              }}
            >
              -
            </button>
            <span className="px-3 py-2">{quantity}</span>
            <button
              className="px-3 py-2 text-lg font-bold cursor-pointer hover:bg-gray-100 active:bg-white transition"
              onClick={() => {
                dispatch(increaseQuantity(productId));
              }}
            >
              +
            </button>
          </div>
          {/* Remove */}
          <button
            className="btn-danger w-full px-4 py-2 rounded-xl shadow-sm text-sm"
            onClick={() => {
              dispatch(removeProduct(productId));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItemEl;
