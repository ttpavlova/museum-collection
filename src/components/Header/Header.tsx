import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/usersSlice";
import s from "../Header/Header.module.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const authUser = useAuth();

  const handleLogOut = () => {
    const login = authUser?.login;

    if (login) {
      dispatch(logOut({ login }));
    }
  };

  return (
    <div className={s.container}>
      <Link to="/" className={s.logo}>
        Museum Collection
      </Link>
      {!authUser && (
        <div className="sign-in_buttons">
          <Link to="/signin" className={"btn btn-primary " + s.btn}>
            Sign In
          </Link>
          <Link to="/signup" className={"btn " + s.btn}>
            Sign Up
          </Link>
        </div>
      )}
      {authUser && (
        <div className="nav_buttons">
          <Link to="/favourites" className={"btn btn-primary " + s.btn}>
            Favourites
          </Link>
          <Link to="/history" className={"btn btn-primary " + s.btn}>
            History
          </Link>
          <button onClick={handleLogOut} className={"btn " + s.btn}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
