import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { getCartItems } from "../services/cart";
import CartItemCard from "../components/CartItemCard";

function Cart() {
  const { cart, authDispatch } = useAuth();
  useEffect(() => {
    getCartItems(authDispatch);
  }, []);

  const { discounte, totalDiscountedPrice, totalItem, totalPrice, cartItems } =
    cart;
  return (
    <>
      <p className="my-3 py-5">
        <span className="uppercase text-2xl text-blue-700 font-bold  border-b-4 border-blue-700 w-fit-content">
          CART
        </span>
      </p>
      <div className="flex justify-center flex-wrap">
        <div className="w-[40rem]">
          {cartItems?.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cartItems?.map((item) => (
                <CartItemCard itemDetails={item} key={item.id} />
              ))}
            </>
          )}
        </div>
        <div className="w-[22rem] ">
          <div className=" border my-6 mx-3 py-3 px-5 flex flex-col shadow-md">
            <p className="font-bold text-lg border-b my-3">PRICE DETAILS</p>
            <p className="flex justify-between items-center py-1">
              <span className="font-medium">Price ({totalItem} items)</span>
              <span>₹ {totalPrice}</span>
            </p>
            <p className="flex justify-between items-center py-1">
              <span className="font-medium">Discount</span>
              <span>₹ {discounte}</span>
            </p>
            <p className="flex justify-between items-center py-1">
              <span className="font-medium">Delivery Charge</span>
              <span>FREE</span>
            </p>
            <p className="flex justify-between items-center py-3 border-y my-3">
              <span className="font-bold capitalize">Total Amount</span>
              <span className="font-bold">₹ {totalDiscountedPrice}</span>
            </p>
            <button className="text-white hover:bg-blue-400 bg-blue-700 p-3 rounded-lg mb-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
