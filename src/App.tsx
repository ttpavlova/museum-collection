import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { loadUsers } from "./redux/usersSlice";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { CardDetails } from "./components/Cards/CardDetails";
import "./App.scss";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUsers([]));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/search/:id" element={<CardDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
