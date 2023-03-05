import { CardItem } from "./CardItem";
import s from "../Cards/Cards.module.scss";

interface CardsProps {
  IDs: number[];
}

export const Cards = ({ IDs }: CardsProps) => {
  return (
    <div className={s.container}>
      {IDs.map((id) => (
        <CardItem key={id} id={id} />
      ))}
    </div>
  );
};
