import { useSelector } from "react-redux";
import { Tick } from "../tick/Tick";
import styles from "./Step.module.css";

export const Step = () => {
  const step = useSelector((state) => state.step.step);

  console.log("step");
  console.log(step);
  return (
    <>
      <div className={styles["progress_container"]}>
        {step > 1 ? (
          <Tick />
        ) : (
          <span className={`${styles.progress_figure} ${styles.active}`}>
            1
          </span>
        )}
        <span className={styles["progress_line"]}></span>

        {step > 2 ? (
          <Tick />
        ) : (
          <span
            className={`${styles["progress_figure"]}  ${
              step < 2 && styles["inactive"]
            } ${step === 2 && styles["active"]} `}
          >
            2
          </span>
        )}
        <span className={styles["progress_line"]}></span>
        <span
          className={`${styles["progress_figure"]}  ${
            step < 3 && styles["inactive"]
          } ${step === 3 && styles["active"]} `}
        >
          3
        </span>
      </div>
    </>
  );
};
