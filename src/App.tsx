import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Spinner } from "./components/Spinner/Spinner";
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
          <Route path="/search" element={<Home />} />
          <Route path="/search/:id" element={<CardDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
