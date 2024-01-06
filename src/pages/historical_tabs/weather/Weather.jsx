import { weatherData } from "../../../data/weather-data";
import styles from "./Weather.module.css";

export const Weather = () => {
  const convertTimestampToDateTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature(K)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((item) => (
            <tr key={item.Time}>
              <td>{convertTimestampToDateTime(item.Time)}</td>
              <td>{item.Temperature}</td>
              <td>{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
