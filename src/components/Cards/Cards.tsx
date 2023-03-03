import { CardItem } from "./CardItem";
import { Item } from "../../types/types";
import s from "../Cards/Cards.module.scss";

interface CardsProps {
  items: Item[];
  isLoading: boolean;
}

export const Cards = ({ items, isLoading }: CardsProps) => {
  if (isLoading) {
    return <div className={s.container}>Loading...</div>;
  }

  return (
    <div className={s.container}>
      {items.map((card) => (
        <CardItem key={card.objectID} item={card} />
      ))}
    </div>
  );
};
