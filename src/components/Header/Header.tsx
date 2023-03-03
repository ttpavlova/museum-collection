import { Link } from "react-router-dom";
import s from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.container}>
      <Link to="/" className={s.logo}>
        Museum Collection
      </Link>
      <div className="sign-in_buttons">
        <Link to="/signin" className={"btn " + s.btn}>
          Sign In
        </Link>
        <Link to="/signup" className={"btn " + s.btn}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};
