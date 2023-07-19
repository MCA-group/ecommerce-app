import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/Auth";

export const RequiresAuth = ({ children }) => {
  const { loggedInStatus } = useAuth();

  const location = useLocation();

  return loggedInStatus ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
