import { Link } from "react-router-dom";
import s from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.container}>
      <Link to="/" className={s.logo}>
        Museum Collection
      </Link>
      <div className="sign-in_buttons">
        <Link to="/signin" className={s.btn}>
          Вход
        </Link>
        <Link to="/signup" className={s.btn}>
          Регистрация
        </Link>
      </div>
    </div>
  );
};
