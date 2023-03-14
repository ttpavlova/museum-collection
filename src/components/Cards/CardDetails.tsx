import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectAuthUser, toggleFavourite } from "../../redux/usersSlice";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardDetails.module.scss";

export const CardDetails = () => {
  const { id: paramId } = useParams();

  const id = Number(paramId);
  const { data: item } = useGetCollectionItemByIdQuery(id);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authUser = useAppSelector(selectAuthUser);
  const isFavourite = authUser?.favourites.includes(id);

  const fieldsToShow = ["medium", "culture", "period", "date"];

  const descriptionList = fieldsToShow.map(
    (field) =>
      item &&
      item[field as keyof typeof item] !== "" && (
        <p className={s.description} key={field}>
          <span className={s.field_title}>{field}:</span>{" "}
          {item[field as keyof typeof item]}
        </p>
      )
  );

  const handleToggleFavourite = () => {
    if (authUser) {
      dispatch(toggleFavourite(id));
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      {item && (
        <div className={s.container}>
          <div className={s.text_part}>
            <p className={s.title}>{item.title}</p>
            {descriptionList}

            {!isFavourite ? (
              <button
                onClick={handleToggleFavourite}
                className={"btn " + s.btn}
              >
                Add to Favourites
              </button>
            ) : (
              <button
                onClick={handleToggleFavourite}
                className={"btn " + s.btn}
              >
                Remove from Favourites
              </button>
            )}
          </div>
          <div className={s.image_wrapper}>
            <img className={s.image} src={item.image} alt={item.title} />
          </div>
        </div>
      )}
    </>
  );
};
