import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/usersSlice";
import { Form } from "../Form/Form";
import s from "../SignUp/SignUp.module.scss";

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useAppDispatch();

  const signUpUser = (login: string, password: string) => {
    try {
      dispatch(addUser({ login, password }));
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    }
  };

  return (
    <div className={s.container}>
      <Form
        name="Sign Up"
        handleStorage={signUpUser}
        errorMessage={errorMessage}
      />
      <p className={s.text}>Already have an account?</p>
      <Link to="/signin" className={s.link}>
        Sign In
      </Link>
    </div>
  );
};
