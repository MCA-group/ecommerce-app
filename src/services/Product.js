import axios from "axios";
import { API_BASE_URL } from "../config/api";

export const getAllProducts = async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/apis/all/products`);
    //   const user = response;
    console.log("api call ", response);
    dispatch({ type: "PRODUCT_LIST", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const addProduct = async (dispatch, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/apis/seller/creates`, [
      data,
    ]);
    console.log("add product", response.data);
  } catch (e) {
    console.log(e);
  } finally {
    getAllProducts(dispatch);
  }
};
