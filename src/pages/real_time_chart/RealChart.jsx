import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const RealChart = () => {
  const [data, setData] = useState([]);
  const [timestamp, setTimestamp] = useState(new Date());

  // Function to generate random data point
  console.log("timestamp", timestamp);
  const generateDataPoint = () => {
    return {
      x: new Date(),
      y: Math.floor(Math.random() * 100),
    };
  };

  // Function to update chart data
  const updateChartData = () => {
    const newData = [...data, generateDataPoint()];

    if (newData.length > 10) {
      //   newData.shift(); // Keep a fixed number of data points
    }

    setData(newData);
    setTimestamp(new Date());
  };

  useEffect(() => {
    // Update chart data every second
    const intervalId = setInterval(updateChartData, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [data]);

  const chartOptions = {
    chart: {
      id: "real-time-line-chart",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000, // Update speed in milliseconds
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "HH:mm:ss",
      },
    },
    yaxis: {
      max: 100,
    },
  };

  return (
    <div>
      <h2>
        <b>Real-Time Renewable Energy generation</b>
      </h2>
      <ReactApexChart
        options={chartOptions}
        series={[{ name: "Random Data", data }]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default RealChart;
