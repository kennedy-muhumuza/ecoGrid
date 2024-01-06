import ApexCharts from "apexcharts";

const Graph = () => {
  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "Mar '17",
        "Арг 17",
        "May '17",
        "Jun 17",
        "Jul 17",
        "Aug '17",
      ],
    },
    yaxis: {
      max: 140,
      min: 0,
    },
    title: {
      text: "Website Visitors",
      align: "left",
    },
  };

  const series = [
    {
      name: "Visitors",
      data: [70, 99, 92, 85, 77, 70, 63, 56, 49, 41, 34, 27],
    },
  ];

  return (
    <div className="graph">
      <ApexCharts options={options} series={series} type="line" />
    </div>
  );
};

export default Graph;
