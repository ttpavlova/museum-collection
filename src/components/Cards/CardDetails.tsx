import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetCollectionItemByIdQuery } from "../../services/collectionApi";
import s from "../Cards/CardDetails.module.scss";

export const CardDetails = () => {
  let { id: paramId } = useParams();
  const [fields, setFields] = useState<Array<string>>([]);

  const id = Number(paramId);
  const { data: item } = useGetCollectionItemByIdQuery(id);

  const fieldsToShow = ["medium", "culture", "period", "date", "country"];

  function getFilledFields() {
    const fields = [];

    if (item !== undefined) {
      for (const [key, value] of Object.entries(item)) {
        if (value !== "") {
          fields.push(key);
        }
      }
    }

    setFields(fields);
  }

  useEffect(() => {
    getFilledFields();
  }, []);

  const descriptionList = fields.map(
    (field) =>
      item &&
      fieldsToShow.includes(field) && (
        <p className={s.description}>
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
