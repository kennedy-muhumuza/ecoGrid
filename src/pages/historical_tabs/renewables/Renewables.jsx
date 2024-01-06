import { renewablePowerGeneration } from "../../../data/renewables";
import styles from "./Renewables.module.css";

export const Renewables = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Hydro(TWh)</th>
            <th>Biofuel(Twh)</th>
            <th>Solar(TWh)</th>
            <th>Geothermal(TWh)</th>
            <th>Wind(TWh)</th>
          </tr>
        </thead>
        <tbody>
          {renewablePowerGeneration.map((item) => (
            <tr key={item.Year}>
              <td>{item.Year}</td>
              <td>{item.Hydro}</td>
              <td>{item.Biofuel}</td>
              <td>{item.Solar}</td>
              <td>{item.Geothermal}</td>
              <td>{item.Wind}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
