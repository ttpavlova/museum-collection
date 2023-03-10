import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { signIn } from "../../redux/usersSlice";
import { Form } from "../Form/Form";
import s from "../SignIn/SignIn.module.scss";

export const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch();

  const signInUser = (login: string, password: string) => {
    try {
      dispatch(signIn({ login, password }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    }
  };

  return (
    <div className={s.container}>
      <Form
        name="Sign In"
        handleStorage={signInUser}
        errorMessage={errorMessage}
      />
      <p className={s.text}>Don't have an account yet?</p>
      <Link to="/signup" className={s.link}>
        Sign Up
      </Link>
    </div>
  );
};
