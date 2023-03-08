import { useParams } from "react-router-dom";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardDetails.module.scss";

export const CardDetails = () => {
  const { id: paramId } = useParams();

  const id = Number(paramId);
  const { data: item } = useGetCollectionItemByIdQuery(id);

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

  return (
    <>
      {item && (
        <div className={s.container}>
          <div className={s.text_part}>
            <p className={s.title}>{item.title}</p>
            {descriptionList}
          </div>
          <div className={s.image_wrapper}>
            <img className={s.image} src={item.image} alt={item.title} />
          </div>
        </div>
      )}
    </>
  );
};
