import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetSearchedCollectionQuery } from "../../services/collectionApi";
import { SearchBar } from "../SearchBar/SearchBar";
import s from "../Home/Home.module.scss";
import { Spinner } from "../Spinner/Spinner";

const Cards = lazy(() =>
  import("../Cards/Cards").then(({ Cards }) => ({
    default: Cards,
  }))
);

export const Home = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const { data, error } = useGetSearchedCollectionQuery(queryParam);

  if (error)
    return (
      <div className={s.message}>Something went wrong. Try again later</div>
    );

  if (data && data.total === 0)
    return (
      <div className={s.message}>
        There are no results found. Please try another search.
      </div>
    );

  return (
    <div className={s.container}>
      <SearchBar queryParam={queryParam} />
      <Suspense fallback={<Spinner />}>
        {data && <Cards ids={data.objectIDs.slice(0, 10)} />}
      </Suspense>
    </div>
  );
};
