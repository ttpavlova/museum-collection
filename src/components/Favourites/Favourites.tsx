import { useAppSelector } from "../../redux/hooks";
import { selectAuthUser } from "../../redux/usersSlice";
import { CardItem } from "../Cards/CardItem";
import s from "../Favourites/Favourites.module.scss";

export const Favourites = () => {
  const authUser = useAppSelector(selectAuthUser);
  const favouritesIds = authUser?.favourites;
  const isFavouritesEmpty = favouritesIds?.length === 0;

  if (isFavouritesEmpty)
    return <div className={s.message}>No favourites yet.</div>;

  return (
    <div className={s.container}>
      {favouritesIds &&
        favouritesIds.map((id) => <CardItem key={id} id={id} />)}
    </div>
  );
};
