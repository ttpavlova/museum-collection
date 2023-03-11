import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "../Form/Form.module.scss";

interface FormProps {
  name: string;
  handleStorage: (login: string, password: string) => void;
}

export const Form = ({ name, handleStorage }: FormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleChangeLogin(e: React.FormEvent<HTMLInputElement>) {
    setLogin(e.currentTarget.value);
  }

  function handleChangePassword(e: React.FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      handleStorage(login, password);
      navigate("/");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    }
  }

  return (
    <form name={name} onSubmit={handleSubmit} className={s.form}>
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
      {errorMessage !== "" && <p className={s.error_message}>{errorMessage}</p>}
      <button className={"btn btn-primary " + s.btn}>{name}</button>
    </form>
  );
};
