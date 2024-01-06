import styles from "./Monthly.module.css";
import { monthlyEnergyConsumption } from "../../../data/monthly-energy-consumption";
export const Monthly = () => {
  return (
    <div>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Total energy consumption (kWh)</th>
            <th>Average Temperature (°C)</th>
            <th>Average Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {monthlyEnergyConsumption.monthlyEnergyConsumptionData.map(
            (item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>{item.totalEnergyConsumption}</td>
                <td>{item.averageTemperature}</td>
                <td>{item.averageHumidity}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
