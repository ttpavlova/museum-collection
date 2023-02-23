import s from "../Header/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.container}>
      <a href="/" className={s.logo}>
        Museum Collection
      </a>
      <div className="sign-in_buttons">
        <button className={s.btn}>Вход</button>
        <button className={s.btn}>Регистрация</button>
      </div>
    </div>
  );
};
