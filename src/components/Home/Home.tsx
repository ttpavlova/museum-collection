import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useGetSearchedCollectionQuery } from "../../services/collectionApi";
import { SearchBar } from "../SearchBar/SearchBar";
import { Spinner } from "../Spinner/Spinner";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import s from "../Home/Home.module.scss";

const Cards = lazy(() =>
  import("../Cards/Cards").then(({ Cards }) => ({
    default: Cards,
  }))
);

export const Home = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const { data, error, isLoading } = useGetSearchedCollectionQuery(queryParam);

  return (
    <div className={s.container}>
      <SearchBar queryParam={queryParam} />
      <Suspense fallback={<Spinner />}>
        <>
          {error && (
            <div className={s.message}>
              Something went wrong. Try again later
            </div>
          )}
          {isLoading && <Spinner />}
          {data && data.total === 0 && (
            <div className={s.message}>
              There are no results found. Please try another search.
            </div>
          )}
          {data && data.total > 0 && (
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Cards ids={data.objectIDs.slice(0, 10)} />
            </ErrorBoundary>
          )}
        </>
      </Suspense>
    </div>
  );
};
