import PropTypes from "prop-types";
import { CardItem } from "./CardItem";
import s from "../Cards/Cards.module.scss";

interface CardsProps {
  ids: number[];
}

export const Cards = ({ ids }: CardsProps) => {
  return (
    <div className={s.container}>
      {ids.map((id) => (
        <CardItem key={id} id={id} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  ids: PropTypes.array,
};
