import { useAppSelector } from "../redux/hooks";
import { selectAuthUser } from "../redux/usersSlice";

export const useAuthUser = () => {
  const authUser = useAppSelector(selectAuthUser);

  if (authUser) {
    return authUser;
  }
};
