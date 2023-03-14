import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeHistory, selectAuthUser } from "../../redux/usersSlice";
import s from "../History/History.module.scss";

export const History = () => {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(selectAuthUser);
  const historyUrls = authUser?.history;
  const isHistoryEmpty = historyUrls?.length === 0;

  const handleDelete = (url: string) => {
    dispatch(removeHistory(url));
  };

  const historyList = historyUrls?.map((url: string) => (
    <li className={s.item} key={uuid()}>
      <Link to={`${url}`}>{url}</Link>
      <button
        onClick={() => handleDelete(url)}
        className={"btn btn-small " + s.btn}
      >
        Delete
      </button>
    </li>
  ));

  if (isHistoryEmpty) return <div className={s.message}>History is empty.</div>;

  return (
    <div className={s.container}>
      <ul>{historyList}</ul>
    </div>
  );
};
