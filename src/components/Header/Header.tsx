import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/usersSlice";
import { ThemeContext } from "../../ThemeProvider";
import s from "../Header/Header.module.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const authUser = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    const login = authUser?.login;

    if (login) {
      dispatch(logOut({ login }));
    }
  };

  return (
    <div className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.logo}>
          Museum Collection
        </Link>
        <div className="nav_buttons">
          <button onClick={toggleTheme} className={"btn " + s.btn}>
            {theme === "light" ? "beige" : "light"} theme
          </button>

          {!authUser && (
            <>
              <Link to="/signin" className={"btn btn-primary " + s.btn}>
                Sign In
              </Link>
              <Link to="/signup" className={"btn " + s.btn}>
                Sign Up
              </Link>
            </>
          )}
          {authUser && (
            <>
              <Link to="/favourites" className={"btn btn-primary " + s.btn}>
                Favourites
              </Link>
              <Link to="/history" className={"btn btn-primary " + s.btn}>
                History
              </Link>
              <button onClick={handleLogOut} className={"btn " + s.btn}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
