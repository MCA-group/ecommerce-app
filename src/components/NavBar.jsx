import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { PiDress } from "react-icons/pi";

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
        <span className="px-3 text-2xl hover:text-blue-400 text-blue-700">
          {<AiOutlineHome />}
        </span>
        <span className="px-3 text-2xl hover:text-blue-400 text-blue-700">
          {<PiDress />}
        </span>
        <span className="px-3 text-2xl hover:text-blue-400 text-blue-700">
          {<AiOutlineShoppingCart />}
        </span>
        <span className="px-3 text-2xl hover:text-blue-400 text-blue-700">
          {<AiOutlineHeart />}
        </span>
        <span className="px-3 text-2xl hover:text-blue-400 text-blue-700">
          {<AiOutlineUser />}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
