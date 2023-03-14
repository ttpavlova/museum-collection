import { BarLoader } from "react-spinners";
import s from "../Spinner/Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={"sweet-loading " + s.container}>
      <BarLoader
        color="#6b2c08"
        height={4}
        width={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.8}
      />
    </div>
  );
};
