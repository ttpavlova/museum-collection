import { Item } from "../../types/types";
import s from "../Cards/CardItem.module.scss";

interface CardItemProps {
  item: Item;
}

export const CardItem = ({ item }: CardItemProps) => {
  return (
    <div className={s.container}>
      <div className={s.image_wrapper}>
        <img className={s.image} src={item.primaryImage} alt={item.title}></img>
      </div>
      <p className={s.title}>{item.title}</p>
      <p className={s.description}>{item.culture}</p>
      <p className={s.description}>{item.objectDate}</p>
    </div>
  );
};
