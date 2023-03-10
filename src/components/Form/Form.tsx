import { useState } from "react";
import s from "../Form/Form.module.scss";

interface FormProps {
  name: string;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    login: string,
    password: string
  ) => void;
}

export const Form = ({ name, handleSubmit }: FormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeLogin(e: React.FormEvent<HTMLInputElement>) {
    setLogin(e.currentTarget.value);
  }

  function handleChangePassword(e: React.FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  return (
    <form
      name={name}
      onSubmit={(e) => handleSubmit(e, login, password)}
      className={s.form}
    >
      <input
        type="text"
        value={login}
        onChange={handleChangeLogin}
        className={s.input}
        placeholder="Login"
        required
      ></input>
      <input
        type="password"
        value={password}
        onChange={handleChangePassword}
        className={s.input}
        placeholder="Password"
        required
      />
      <button className={"btn btn-primary " + s.btn}>{name}</button>
    </form>
  );
};
