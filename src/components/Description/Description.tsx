import s from "../Description/Description.module.scss";
import { SearchBarMini } from "../SearchBar/SearchBarMini";

export const Description = () => {
  return (
    <div className={s.container}>
      <h1 className={s.header_text}>The Met Collection</h1>
      <div className={s.description_text}>
        <p className={s.text}>
          Explore works of Chinese Sculpture from The Metropolitan Museum of
          Art's Collection.
        </p>
        <p className={s.text}>Examples to search: pagoda, teapot, mountain.</p>
      </div>
      <SearchBarMini />
    </div>
  );
};
