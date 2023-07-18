import axios from "axios";
import { API_BASE_URL } from "../config/api";

export const login = async (email, password, authDispatch) => {
  console.log(email, password);
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
      email,
      password,
    });
    const user = response.data;
    console.log("login ", user);
    if (user.jwt) {
      localStorage.setItem("token", user.jwt);
      authDispatch({ type: "SET_LOGIN_STATUS" });
    }
  } catch (e) {
    console.log(e);
  }
};

export const signup = async (
  firstName,
  lastName,
  email,
  password,
  authDispatch
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("token", user.jwt);
      authDispatch({ type: "SET_LOGIN_STATUS" });
    }
    console.log("registerr :", user);
  } catch (e) {
    console.log(e);
  }
};
