import styles from "./Weekly.module.css";
import { weeklyEnergyConsumption } from "../../../data/weekly-energy-consumption";
export const Weekly = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Week start date</th>
            <th>Week end date</th>
            <th>Total energy consumption (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {weeklyEnergyConsumption.weeklyEnergyConsumptionData.map(
            (item, index) => (
              <tr key={index}>
                <td>{item.weekStartDate}</td>
                <td>{item.weekEndDate}</td>
                <td>{item.totalEnergyConsumption}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
