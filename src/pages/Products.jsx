/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/Product";
import { useAuth } from "../contexts/Auth";

function ProductsList() {
  const { allProducts, authDispatch } = useAuth();

  const [productsList, setProductsList] = useState([]);
  console.log("Prods", allProducts);
  useEffect(() => {
    getAllProducts(authDispatch);
  }, []);

  useEffect(() => {
    setProductsList(allProducts);
  }, [allProducts]);
  return (
    <div>
      <p className="my-3 py-5">
        <span className="uppercase text-2xl text-blue-700 font-bold  border-b-4 border-blue-700 w-fit-content">
          Products
        </span>
      </p>
      <div className="flex justify-center flex-wrap flex-col md:flex-row">
        {productsList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
