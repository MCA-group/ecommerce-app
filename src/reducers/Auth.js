export const initialState = {
  isLoggedIn: false,
  userDetails: {},
  allProducts: [],
};

export const authReducer = (result, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return { ...result, isLoggedIn: true };

    case "SET_USER_DETAILS":
      return { ...result, userDetails: action.payload };

    case "LOGOUT_USER":
      return { ...result, userDetails: {}, isLoggedIn: false };

    case "PRODUCT_LIST":
      return { ...result, allProducts: action.payload };
    default:
      return result;
  }
};
