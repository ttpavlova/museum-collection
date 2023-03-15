import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addHistory } from "../../redux/usersSlice";
import s from "../SearchBar/SearchBarMini.module.scss";

export const SearchBarMini = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = inputRef.current?.value;
    const url = `/search?q=${query}`;

    if (query !== "") {
      dispatch(addHistory(url));
    }

    navigate(url);
  }

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        defaultValue={""}
        className={s.search__input}
        placeholder="Search"
      ></input>
      <button className={"btn btn-primary " + s.btn}>Go</button>
    </form>
  );
};
