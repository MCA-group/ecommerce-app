import { useState } from "react";
import { addProduct } from "../../services/Product";
import { useAuth } from "../../contexts/Auth";

function CreateProduct() {
  const { authDispatch } = useAuth();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [description, setDescription] = useState("");
  const [size1, setSize1] = useState("");
  const [size1Quantity, setSize1Quantity] = useState(0);
  const [size2, setSize2] = useState("");
  const [size2Quantity, setSize2Quantity] = useState(0);
  const [size3, setSize3] = useState("");
  const [size3Quantity, setSize3Quantity] = useState(0);
  const [firstLevelCategory, setFirstLevelCategory] = useState("Men");
  const [secondLevelCategory, setSecondLevelCategory] = useState("Clothing");
  const [thirdLevelCategory, setThirdLevelCategory] = useState("Tops");

  const addProductHandler = (e) => {
    e.preventDefault();
    addProduct(authDispatch, {
      imageUrl: imageUrl,
      brand: brand,
      title,
      color,
      discountedPrice: discountedAmount,
      price: price,
      discountPersent: discountPercent,
      size: [
        {
          name: size1,
          quantity: size1Quantity,
        },
        {
          name: size2,
          quantity: size2Quantity,
        },
        {
          name: size3,
          quantity: size3Quantity,
        },
      ],
      quantity: totalQuantity,
      topLavelCategory: firstLevelCategory,
      secondLavelCategory: secondLevelCategory,
      thirdLavelCategory: thirdLevelCategory,
      description,
    });
  };
  return (
    <div className="flex justify-center items-center">
      <form className="p-5 w-[45rem] shadow-lg my-3">
        <p className="uppercase text-2xl text-blue-700 font-bold my-3 py-5 border-b-4 border-blue-700 w-fit-content">
          Add New Product
        </p>
        <p>
          <input
            type="url"
            placeholder="Enter Image URL"
            className="bg-slate-50 p-3 text-lg w-full my-1"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="text"
            placeholder="Enter brand name"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          />
          <input
            type="text"
            placeholder="Enter product title"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="text"
            placeholder="Enter color"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <input
            type="number"
            placeholder="Enter quantity "
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setTotalQuantity(e.target.value)}
            value={totalQuantity}
          />
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="number"
            placeholder="Price"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="number"
            placeholder="Discounted Price"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setDiscountedAmount(e.target.value)}
            value={discountedAmount}
          />

          <input
            type="number"
            placeholder="Discount percentage"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1 my-1"
            onChange={(e) => setDiscountPercent(e.target.value)}
            value={discountPercent}
          />
        </p>
        <p>
          <select
            onChange={(e) => setFirstLevelCategory(e.target.value)}
            value={firstLevelCategory}
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          <select
            onChange={(e) => setSecondLevelCategory(e.target.value)}
            value={secondLevelCategory}
          >
            <option>Clothing</option>
            <option>Accessories</option>
            <option>Brands</option>
          </select>
          <select
            onChange={(e) => setThirdLevelCategory(e.target.value)}
            value={thirdLevelCategory}
          >
            <option>Tops</option>
            <option>Dresses</option>
            <option>T-Shirts</option>
            <option>Lehenga</option>
          </select>
        </p>
        <p>
          <textarea
            placeholder="Enter description"
            className="bg-slate-50 p-3 text-lg w-full my-1"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="text"
            placeholder="Size Name"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize1(e.target.value)}
            value={size1}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize1Quantity(e.target.value)}
            value={size1Quantity}
          />
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="text"
            placeholder="Size Name"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize2(e.target.value)}
            value={size2}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize2Quantity(e.target.value)}
            value={size2Quantity}
          />
        </p>
        <p className="flex flex-col md:flex-row md:align-center">
          <input
            type="text"
            placeholder="Size Name"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize3(e.target.value)}
            value={size3}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="bg-slate-50 p-3 text-lg w-[85%] mx-1  my-1"
            onChange={(e) => setSize3Quantity(e.target.value)}
            value={size3Quantity}
          />
        </p>
        <button
          className="my-5 bg-blue-700 hover:bg-blue-500 text-white p-3 rounded-xl w-full"
          onClick={(e) => {
            addProductHandler(e);
          }}
        >
          Add new product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
