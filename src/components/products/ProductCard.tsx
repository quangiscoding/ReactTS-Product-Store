import type { Product } from "../../types/product.type.ts";

import { addProduct } from "../../features/cart/cartSlice.ts";

import { useDispatch } from "react-redux";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, image, description } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct(product.id));
  };

  return (
    <li className="flex flex-col rounded-md overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-2xl font-bold line-clamp-1 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-500 italic line-clamp-2 dark:text-white">
          {description}
        </p>
        <span className="text-xl text-blue-500 dark:text-blue-200 font-bold">
          ${price}
        </span>
        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-secondary">View</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
