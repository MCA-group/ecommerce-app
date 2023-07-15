import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [firstNameEntered, setFirstNameEntered] = useState("");
  const [lastNameEntered, setLastNameEntered] = useState("");
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="p-5 w-[23rem]">
        <h2 className="uppercase text-2xl text-blue-700 font-bold my-3 py-5 border-b-4 border-blue-700 w-fit-content">
          Create Account
        </h2>
        <form className="flex flex-col py-5">
          <input
            className="bg-slate-50 p-3 text-lg w-full my-1"
            type="text"
            placeholder="Firstname"
            value={firstNameEntered}
            onChange={(e) => setFirstNameEntered(e.target.value)}
          />
          <input
            className="bg-slate-50 p-3 text-lg w-full my-1"
            type="text"
            placeholder="Lastname"
            value={lastNameEntered}
            onChange={(e) => setLastNameEntered(e.target.value)}
          />
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
            SIGN UP
          </button>
        </form>
        <p>
          <NavLink
            to="/login"
            className="text-sm uppercase hover:underline hover:text-blue-700 tracking-wider"
          >
            Already have an Account ? LEt's Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
