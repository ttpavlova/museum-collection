import { useParams } from "react-router-dom";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardDetails.module.scss";

export const CardDetails = () => {
  const { id: paramId } = useParams();

  const id = Number(paramId);
  const { data: item } = useGetCollectionItemByIdQuery(id);

  return (
    <>
      {item && (
        <div className={s.container}>
          <div className={s.text_part}>
            <p className={s.title}>{item.title}</p>
            <p className={s.description}>
              <span className={s.field_title}>Medium:</span> {item.medium}
            </p>
            <p className={s.description}>
              <span className={s.field_title}>Culture:</span> {item.culture}
            </p>
            {item.period !== "" && (
              <p className={s.description}>
                <span className={s.field_title}>Period:</span> {item.period}
              </p>
            )}
            {item.date !== "" && (
              <p className={s.description}>
                <span className={s.field_title}>Date:</span> {item.date}
              </p>
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
