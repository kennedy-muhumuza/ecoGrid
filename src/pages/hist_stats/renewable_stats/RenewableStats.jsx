import { ColumnMarker } from "../charts/colum_marker/ColumnMarker";
import { Donut } from "../charts/donut/Donut";
import { TotalDonut } from "../charts/donut/TotalDonut";
import { DumbBellChart } from "../charts/dumb_bell/DumbBell";
// import { Rugged2 } from "../charts/line/Rugged2";
// import Graph from "../charts/line/Rugged3";
// import { RuggedLine } from "../charts/line/RuggedLine";
// import { LineChart } from "../charts/line/LineChart";
// import { Rechart1 } from "../charts/rechart1/Rechart1";
import styles from "./RenewableStats.module.css";

export const RenewableStats = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["renewable_container"]}>
        <TotalDonut />
        <Donut />
      </div>
      <div className={styles["rechart_container"]}>
        <ColumnMarker />
        <DumbBellChart />
      </div>
      {/* <Rechart1 /> */}
      {/* <RuggedLine /> */}

      {/* <LineChart /> */}
    </div>
  );
};
