import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/usersSlice";
import { signIn } from "../../redux/usersSlice";
import s from "../Form/Form.module.scss";

interface FormProps {
  name: string;
}

export const Form = ({ name }: FormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  function handleChangeLogin(e: React.FormEvent<HTMLInputElement>) {
    setLogin(e.currentTarget.value);
  }

  function handleChangePassword(e: React.FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    switch (name) {
      case "Sign In":
        dispatch(signIn({ login, password }));
        break;
      case "Sign Up":
        dispatch(addUser({ login, password }));
        break;
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
      <button className={"btn btn-primary " + s.btn}>{name}</button>
    </form>
  );
};
