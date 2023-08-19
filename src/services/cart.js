import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { notifyError, notifySuccess } from "../utils/Toasters";

export const getCartItems = async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_BASE_URL}/api/cart/`, config);

    dispatch({ type: "GET_CART", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const addToCart = async (itemToAddInCart, dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(
      `${API_BASE_URL}/api/cart/add`,
      itemToAddInCart,
      config
    );

    console.log("res", response);
    if (response.status) {
      notifySuccess("Added Item to cart");
    } else {
      notifyError("Some error occured. Please try again");
    }
    getCartItems(dispatch);
  } catch (e) {
    console.log(e);
  }
};
