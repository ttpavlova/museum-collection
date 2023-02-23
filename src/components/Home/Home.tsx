import { SearchBar } from "../SearchBar/SearchBar";
import { Cards } from "../Cards/Cards";
import { Item } from "../../types/types";
import { useState, useEffect } from "react";
import s from "../Home/Home.module.scss";

export const Home = () => {
  const [collection, setCollection] = useState<Item[]>([]);

  useEffect(() => {
    fetchCollection();
  }, []);

  async function fetchCollection() {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Sculpture&geoLocation=China&hasImages=true&q=""`
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

      setCollection(items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={s.container}>
      <SearchBar />
      <Cards items={collection} />
    </div>
  );
};
