import { useState } from "react";
import styles from "./Distribution.module.css";
export const Distribution = () => {
  const [baseline, setBaseline] = useState(70);
  const [threshold, setThreshold] = useState(15);
  return (
    <div>
      <div className={styles["set_container"]}>
        <input
          type="text"
          value={baseline}
          onChange={(e) => setBaseline(e.target.value)}
          placeholder="Generation percentage"
          className={styles["input_field"]}
        />
        <button
          className={styles["set_btn"]}
          onClick={() => setBaseline(baseline)}
        >
          Set Generation percentage
        </button>
      </div>
      <div className={styles["set_container"]}>
        <input
          type="text"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Storage percentage"
          className={styles["input_field"]}
        />
        <button
          className={styles["set_btn"]}
          onClick={() => setBaseline(baseline)}
        >
          Set Storage percentage
        </button>
      </div>
      <h2>
        If morethan <b>{baseline}%</b> Renewable energy generation is achieved,{" "}
        <b>{threshold}%</b> is stored
      </h2>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Renewable Generation (%)</th>
            <th>Storage (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{baseline}</td>
            <td>{threshold}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
