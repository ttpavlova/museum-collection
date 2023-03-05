import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import { fetchCollection, selectCollection } from "../../redux/collectionSlice";
import { useEffect } from "react";
import s from "../Home/Home.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Home = () => {
  const dispatch = useAppDispatch();
  const collection = useAppSelector(selectCollection);

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <SearchBar />
      <Cards items={collection} />
    </div>
  );
};
