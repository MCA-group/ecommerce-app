function OrderSuccessful() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="../../assests/successOrder.svg"
        height="500"
        width="500"
        alt="Order successful"
        className="py-5"
      />
      <p className="text-2xl text-blue-700 font-semibold">
        Your order has been placed successfully
      </p>
    </div>
  );
}

export default OrderSuccessful;
