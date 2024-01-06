import { useState } from "react";
import BoxModel from "../box_model/BoxModel";
import SimulationBoxModel from "../simulation_box_model/SimulationBoxModel";
import styles from "./Generation.module.css";

export const Generation = () => {
  const [tab, setTab] = useState("distribution");
  const [baseline, setBaseline] = useState(20);
  return (
    <div className={styles["generation_controls"]}>
      <b>Power generation Controls</b>
      <div className={styles["set_container"]}>
        <input
          type="text"
          value={baseline}
          onChange={(e) => setBaseline(e.target.value)}
          placeholder="Fossil percentage baseline"
          className={styles["input_field"]}
        />
        <button
          className={styles["set_btn"]}
          onClick={() => setBaseline(baseline)}
        >
          Set Fossil Baseline
        </button>
      </div>
      <ul className={styles["tab_container"]}>
        <li
          onClick={() => setTab("distribution")}
          className={styles[`${tab === "distribution" ? "active" : ""}`]}
        >
          Energy generation distribution
        </li>
        <li
          onClick={() => setTab("simulation")}
          className={styles[`${tab === "simulation" ? "active" : ""}`]}
        >
          Simulation
        </li>
      </ul>
      {tab === "distribution" && <BoxModel baseline={baseline} />}
      {tab === "simulation" && (
        <>
          <SimulationBoxModel baseline={baseline} />
        </>
      )}
      {/* <div className={styles["fossil_controls_container"]}>
          <div className={styles["fossil_controls"]}>
            <div className={styles["fossil_control"]}>
              <span>Fossil</span>
              <span className={styles["optimal"]}>20%</span>
            </div>
            <div className={styles["hep_one_control"]}>HEP</div>
            <div className={styles["fossil_control"]}>Wind</div>
            <div className={styles["fossil_control"]}>Solar</div>
          </div>
          <div className={styles["fossil_controls_two"]}>
            <div className={styles["fossil_control"]}>
              <span>Fossil</span>
              <span className={styles["optimal"]}>20%</span>
            </div>
            <div className={styles["hep_two_control"]}>HEP</div>
            <div className={styles["fossil_control"]}>Wind</div>
            <div className={styles["fossil_control"]}>Solar</div>
          </div>
          <div className={styles["fossil_controls_three"]}>
            <div className={styles["fossil_control"]}>
              <span>Fossil</span>
              <span className={styles["optimal"]}>20%</span>
            </div>
            <div className={styles["hep_three_control"]}>HEP</div>
            <div className={styles["fossil_control"]}>Wind</div>
            <div className={styles["fossil_control"]}>Solar</div>
          </div>
          <div className={styles["fossil_controls_four"]}>
            <div className={styles["fossil_control"]}>
              <span>Fossil</span>
              <span className={styles["optimal"]}>20%</span>
            </div>
            <div className={styles["hep_four_control"]}>HEP</div>
            <div className={styles["fossil_control"]}>Wind</div>
            <div className={styles["fossil_control"]}>Solar</div>
          </div>
          <div className={styles["fossil_controls_five"]}>
            <div className={styles["fossil_control"]}>
              <span>Fossil</span>
              <span className={styles["optimal"]}>20%</span>
            </div>
            <div className={styles["hep_five_control"]}>HEP</div>
            <div className={styles["fossil_control"]}>Wind</div>
            <div className={styles["fossil_control"]}>Solar</div>
          </div>
        </div> */}
    </div>
  );
};
