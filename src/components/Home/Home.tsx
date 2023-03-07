import { useState } from "react";
import { useGetSearchedCollectionQuery } from "../../services/collectionApi";
import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import s from "../Home/Home.module.scss";

export const Home = () => {
  const [queryToSearch, setQueryToSearch] = useState("");

  const { data, error, isLoading } =
    useGetSearchedCollectionQuery(queryToSearch);

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
      {data && data.total > 0 && <Cards ids={data.objectIDs.slice(0, 10)} />}
    </div>
  );
};
