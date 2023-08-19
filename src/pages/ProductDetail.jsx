function ProductDetail() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://picsum.photos/300"
          alt="product"
          className="h-[50vh] w-[20rem] object-cover mx-4"
        />
        <div className="mx-2 flex flex-col items-start">
          <p className="font-semibold text-lg py-2 my-2">
            Men solid Pure cotton Kurta
          </p>
          <p className="text-gray-600">Size: M, White</p>
          <p className="text-gray-600">Seller: SPOQUE</p>
          <p className="my-2">
            <span className="line-through px-1">₹ 1499</span>
            <span className="px-1 font-medium">₹ 362</span>
            <span className="text-green-600 px-1">75%</span>
          </p>
          <div className="text-left">
            <p className="my-2 py-3">Size</p>
            <p>
              <span className="py-3 px-2 mx-1 border">S</span>
              <span className="py-3 px-2 mx-1 border">M</span>
              <span className="py-3 px-2 mx-1 border">L</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
