// import { useEffect, useState } from "react";
// import styles from "./SimulationBoxModel.module.css";

// const SimulationBoxModel = () => {
//   const [heightValues, setHeightValues] = useState({
//     column1: ["20%", "30%", "25%", "25%"],
//     column2: ["20%", "40%", "15%", "25%"],
//     column3: ["20%", "20%", "40%", "20%"],
//     column4: ["20%", "15%", "20%", "45%"],
//     column5: ["20%", "35%", "25%", "20%"],
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setHeightValues((prevHeightValues) => {
//         const totalPercentage = 100;
//         const randomValues = [];

//         // Calculate the height for the first row in each column
//         const fixedHeight = prevHeightValues.column1[0];

//         for (let i = 0; i < 3; i++) {
//           const remainingPercentage =
//             totalPercentage -
//             randomValues.reduce((sum, value) => sum + parseInt(value), 0);
//           const randomPercentage = Math.floor(
//             Math.random() * remainingPercentage
//           );
//           randomValues.push(`${randomPercentage}%`);
//         }

//         // Calculate the height for the last row in each column to maintain the overall container height
//         randomValues.push(
//           `${
//             100 - randomValues.reduce((sum, value) => sum + parseInt(value), 0)
//           }%`
//         );

//         return {
//           column1: [fixedHeight, ...randomValues],
//           column2: [fixedHeight, ...randomValues],
//           column3: [fixedHeight, ...randomValues],
//           column4: [fixedHeight, ...randomValues],
//           column5: [fixedHeight, ...randomValues],
//         };
//       });
//     }, 1000);

//     return () => clearInterval(intervalId); // Clear the interval on component unmount
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div className={styles["box-container"]}>
//       {Object.keys(heightValues).map((column, columnIndex) => (
//         <div key={columnIndex} className={styles["box-column"]}>
//           {heightValues[column].map((height, rowIndex) => (
//             <div
//               key={rowIndex}
//               className={styles["box-row"]}
//               style={{ height }}
//             ></div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SimulationBoxModel;
// --------------------------------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import styles from "./SimulationBoxModel.module.css";

const SimulationBoxModel = () => {
  const [heightValues, setHeightValues] = useState({
    column1: ["20%", "30%", "25%", "25%"],
    column2: ["20%", "40%", "15%", "25%"],
    column3: ["20%", "20%", "40%", "20%"],
    column4: ["20%", "15%", "20%", "45%"],
    column5: ["20%", "35%", "25%", "20%"],
  });

  const content = {
    row1: "Fossil",
    row2: "HEP",
    row3: "Wind",
    row4: "Solar",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeightValues((prevHeightValues) => {
        const totalPercentage = 100;
        const randomValues = [];

        // Calculate the height for the first row in each column
        const fixedHeight = prevHeightValues.column1[0];

        for (let i = 0; i < 3; i++) {
          const remainingPercentage =
            totalPercentage -
            randomValues.reduce((sum, value) => sum + parseInt(value), 0);
          const randomPercentage = Math.floor(
            Math.random() * remainingPercentage
          );
          randomValues.push(`${randomPercentage}%`);
        }

        // Calculate the height for the last row in each column to maintain the overall container height
        randomValues.push(
          `${
            100 - randomValues.reduce((sum, value) => sum + parseInt(value), 0)
          }%`
        );

        return {
          column1: [fixedHeight, ...randomValues],
          column2: [fixedHeight, ...randomValues],
          column3: [fixedHeight, ...randomValues],
          column4: [fixedHeight, ...randomValues],
          column5: [fixedHeight, ...randomValues],
        };
      });
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className={styles["box-container"]}>
      {Object.keys(heightValues).map((column, columnIndex) => (
        <div key={columnIndex} className={styles["box-column"]}>
          {heightValues[column].slice(0, -1).map((height, rowIndex) => (
            <div
              key={rowIndex}
              className={styles["box-row"]}
              style={{ height }}
            >
              {/* <span>{content[`row${rowIndex + 1}`]}</span> */}
              <span>
                {content[`row${rowIndex + 1}`]}{" "}
                <b
                  className={
                    styles[`${parseInt(height) > 25 ? "optimal" : "little"}`]
                  }
                >
                  {height}
                </b>
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SimulationBoxModel;

// import { useEffect, useState } from "react";
// import styles from "./SimulationBoxModel.module.css";

// const SimulationBoxModel = () => {
//   const [heightValues, setHeightValues] = useState({
//     column1: ["20%", "30%", "25%", "25%"],
//     column2: ["20%", "40%", "15%", "25%"],
//     column3: ["20%", "20%", "40%", "20%"],
//     column4: ["20%", "15%", "20%", "45%"],
//     column5: ["20%", "35%", "25%", "20%"],
//   });

//   const content = {
//     row1: "Fossil",
//     row2: "HEP",
//     row3: "Wind",
//     row4: "Solar",
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setHeightValues((prevHeightValues) => {
//         // Calculate the random values for fluctuating rows
//         const totalPercentage = 100;
//         const randomValues = [];

//         for (let i = 0; i < 3; i++) {
//           const remainingPercentage =
//             totalPercentage -
//             randomValues.reduce((sum, value) => sum + parseInt(value), 0);
//           // Ensure the calculated random percentage is positive and above 7%
//           const randomPercentage = Math.max(
//             Math.floor((Math.random() * remainingPercentage) / 2), // Distribute the remaining percentage more precisely
//             7
//           );
//           randomValues.push(`${randomPercentage}%`);
//         }

//         // Calculate the height for the last row in each column to maintain the overall container height
//         randomValues.push(
//           `${
//             100 - randomValues.reduce((sum, value) => sum + parseInt(value), 0)
//           }%`
//         );

//         // Keep the height of the first row (Fossil) constant
//         const constantHeight = prevHeightValues.column1[0];

//         // Calculate the overall container height based on the sum of internal rows
//         const containerHeight = randomValues.reduce(
//           (sum, value) => sum + parseInt(value),
//           0
//         );

//         return {
//           column1: [constantHeight, ...randomValues],
//           column2: [constantHeight, ...randomValues],
//           column3: [constantHeight, ...randomValues],
//           column4: [constantHeight, ...randomValues],
//           column5: [constantHeight, ...randomValues],
//           containerHeight: containerHeight + "%", // Set the overall container height
//         };
//       });
//     }, 1000);

//     return () => clearInterval(intervalId); // Clear the interval on component unmount
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div
//       className={styles["box-container"]}
//       style={{ height: heightValues.containerHeight }}
//     >
//       {Object.keys(heightValues).map((column, columnIndex) => (
//         <div key={columnIndex} className={styles["box-column"]}>
//           {Array.isArray(heightValues[column]) &&
//             heightValues[column].slice(0, -1).map((height, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className={styles["box-row"]}
//                 style={{ height }}
//               >
//                 <span>
//                   {content[`row${rowIndex + 1}`]}{" "}
//                   <b
//                     className={
//                       styles[`${parseInt(height) > 25 ? "optimal" : "little"}`]
//                     }
//                   >
//                     {height}
//                   </b>
//                 </span>
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SimulationBoxModel;
