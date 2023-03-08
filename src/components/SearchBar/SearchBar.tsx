import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "../SearchBar/SearchBar.module.scss";

interface SearchBarProps {
  queryParam: string;
}

export const SearchBar = ({ queryParam }: SearchBarProps) => {
  const [query, setQuery] = useState(queryParam);

  const navigate = useNavigate();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  }

  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className={s.search__input}
        placeholder="Search"
      ></input>
      <button className={"btn btn-primary " + s.btn}>Search</button>
    </form>
  );
};
