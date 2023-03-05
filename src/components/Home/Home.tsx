import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSearchedCollectionQuery } from "../../services/collectionApi";
import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import s from "../Home/Home.module.scss";

export const Home = () => {
  const [queryToSearch, setQueryToSearch] = useState("");

  const navigate = useNavigate();

  const { data, error, isLoading } =
    useGetSearchedCollectionQuery(queryToSearch);

  useEffect(() => {
    navigate(`/search?q=${queryToSearch}`);
  }, [navigate, queryToSearch]);

  return (
    <div className={s.container}>
      <SearchBar setQueryToSearch={setQueryToSearch} />
      {error && (
        <div className={s.message}>Something went wrong. Try again later</div>
      )}
      {isLoading && <div className={s.message}>Loading...</div>}
      {data && data.total === 0 && (
        <div className={s.message}>
          There are no results found. Please try another search.
        </div>
      )}
      {data && data.total > 0 && <Cards IDs={data.objectIDs.slice(0, 10)} />}
    </div>
  );
};
