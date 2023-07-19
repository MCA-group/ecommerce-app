import ProductCard from "../components/ProductCard";

function ProductsList() {
  return (
    <div>
      <p className="my-3 py-5">
        <span className="uppercase text-2xl text-blue-700 font-bold  border-b-4 border-blue-700 w-fit-content">
          Products
        </span>
      </p>
      <div className="flex justify-center">
        <ProductCard
          product={{
            id: "1",
            title: "WOMEN's cloth",
            price: 1200,
            discountedPrice: 1000,
            imageURL: "https://picsum.photos/200/300",
          }}
        />
      </div>
    </div>
  );
}

export default ProductsList;
