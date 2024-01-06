import styles from "./Daily.module.css";
import { dailyEnergyConsumption } from "../../../data/daily-energy-consumption";
export const Daily = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Energy consumption (kWh)</th>
            <th>Average temperature (°C)</th>
            <th>Average humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {dailyEnergyConsumption.dailyEnergyConsumptionData.map(
            (item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.totalEnergyConsumption}</td>
                <td>{item.averageTemperature}</td>
                <td>{item.averageHumidity}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};
