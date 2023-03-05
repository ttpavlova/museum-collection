import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

import s from "../SearchBar/SearchBar.module.scss";

interface SearchBarProps {
  setQueryToSearch: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({ setQueryToSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQueryToSearch(query);
  }

  return (
    <form className={s.search} onClick={handleSubmit}>
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
