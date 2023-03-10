import { useSearchParams } from "react-router-dom";
import { useGetSearchedCollectionQuery } from "../../services/collectionApi";
import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import s from "../Home/Home.module.scss";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const { data, error, isLoading } = useGetSearchedCollectionQuery(queryParam);

  return (
    <div className={s.container}>
      <SearchBar queryParam={queryParam} />
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
