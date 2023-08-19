import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import ProductsList from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import UserProfile from "./pages/UserProfile";
import { RequiresAuth } from "./utils/RequiresAuth";
import CreateProduct from "./seller/Pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route
          path="/seller/createProduct"
          element={
            <RequiresAuth>
              <CreateProduct />
            </RequiresAuth>
          }
        />
      </Routes>
      {/* <NavLink className="text-red-700 bg-pink-300" to="/login">
        Login
      </NavLink> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        type="success"
      />
      <Footer />
    </div>
  );
}

export default App;
