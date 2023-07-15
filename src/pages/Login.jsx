import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 w-[23rem]">
        <h2 className="uppercase text-2xl text-blue-700 font-bold my-3 py-5 border-b-4 border-blue-700 w-fit-content">
          LOGIN
        </h2>
        <form className="flex flex-col py-5">
          <input
            className="bg-slate-50 p-3 text-lg w-full my-1"
            type="text"
            placeholder="Email"
            value={emailEntered}
            onChange={(e) => setEmailEntered(e.target.value)}
          />
          <input
            className="bg-slate-50 p-3 text-lg w-full my-1"
            type="password"
            placeholder="Password"
            value={passwordEntered}
            onChange={(e) => setPasswordEntered(e.target.value)}
          />
          <button className="my-5 bg-blue-700 hover:bg-blue-500 text-white p-3 rounded-xl w-full">
            SIGN IN
          </button>
        </form>
        <p>
          <NavLink
            to="/signup"
            className="text-sm uppercase hover:underline hover:text-blue-700 tracking-wider"
          >
            New to shopify? Create an account
          </NavLink>
        </p>
        <p className="my-5">
          <NavLink
            to="/"
            className="text-sm uppercase hover:underline hover:text-blue-700 tracking-wider"
          >
            Return to Store
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
