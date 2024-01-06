import Chart from "react-apexcharts";
import styles from "./LineChart.module.css";

export const RuggedLine = () => {
  //   var options = {
  //     series: [
  //       {
  //         name: "XYZ MOTORS",
  //         data: dates,
  //       },
  //     ],
  //     chart: {
  //       type: "area",
  //       stacked: false,
  //       height: 350,
  //       zoom: {
  //         type: "x",
  //         enabled: true,
  //         autoScaleYaxis: true,
  //       },
  //       toolbar: {
  //         autoSelected: "zoom",
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     markers: {
  //       size: 0,
  //     },
  //     title: {
  //       text: "Stock Price Movement",
  //       align: "left",
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shadeIntensity: 1,
  //         inverseColors: false,
  //         opacityFrom: 0.5,
  //         opacityTo: 0,
  //         stops: [0, 90, 100],
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         formatter: function (val) {
  //           return (val / 1000000).toFixed(0);
  //         },
  //       },
  //       title: {
  //         text: "Price",
  //       },
  //     },
  //     xaxis: {
  //       type: "datetime",
  //     },
  //     tooltip: {
  //       shared: false,
  //       y: {
  //         formatter: function (val) {
  //           return (val / 1000000).toFixed(0);
  //         },
  //       },
  //     },
  //   };

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        30, 10, 25, 11, 100, 90, 11, 33, 22, 11, 17, 12, 16, 39, 42, 33, 22, 89,
        76, 65, 50, 49, 60, 70, 91,
      ],
    },
  ];
  return (
    <div>
      <div className={styles["line_container"]}>
        <Chart
          options={options}
          series={series}
          type="area"
          width="500"
          height="300"
        />
      </div>
    </div>
  );
};
