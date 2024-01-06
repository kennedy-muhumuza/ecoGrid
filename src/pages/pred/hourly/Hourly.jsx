import styles from "./Hourly.module.css";
import { hourlyEnergyConsumption } from "../../../data/hourly-energy-consumption";
export const Hourly = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Time stamp</th>
            <th>Energy consumption (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {hourlyEnergyConsumption.hourlyEnergyConsumptionData.map(
            (item, index) => (
              <tr key={index}>
                <td>{item.timestamp}</td>
                <td>{item.energyConsumption}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
