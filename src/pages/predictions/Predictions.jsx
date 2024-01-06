import styles from "./Predictions.module.css";
import { generalPredictions } from "../../data/general-predictions";
import { useState } from "react";
// import { exportDataToJSON } from "../../utils/downloadJson";
// import { PredictionsDropDown } from "../predictions/PredictionsDropDown";
import PredictionsDropDown from "../../ui/drop_downs/predictions/PredictionsDropDown";

import { useSelector } from "react-redux";
import { Hourly } from "../pred/hourly/Hourly";
import { Daily } from "../pred/daily/Daily";
import { Weekly } from "../pred/weekly/Weekly";
import { Monthly } from "../pred/monthly/Monthly";
import { Yearly } from "../pred/yearly/Yearly";

export const Predictions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResults, setQueryResults] = useState(
    generalPredictions.energyConsumptionData
  );
  // const activePred = useSelector((state) => state.histTabs.activeHistTab);

  const activePred = useSelector((state) => state.pred.activePred);

  const searchHandler = () => {
    // setIsLoading(true);
    // const docSnap = await getDocs(colletionRef);

    // if (!docSnap.empty) {
    // const data = await docSnap.docs.map((doc) => doc.data());

    const searchedPosts =
      searchQuery.length > 0
        ? generalPredictions.energyConsumptionData.filter((item) =>
            `${item.userName} ${item.timestamp} ${item.energyConsumption} ${item.temperature} ${item.humidity} ${item.dayOfWeek} `
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        : generalPredictions.energyConsumptionData;
    setQueryResults(searchedPosts);
    // setIsLoading(false);
  };
  return (
    <div className={styles["main-container"]}>
      <div className={styles["header-container"]}>
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
        </div>
        {/* <button
          onClick={() => exportDataToJSON("users")}
          className={styles["download"]}
        >
          DOWNLOAD
        </button> */}
        <PredictionsDropDown />
      </div>
      {activePred === "general" && (
        <>
          <table className={styles["table_container"]}>
            <thead>
              <tr>
                <th>Time stamp</th>
                <th>Energy consumption (kWh)</th>
                <th>Temperature (°C)</th>
                <th>Humidity (%)</th>
                <th>Day of week</th>
              </tr>
            </thead>
            <tbody>
              {/* {queryResults?} */}
              {queryResults.map((item, index) => (
                <tr key={index}>
                  <td>{item.timestamp}</td>
                  <td>{item.energyConsumption}</td>
                  <td>{item.temperature}</td>
                  <td>{item.humidity}</td>
                  <td>{item.dayOfWeek}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {activePred === "hourly" && <Hourly />}
      {activePred === "daily" && <Daily />}
      {activePred === "weekly" && <Weekly />}
      {activePred === "monthly" && <Monthly />}
      {activePred === "yearly" && <Yearly />}
    </div>
  );
};
