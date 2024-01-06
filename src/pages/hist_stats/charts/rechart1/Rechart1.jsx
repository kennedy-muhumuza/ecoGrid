import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Rechart1 = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Hydro",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //   useEffect(() => {
  //     // This function will update the data periodically (every 2 seconds in this example)
  //     const updateData = () => {
  //       // Generate new data points, you can fetch this data from an API in a real application
  //       const newData = data.map((entry) => ({
  //         name: entry.name,
  //         uv: entry.uv + Math.random() * 100 - 10, // Simulate random changes
  //         pv: entry.pv + Math.random() * 100 - 10, // Simulate random changes
  //         amt: entry.amt + Math.random() * 100 - 10, // Simulate random changes
  //       }));
  //       setData(newData);
  //     };
  //     const interval = setInterval(updateData, 50); // Update data every 2 seconds

  //     return () => {
  //       clearInterval(interval); // Clean up the interval when the component unmounts
  //     };
  //   }, [data]);

  return (
    <div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}

      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};
