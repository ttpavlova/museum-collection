import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardItem.module.scss";

interface CardItemProps {
  id: number;
}

export const CardItem = ({ id }: CardItemProps) => {
  const { data } = useGetCollectionItemByIdQuery(id);
  const item = data;

  return (
    <div>
      {item && (
        <div className={s.container}>
          <div className={s.image_wrapper}>
            <img
              className={s.image}
              src={item.primaryImage}
              alt={item.title}
            ></img>
          </div>
          <p className={s.title}>{item.title}</p>
          <p className={s.description}>{item.culture}</p>
          <p className={s.description}>{item.objectDate}</p>
        </div>
      )}
    </div>
  );
};
