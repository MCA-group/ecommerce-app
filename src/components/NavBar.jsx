import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { PiDress } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-around items-center border-b">
      <img
        src="../../assests/logo_shopify.png"
        alt="logo"
        height="120"
        width="160"
      />
      <div className="flex">
        <span className="px-3 text-3xl hover:text-blue-400 text-blue-700">
          <NavLink to="/"> {<AiOutlineHome />}</NavLink>
        </span>
        <span className="px-3 text-3xl hover:text-blue-400 text-blue-700">
          <NavLink to="/products">{<PiDress />}</NavLink>
        </span>
        <span className="px-3 text-3xl hover:text-blue-400 text-blue-700">
          <NavLink to="/cart">{<AiOutlineShoppingCart />}</NavLink>
        </span>
        <span className="px-3 text-3xl hover:text-blue-400 text-blue-700">
          <NavLink to="/wishlist">{<AiOutlineHeart />}</NavLink>
        </span>
        <span className="px-3 text-3xl hover:text-blue-400 text-blue-700">
          <NavLink to="/profile">{<AiOutlineUser />}</NavLink>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
