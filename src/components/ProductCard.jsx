import { useAuth } from "../contexts/Auth";
import { addToCart } from "../services/cart";

function ProductCard({ product }) {
  const { id, imageUrl, title, price, discountedPrice } = product;

  const { authDispatch } = useAuth();

  function addToCartHandler() {
    addToCart(
      {
        productId: id,
        size: "S",
      },
      authDispatch
    );
  }
  return (
    <div key={id} className="shadow hover:shadow-lg text-left m-3 ">
      <img
        src={imageUrl}
        alt={`${title}`}
        className="h-[25rem] w-[20rem] object-cover"
      />
      <div className="py-3 px-3">
        <p>{title}</p>
        <p className="flex items-center py-1">
          <span className="font-semibold text-lg ">{discountedPrice}</span>
          <span className="line-through text-gray-600 text-lg px-3">
            {price}
          </span>
          <span className="text-green-600">
            {Math.round((discountedPrice / price) * 100)}%
          </span>
        </p>
        <button
          className="text-white hover:bg-blue-400 bg-blue-700 p-3 rounded-lg mb-3"
          onClick={addToCartHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
