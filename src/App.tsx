import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Spinner } from "./components/Spinner/Spinner";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import "./App.scss";

const CardDetails = lazy(() =>
  import("./components/Cards/CardDetails").then(({ CardDetails }) => ({
    default: CardDetails,
  }))
);

const Favourites = lazy(() =>
  import("./components/Favourites/Favourites").then(({ Favourites }) => ({
    default: Favourites,
  }))
);

const History = lazy(() =>
  import("./components/History/History").then(({ History }) => ({
    default: History,
  }))
);

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/search/:id"
            element={
              <ErrorBoundary FallbackComponent={ErrorPage}>
                <CardDetails />
              </ErrorBoundary>
            }
          />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/favourites"
              element={
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <Favourites />
                </ErrorBoundary>
              }
            />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
