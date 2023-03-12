import { Navigate, Outlet } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

export const ProtectedRoutes = () => {
  const authUser = useAuthUser();

  return authUser ? <Outlet /> : <Navigate to="/signin" />;
};
