import Chart from "react-apexcharts";
import styles from "./Donut.module.css";

export const Donut = () => {
  const options = {
    labels: ["Average Voltage", "Average Current", "Frequency", "T(kW)"],
  };

  const series = [60, 32, 33, 17, 15];
  const labels = ["Average Voltage", "Average Current", "Frequency", "T(kW)"];
  return (
    <div className={styles["chart_container"]}>
      <p className={styles["donut_header"]}>
        <strong>Smart meter parameter overview</strong>
      </p>
      <Chart
        options={options}
        series={series}
        labels={labels}
        type="donut"
        width="420"
      />
    </div>
  );
};
