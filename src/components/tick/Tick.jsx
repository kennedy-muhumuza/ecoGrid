import styles from "./Tick.module.css";

export const Tick = () => {
  return (
    <>
      <span className={styles["tick_container"]}>
        {/* <img src={tick} alt="tick" className={styles["tick_img"]} /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className={styles["tick_img"]}
        >
          <path
            fill="none"
            stroke="white"
            strokeWidth="5"
            d="M20 50 L40 70 L80 30"
          ></path>
        </svg>
      </span>
    </>
  );
};
 