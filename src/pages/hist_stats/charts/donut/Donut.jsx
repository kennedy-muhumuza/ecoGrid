import Chart from "react-apexcharts";
import styles from "./Styles.module.css";

export const Donut = () => {
  const options = {
    labels: ["Hydro", "Biofuels", "Solar", "Geothermal", "Wind"],
  };

  const series = [60, 32, 33, 17, 15];
  const labels = ["Hydro", "Biofuels", "Solar", "Geothermal", "Wind"];
  return (
    <div className={styles["chart_container"]}>
      <p className={styles["donut_header"]}>
        <strong>Renewable Contributions</strong>
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
