import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import { fetchCollection, selectCollection } from "../../redux/collectionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import s from "../Home/Home.module.scss";

export const Home = () => {
  const [queryToSearch, setQueryToSearch] = useState("");

  const dispatch = useAppDispatch();
  const collection = useAppSelector(selectCollection);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search?q=${queryToSearch}`);
    dispatch(fetchCollection(queryToSearch));
  }, [dispatch, navigate, queryToSearch]);

  return (
    <div className={s.container}>
      <SearchBar setQueryToSearch={setQueryToSearch} />
      <Cards items={collection} />
    </div>
  );
};
