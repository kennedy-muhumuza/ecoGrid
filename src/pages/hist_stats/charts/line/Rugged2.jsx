import { useState } from "react";

import ReactApexChart from "react-apexcharts";
// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

export const Rugged2 = () => {
  const ruggedData = Array.from({ length: 12 }, () => ({
    x: Math.random().toString(36).substring(7), // Random x values
    y: Math.floor(Math.random() * (80 - 20 + 1)) + 20, // Random y values between 20 and 80
  }));
  //   const startDate = new Date("1990-01-01");
  //   const endDate = new Date("2015-12-31");
  //   const ruggedData = Array.from({ length: 12 }, (_, index) => ({
  //     x: new Date(
  //       startDate.getFullYear() + index,
  //       Math.floor(Math.random() * 12),
  //       Math.floor(Math.random() * 31)
  //     ), // Random dates between 1990 and 2015
  //     y: Math.floor(Math.random() * (80 - 20 + 1)) + 20, // Random y values between 20 and 80
  //   }));

  //   console.log(ruggedData);

  //   console.log(ruggedData);
  const data = ruggedData;
  //   const data = [
  //     // Sample data, you can replace this with your actual data
  //     { x: "Jan", y: 30 },
  //     { x: "Feb", y: 40 },
  //     { x: "Mar", y: 35 },
  //     { x: "Apr", y: 55 },
  //     { x: "May", y: 50 },
  //     { x: "Jun", y: 60 },
  //     // Add more data points as needed
  //   ];

  const [options] = useState({
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#546E7A"],
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "category", // Assuming you're using category data, change to 'datetime' if using date-based data
    },
  });

  const [series] = useState([{ data }]);

  const [optionsLine] = useState({
    chart: {
      id: "chart1",
      height: 130,
      type: "area",
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("2017-06-19").getTime(),
          max: new Date("2017-08-14").getTime(),
        },
      },
    },
    colors: ["#008FFB"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "category", // Change to 'datetime' if needed
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  });

  const [seriesLine] = useState([{ data }]);

  return (
    <div id="wrapper">
      <div id="chart-line2">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={230}
        />
      </div>
      <div id="chart-line">
        <ReactApexChart
          options={optionsLine}
          series={seriesLine}
          type="area"
          height={130}
        />
      </div>
    </div>
  );
};

export default Rugged2;

// export const Rugged2 = () => {
//   const [series, setSeries] = useState([{ data: data }]);
//   const [options, setOptions] = useState({
//     chart: {
//       id: "chart2",
//       type: "line",
//       height: 230,
//       toolbar: {
//         autoSelected: "pan",
//         show: false,
//       },
//     },
//     colors: ["#546E7A"],
//     stroke: {
//       width: 3,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       opacity: 1,
//     },
//     markers: {
//       size: 0,
//     },
//     xaxis: {
//       type: "datetime",
//     },
//   });

//   const [seriesLine, setSeriesLine] = useState([{ data: data }]);
//   const [optionsLine, setOptionsLine] = useState({
//     chart: {
//       id: "chart1",
//       height: 130,
//       type: "area",
//       brush: {
//         target: "chart2",
//         enabled: true,
//       },
//       selection: {
//         enabled: true,
//         xaxis: {
//           min: new Date("19 Jun 2017").getTime(),
//           max: new Date("14 Aug 2017").getTime(),
//         },
//       },
//     },
//     colors: ["#008FFB"],
//     fill: {
//       type: "gradient",
//       gradient: {
//         opacityFrom: 0.91,
//         opacityTo: 0.1,
//       },
//     },
//     xaxis: {
//       type: "datetime",
//       tooltip: {
//         enabled: false,
//       },
//     },
//     yaxis: {
//       tickAmount: 2,
//     },
//   });

//   return (
//     <div id="wrapper">
//       <div id="chart-line2">
//         <ReactApexChart
//           options={options}
//           series={series}
//           type="line"
//           height={230}
//         />
//       </div>
//       <div id="chart-line">
//         <ReactApexChart
//           options={optionsLine}
//           series={seriesLine}
//           type="area"
//           height={130}
//         />
//       </div>
//     </div>
//   );
// };
