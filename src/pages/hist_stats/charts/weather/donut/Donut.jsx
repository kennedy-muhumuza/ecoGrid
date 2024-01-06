import Chart from "react-apexcharts";
import styles from "./Donut.module.css";

export const Donut = () => {
  const options = {
    labels: [
      "Light rain🌧️",
      "Overcast clouds🌥️",
      "Broken clouds☁️☁️",
      "Scattered clouds🌤️☁️",
      "Windy💨",
    ],
  };

  const series = [60, 32, 33, 17, 15];
  const labels = [
    "Light rain🌧️",
    "Overcast clouds🌥️",
    "Broken clouds☁️☁️",
    "Scattered clouds🌤️☁️",
    "Windy💨",
  ];
  return (
    <div className={styles["chart_container"]}>
      <p className={styles["donut_header"]}>
        <strong>Weather variations</strong>
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
