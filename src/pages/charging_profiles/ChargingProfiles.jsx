import { chargingProfilesData } from "../../data/charging-profiles";
import styles from "./ChargingProfiles.module.css";
export const ChargingProfiles = () => {
  return (
    <div>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Charging power</th>
            <th>Charging duration</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Charging efficiency</th>
            <th>Charging Connector Type</th>
            <th>Grid Tariffs/peak</th>
            <th>Grid Tariffs/offpeak</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {chargingProfilesData.chargingProfiles.map((item, index) => (
            <tr key={index}>
              <td>{item.chargingPower}</td>
              <td>{item.chargingDuration}</td>
              <td>{item.startTime}</td>
              <td>{item.endTime}</td>
              <td>{item.chargingEfficiency}</td>
              <td>{item.chargingConnectorType}</td>
              <td>{item.gridTariffs.peak}</td>
              <td>{item.gridTariffs.offPeak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
