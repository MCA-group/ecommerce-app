import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "../reducers/Auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log(state);
  return (
    <AuthContext.Provider
      value={{
        authDispatch: dispatch,
        loggedInStatus: state?.isLoggedIn,
        userDetails: state?.userDetails,
        allProducts: state?.allProducts,
        cart: state?.userCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
