// import "./BoxModel.css"; // You can create a separate CSS file for styling
import styles from "./BoxModel.module.css";

const BoxModel = ({ baseline }) => {
  return (
    <div className={styles["box-container"]}>
      <div className={styles["box-column"]}>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Fossil <b className={styles["optimal"]}>{baseline}%</b>
        </div>
        <div className={styles["box-row"]} style={{ height: "30%" }}>
          HEP
        </div>
        <div className={styles["box-row"]} style={{ height: "25%" }}>
          Wind
        </div>
        <div className={styles["box-row"]} style={{ height: "25%" }}>
          Solar
        </div>
      </div>
      <div className={styles["box-column"]}>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Fossil <b className={styles["optimal"]}>{baseline}%</b>
        </div>
        <div className={styles["box-row"]} style={{ height: "40%" }}>
          HEP
        </div>
        <div className={styles["box-row"]} style={{ height: "18%" }}>
          Wind
        </div>
        <div className={styles["box-row"]} style={{ height: "22%" }}>
          Solar
        </div>
      </div>
      <div className={styles["box-column"]}>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Fossil <b className={styles["optimal"]}>{baseline}%</b>
        </div>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          HEP
        </div>
        <div className={styles["box-row"]} style={{ height: "40%" }}>
          Wind
        </div>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Solar
        </div>
      </div>
      <div className={styles["box-column"]}>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Fossil <b className={styles["optimal"]}>{baseline}%</b>
        </div>
        <div className={styles["box-row"]} style={{ height: "15%" }}>
          HEP
        </div>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Wind
        </div>
        <div className={styles["box-row"]} style={{ height: "45%" }}>
          Solar
        </div>
      </div>
      <div className={styles["box-column"]}>
        <div className={styles["box-row"]} style={{ height: "20%" }}>
          Fossil <b className={styles["optimal"]}>{baseline}%</b>
        </div>
        <div className={styles["box-row"]} style={{ height: "30%" }}>
          HEP
        </div>
        <div className={styles["box-row"]} style={{ height: "29%" }}>
          Wind
        </div>
        <div className={styles["box-row"]} style={{ height: "21%" }}>
          Solar
        </div>
      </div>
    </div>
  );
};

export default BoxModel;
