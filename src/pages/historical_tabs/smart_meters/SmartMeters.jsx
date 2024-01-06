import { smartMeter } from "../../../data/smart-meters-data";
import styles from "./SmartMeter.module.css";

export const SmartMeters = () => {
  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>x_Timestamp</th>
            <th>t_kWh</th>
            <th>z_AvgVoltage (Volt)</th>
            <th>z_Avg Current (Amp)</th>
            <th>y_Freq (Hz)</th>
            <th>meter</th>
          </tr>
        </thead>
        <tbody>
          {smartMeter.map((item) => (
            <tr key={item.xTimestamp}>
              <td>{item.xTimestamp}</td>
              <td>{item.tKWh}</td>
              <td>{item.zAvgVoltageVolt}</td>
              <td>{item.zAvgCurrentAmp}</td>
              <td>{item.yFreqHz}</td>
              <td>{item.meter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
