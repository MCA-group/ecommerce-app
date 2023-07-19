function ProductCard({ product }) {
  const { id, imageUrl, title, price, discountedPrice } = product;

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
      </div>
    </div>
  );
}

export default ProductCard;
