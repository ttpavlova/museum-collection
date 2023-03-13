import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
  const authUser = useAuth();

  return authUser ? <Outlet /> : <Navigate to="/signin" />;
};
