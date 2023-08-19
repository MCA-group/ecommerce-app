import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
function CartItemCard({ itemDetails }) {
  const {
    id,
    discountedPrice,
    price,
    product: { brand, color, imageUrl, title, discountPersent },
    quantity,
    size,
  } = itemDetails;
  return (
    <div className="border p-4 m-3 shadow-md">
      <div className="flex">
        <img
          src={imageUrl}
          alt="Product"
          className="h-[8rem] w-[8rem] object-cover"
        />
        <div className="flex flex-col items-start px-3">
          <p className="font-semibold text-lg py-2">{title}</p>
          <p className="text-gray-600">
            Size: {size}, {color}
          </p>
          <p className="text-gray-600">Seller: {brand}</p>
          <p className="my-2">
            <span className="line-through px-1">₹ {price}</span>
            <span className="px-1 font-medium">₹ {discountedPrice}</span>
            <span className="text-green-600 px-1">{discountPersent}%</span>
          </p>
        </div>
      </div>
      <div className="flex items-center w-20 mt-4">
        <button className="">
          <AiOutlinePlusCircle className="text-2xl text-gray-500 hover:text-gray-700" />
        </button>
        <span className="border mx-3 px-5">{quantity}</span>
        <button className="">
          <AiOutlineMinusCircle className="text-2xl text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
