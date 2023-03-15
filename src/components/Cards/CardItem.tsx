import { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import { ThemeContext } from "../../ThemeProvider";
import classNames from "classnames";
import s from "../Cards/CardItem.module.scss";

interface CardItemProps {
  id: number;
}

export const CardItem = ({ id }: CardItemProps) => {
  const { data: item } = useGetCollectionItemByIdQuery(id);
  const { theme } = useContext(ThemeContext);

  const containerClass = classNames(s.container, {
    [s.beige_theme]: theme === "beige",
  });

  return (
    <div>
      {item && (
        <Link
          to={`/search/${item.id}`}
          title={`${item.title} Card Page`}
          className={containerClass}
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
