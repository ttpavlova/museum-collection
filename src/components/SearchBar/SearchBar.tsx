import s from "../SearchBar/SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={s.search}>
      <input
        type="text"
        className={s.search__input}
        placeholder="Search"
      ></input>
    </div>
  );
};
