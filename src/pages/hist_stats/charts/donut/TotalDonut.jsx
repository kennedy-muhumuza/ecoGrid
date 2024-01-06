import Chart from "react-apexcharts";
import styles from "./Styles.module.css";

export const TotalDonut = () => {
  const options = {
    labels: ["Fossils", "Renewables"],
  };

  const series = [3000, 7000];
  const labels = ["Fossils", "Renewables"];
  return (
    <div className={styles["total_chart_container"]}>
      <p className={styles["total_donut_header"]}>
        <strong>Fossils vs Total renewable contributions </strong>
      </p>
      <Chart
        options={options}
        series={series}
        labels={labels}
        type="donut"
        width="380"
      />
    </div>
  );
};
