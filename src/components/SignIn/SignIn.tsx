import { Link } from "react-router-dom";
import { Form } from "../Form/Form";
import s from "../SignIn/SignIn.module.scss";

export const SignIn = () => {
  return (
    <div className={s.container}>
      <Form name="Sign In" />
      <p className={s.text}>Don't have an account yet?</p>
      <Link to="/signup" className={s.link}>
        Sign Up
      </Link>
    </div>
  );
};
