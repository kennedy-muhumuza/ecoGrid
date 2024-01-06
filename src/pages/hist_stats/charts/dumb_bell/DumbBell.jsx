import Chart from "react-apexcharts";
import styles from "./DumbBell.module.css";
export const DumbBellChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "rangeBar",
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        distributed: true,
        // dumbbellColors: [["#008FFB", "#00E396"]],
        dumbbellColors: [
          ["#008FFB", "#00E396"], // This will set the colors of the dumbbell dots.
        ],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "left",
      customLegendItems: ["Minimum", "Maximum"],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#00E396"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
    },
  };
  const series = [
    {
      data: [
        {
          x: "Fossils",
          y: [2000, 2000],
        },
        {
          x: "Solar",
          y: [3000, 4500],
        },
        {
          x: "Biofuel",
          y: [1000, 3000],
        },
        {
          x: "Hydro",
          y: [2000, 8000],
        },
        {
          x: "Wind",
          y: [2000, 3000],
        },
        {
          x: "Geothermal",
          y: [500, 2000],
        },
      ],
    },
  ];

  //   var chart = new ApexCharts(document.querySelector("#chart"), options);
  //   chart.render();

  return (
    <div className={styles["dumb_bell_chart_container"]}>
      <p className={styles["dumb_bell_header"]}>
        <strong>Grid energy source ranges</strong>
      </p>
      <Chart
        options={options}
        series={series}
        type="rangeBar"
        width="380"
        height="350"
      />
    </div>
  );
};
