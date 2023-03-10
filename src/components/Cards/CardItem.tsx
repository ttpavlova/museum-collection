import { Link } from "react-router-dom";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardItem.module.scss";

interface CardItemProps {
  id: number;
}

export const CardItem = ({ id }: CardItemProps) => {
  const { data: item } = useGetCollectionItemByIdQuery(id);

  return (
    <div>
      {item && (
        <Link
          to={`/search/${item.id}`}
          title={`${item.title} Card Page`}
          className={s.container}
        >
          <div className={s.image_wrapper}>
            <img className={s.image} src={item.image} alt={item.title}></img>
          </div>
          <p className={s.title}>{item.title}</p>
          <p className={s.description}>{item.culture}</p>
          <p className={s.description}>{item.date}</p>
        </Link>
      )}
    </div>
  );
};
