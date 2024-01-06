import styles from "./RealTime.module.css";
// import { generalPredictions } from "../../data/general-predictions";
import { faultsData } from "../../data/faults-detection-data";
import { useState } from "react";
// import { exportDataToJSON } from "../../utils/downloadJson";
// import { Predictions } from "../predictions/Predictions";
// import { useSelector } from "react-redux";

export const RealTime = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResults, setQueryResults] = useState(faultsData.ecoGridData);
  // const activePred = useSelector((state) => state.pred.activePred);

  const searchHandler = () => {
    // setIsLoading(true);
    // const docSnap = await getDocs(colletionRef);

    // if (!docSnap.empty) {
    // const data = await docSnap.docs.map((doc) => doc.data());

    const searchedPosts =
      searchQuery.length > 0
        ? faultsData.ecoGridData.filter((item) =>
            `${item.current} ${item.timestamp} ${item.voltage} ${item.temperature} ${item.humidity} ${item.powerQuality} `
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        : faultsData.ecoGridData;
    setQueryResults(searchedPosts);
    // setIsLoading(false);
  };
  return (
    <div className={styles["main-container"]}>
      <div>
        <input
          placeholder="Search users"
          type="text"
          className={styles["search_users"]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />{" "}
        <button className={styles["search_btn"]} onClick={searchHandler}>
          Search
        </button>
        {/* <button
          onClick={() => exportDataToJSON("users")}
          className={styles["download"]}
        >
          DOWNLOAD
        </button> */}
        {/* <Predictions /> */}
      </div>
      <table className={styles["table_container"]}>
        <thead>
          <tr>
            <th>Time stamp</th>
            <th>Voltage</th>
            <th>Current</th>
            <th>Temperature</th>
            <th>Power Quality</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {/* {queryResults?} */}
          {queryResults.map((item, index) => (
            <tr key={index}>
              <td>{item.timestamp}</td>
              <td>{item.voltage}</td>
              <td>{item.current}</td>
              <td>{item.temperature}</td>
              <td>{item.powerQuality}</td>
              <td>{item.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
