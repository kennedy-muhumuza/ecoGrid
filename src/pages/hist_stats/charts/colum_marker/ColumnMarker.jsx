import Chart from "react-apexcharts";
import styles from "./ColumnMarker.module.css";

export const ColumnMarker = () => {
  var options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: ["#00E396"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
      markers: {
        fillColors: ["#00E396", "#775DD0"],
      },
    },
  };
  const series = [
    {
      name: "Actual",
      data: [
        {
          x: "1990",
          y: 1292,
          goals: [
            {
              name: "Expected",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "1995",
          y: 4432,
          goals: [
            {
              name: "Expected",
              value: 5400,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2000",
          y: 5423,
          goals: [
            {
              name: "Expected",
              value: 5200,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2005",
          y: 6653,
          goals: [
            {
              name: "Expected",
              value: 6500,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2010",
          y: 8133,
          goals: [
            {
              name: "Expected",
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: "round",
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2015",
          y: 7132,
          goals: [
            {
              name: "Expected",
              value: 7500,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2020",
          y: 7332,
          goals: [
            {
              name: "Expected",
              value: 8700,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "2022",
          y: 6553,
          goals: [
            {
              name: "Expected",
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: "#775DD0",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className={styles["column_marker_container"]}>
      <p className={styles["column_marker_header"]}>
        <strong>
          Total generated renewable power relative to the expected amount
        </strong>
      </p>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="380"
        height="350"
      />
    </div>
  );
};
