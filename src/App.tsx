import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { CardDetails } from "./components/Cards/CardDetails";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Favourites } from "./components/Favourites/Favourites";
import { History } from "./components/History/History";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
};
