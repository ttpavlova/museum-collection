import { Link } from "react-router-dom";
import s from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.container}>
      <a href="/" className={s.logo}>
        Museum Collection
      </a>
      <div className="sign-in_buttons">
        <Link className={s.btn} to="/signin">
          Вход
        </Link>
        <Link className={s.btn} to="/signup">
          Регистрация
        </Link>
      </div>
    </div>
  );
};
