import { useState } from "react";
import styles from "./Usage.module.css";
export const Usage = () => {
  const [baseline, setBaseline] = useState(30);
  return (
    <div>
      <h1>
        <b>Initiate response protocol once usage limit is exceeded</b>{" "}
      </h1>
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
          Set Usage check limit
        </button>
      </div>
      <p>
        Once Usage exceeds <b>Total Grid capacity plus Total Storage,</b>{" "}
        response programs will be automatically initiated
      </p>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Total Grid Capacity (%)</th>
            <th>Total Storage capacity (%)</th>
            <th>Total Usage amount</th>
            <th>Total Usage (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1300 </td>
            <td>889 MW</td>
            <td>970 MW</td>
            <td>{((970 / (1300 + 889)) * 100).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
