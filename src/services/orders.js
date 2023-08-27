import axios from "axios";
import { API_BASE_URL } from "../config/api";

export const createOrder = async (address, dispatch) => {
  try {
    // dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await axios.post(
      `${API_BASE_URL}/api/orders/`,
      address,
      config
    );
    // if (data.id) {
    //   reqData.navigate({ search: `step=3&order_id=${data.id}` });
    // }
    console.log("created order - ", response);
    dispatch({
      type: "GET_ORDER_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log("catch error : ", error);
    // dispatch({
    //   type: CREATE_ORDER_FAILURE,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
  }
};

export const createPayment = async (orderId, navigate, dispatch) => {
  console.log("create payment reqData ", orderId);
  try {
    //   dispatch({
    //     type: CREATE_PAYMENT_REQUEST,
    //   });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const { data } = await axios.post(
      `${API_BASE_URL}/api/payments/${orderId}`,
      {},
      config
    );
    console.log("datta", data);
    if (data.payment_link_url) {
      //   navigate(data.payment_link_url);
      window.location.href = data.payment_link_url;
    }
    //   dispatch({
    //     type: CREATE_PAYMENT_SUCCESS,
    //     payload: data,
    //   });
  } catch (error) {
    console.log(error);
    //   dispatch({
    //     type: CREATE_PAYMENT_FAILURE,
    //     payload: error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    //   });
  }
};
