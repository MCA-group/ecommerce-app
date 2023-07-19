export const initialState = {
  isLoggedIn: false,
  userDetails: {},
};

export const authReducer = (result, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return { ...result, isLoggedIn: true };

    case "SET_USER_DETAILS":
      return { ...result, userDetails: action.payload };

    case "LOGOUT_USER":
      return { ...result, userDetails: {}, isLoggedIn: false };

    default:
      return result;
  }
};
