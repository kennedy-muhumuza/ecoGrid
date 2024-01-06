import styles from "./Yearly.module.css";
import { yearlyEnergyConsumption } from "../../../data/yearly-energy-consumption";
export const Yearly = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>year</th>
            <th>Total Energy Consumption (kWh)</th>
            <th>Average Temperature (°C)</th>
            <th>Average Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {yearlyEnergyConsumption.yearlyEnergyConsumptionData.map(
            (item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
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
