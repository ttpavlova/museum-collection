import { CardItem } from "./CardItem";
import { Item } from "../../types/types";
import s from "../Cards/Cards.module.scss";

interface CardsProps {
  items: Item[];
}

export const Cards = ({ items }: CardsProps) => {
  return (
    <div className={s.container}>
      {items.map((card) => (
        <CardItem key={card.objectID} item={card} />
      ))}
    </div>
  );
};
