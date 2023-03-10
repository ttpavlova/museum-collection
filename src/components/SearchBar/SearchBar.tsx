import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import s from "../SearchBar/SearchBar.module.scss";

interface SearchBarProps {
  queryParam: string;
}

export const SearchBar = ({ queryParam }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${inputRef.current?.value}`);
  }

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        defaultValue={queryParam}
        className={s.search__input}
        placeholder="Search"
      ></input>
      <button className={"btn btn-primary " + s.btn}>Search</button>
    </form>
  );
};
