import styles from "./WeatherStats.module.css";
// import { DumbBellChart } from "../charts/dumb_bell/DumbBell";
import { Donut } from "../charts/weather/donut/Donut";
import { DumbBellChart } from "../charts/weather/dumb_bell/DumbBell";

export const WeatherStats = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["weather_container"]}>
        {/* <TotalDonut /> */}
        <Donut />
        <DumbBellChart />
      </div>
      <div className={styles["rechart_container"]}>
        {/* <ColumnMarker /> */}
      </div>
    </div>
  );
};
