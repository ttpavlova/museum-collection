import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import { Item } from "../../types/types";
import { useState, useEffect } from "react";
import s from "../Home/Home.module.scss";
import { Header } from "../Header/Header";

export const Home = () => {
  const [collection, setCollection] = useState<Item[]>([]);

  useEffect(() => {
    fetchCollection();
  }, []);

  async function fetchCollection() {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Ivory&hasImages=true&q=Pagoda`
      );
      const json = await response.json();
      const firstTenIDs = json.objectIDs.slice(0, 10);
      const responses = await Promise.all(
        firstTenIDs.map((id: number) =>
          fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
        )
      );
      const items = await Promise.all(
        responses.map((response) => response.json())
      );

      const classification = items.map((item) => item.classification);
      console.log(items);
      console.log(classification);

      setCollection(items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={s.container}>
      <Header />
      <SearchBar />
      <Cards items={collection} />
    </div>
  );
};
