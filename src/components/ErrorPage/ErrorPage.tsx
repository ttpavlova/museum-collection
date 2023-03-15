import { Link } from "react-router-dom";
import s from "../ErrorPage/ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={s.container}>
      <p className={s.message}>Something went wrong.</p>
      <Link to="/" className={"btn btn-primary " + s.btn}>
        Back to Homepage
      </Link>
    </div>
  );
};
