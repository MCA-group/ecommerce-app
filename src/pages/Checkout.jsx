import { useNavigate } from "react-router";
import { useAuth } from "../contexts/Auth";
import { useEffect } from "react";
import { createOrder, createPayment } from "../services/orders";
import CartItemCard from "../components/CartItemCard";

function Checkout() {
  const { authDispatch, orders } = useAuth();
  const navigate = useNavigate();
  console.log("orders,", orders);
  useEffect(() => {
    createOrder(
      {
        firstName: "vinayak2",
        lastName: "Zarmariya",
        streetAddress: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
        mobile: "555-555-1234",
      },
      authDispatch
    );
  }, []);

  const {
    orderItems,
    shippingAddress,
    // : {
    //   city,
    //   firstName,
    //   lastName,
    //   mobile,
    //   state,
    //   streetAddress,
    //   zipCode,
    // },
    discounte,
    totalDiscountedPrice,
    totalItem,
    totalPrice,
    id,
  } = orders;

  function placeOrderHandler() {
    createPayment(id, navigate, authDispatch);
  }

  return (
    <>
      <p className="my-3 py-5">
        <span className="uppercase text-2xl text-blue-700 font-bold  border-b-4 border-blue-700 w-fit-content">
          CHECKOUT
        </span>
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col items-center border my-6 mx-3 py-3 px-5 shadow-md w-3/5 ">
          <p className="font-lg font-semibold">Address:</p>
          <p className="font-semibold">
            {shippingAddress?.firstName}, {shippingAddress?.lastName}
          </p>
          <p>
            {shippingAddress?.streetAddress}, {shippingAddress?.city},{" "}
            {shippingAddress?.state}, {shippingAddress?.zipCode}
          </p>
          <p>Mobile number: {shippingAddress?.mobile}</p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="w-[40rem]">
          {orderItems?.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {orderItems?.map((item) => (
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
            <button
              className="text-white hover:bg-blue-400 bg-blue-700 p-3 rounded-lg mb-3"
              onClick={() => placeOrderHandler()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
