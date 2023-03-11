import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/usersSlice";
import { Form } from "../Form/Form";
import s from "../SignIn/SignIn.module.scss";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signInUser = (login: string, password: string) => {
    dispatch(signIn({ login, password }));
    navigate("/");
  };

  return (
    <div className={s.container}>
      <Form name="Sign In" onSubmit={signInUser} />
      <p className={s.text}>Don't have an account yet?</p>
      <Link to="/signup" className={s.link}>
        Sign Up
      </Link>
    </div>
  );
};
