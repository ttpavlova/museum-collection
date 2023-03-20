import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";
import { useAppDispatch } from "../../redux/hooks";
import { addHistory } from "../../redux/usersSlice";
import s from "../SearchBar/SearchBar.module.scss";

interface SearchBarProps {
  queryParam: string;
}

export const SearchBar = ({ queryParam }: SearchBarProps) => {
  const [query, setQuery] = useState(queryParam);
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce(query, 1500);

  useEffect(() => {
    const url = `/search?q=${debouncedValue}`;

    if (debouncedValue !== "") {
      dispatch(addHistory(url));
    }

    let params = serializeFormQuery(debouncedValue);
    setSearchParams(params);
  }, [debouncedValue, dispatch, setSearchParams]);

  function serializeFormQuery(query: string) {
    return {
      q: query,
    };
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    </form>
  );
};

SearchBar.propTypes = {
  queryParam: PropTypes.string,
};
