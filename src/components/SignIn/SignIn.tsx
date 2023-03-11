import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { signIn } from "../../redux/usersSlice";
import { Form } from "../Form/Form";
import s from "../SignIn/SignIn.module.scss";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const signInUser = (login: string, password: string) => {
    dispatch(signIn({ login, password }));
  };

  return (
    <div className={s.container}>
      <Form name="Sign In" handleStorage={signInUser} />
      <p className={s.text}>Don't have an account yet?</p>
      <Link to="/signup" className={s.link}>
        Sign Up
      </Link>
    </div>
  );
};
