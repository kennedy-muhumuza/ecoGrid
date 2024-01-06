import styles from "./TabOptions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../store/actions/tabs";
import { setHistTab } from "../../store/actions/histTabs";
import { useState } from "react";
import { setMainTab } from "../../store/actions/mainTabs";
// import { useDispatch } from "react-redux";

export const TabOptions = () => {
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const dispatch = useDispatch();
  console.log("ACTIVE-TAB:", activeTab);
  const clickHandler = (tab) => {
    dispatch(setTab(tab));
  };
  const isActive = (tab) => {
    return activeTab === tab;
  };

  return (
    <>
      <ul className={styles["stations_options"]}>
        <li
          onClick={() => clickHandler("overview")}
          className={`${styles["station_options"]} ${
            isActive("overview") && styles["active"]
          }`}
        >
          Overview
        </li>
        <li
          onClick={() => clickHandler("details")}
          className={`${styles["station_options"]} ${
            isActive("details") && styles["active"]
          }`}
        >
          Details
        </li>
        <li
          onClick={() => clickHandler("location")}
          className={`${styles["station_options"]} ${
            isActive("location") && styles["active"]
          }`}
        >
          Location
        </li>
        <li
          onClick={() => clickHandler("billing-plan")}
          className={`${styles["station_options"]} ${
            isActive("billing-plan") && styles["active"]
          }`}
        >
          Billing Plan
        </li>
        <li
          onClick={() => clickHandler("charging-features")}
          className={`${styles["station_options"]} ${
            isActive("charging-features") && styles["active"]
          }`}
        >
          Charging Features
        </li>
        <li
          onClick={() => clickHandler("security-report")}
          className={`${styles["station_options"]} ${
            isActive("security-report") && styles["active"]
          }`}
        >
          Security Report
        </li>
        <li
          onClick={() => clickHandler("transactions")}
          className={`${styles["station_options"]} ${
            isActive("transactions") && styles["active"]
          }`}
        >
          Transactions
        </li>
      </ul>
    </>
  );
};

export const HistTabOptions = () => {
  const [active, setActive] = useState(true);
  const activeHistTab = useSelector((state) => state.histTabs.activeHistTab);
  const dispatch = useDispatch();
  console.log("activeHistTab:", activeHistTab);
  const clickHandler = (tab) => {
    dispatch(setHistTab(tab));
    setActive(true);
  };

  const isHistActive = (tab) => {
    return activeHistTab === tab;
  };
  return (
    <>
      <ul className={styles["stations_options"]}>
        <li
          onClick={() => clickHandler("renewables")}
          className={`${styles["station_options"]} ${
            active && isHistActive("renewables") && styles["active"]
          }`}
        >
          Renewable Power generation
        </li>
        <li
          onClick={() => clickHandler("weather")}
          className={`${styles["station_options"]} 
          
          ${active && isHistActive("weather") && styles["active"]}
          `}
        >
          Weather data
        </li>
        <li
          onClick={() => clickHandler("smart-meters")}
          className={`${styles["station_options"]} ${
            active && isHistActive("smart-meters") && styles["active"]
          }`}
        >
          Smart meters
        </li>
      </ul>
    </>
  );
};

export const MainTabOptions = () => {
  const [active, setActive] = useState(true);
  const activeMainTab = useSelector((state) => state.mainTabs.activeMainTab);
  const dispatch = useDispatch();
  console.log("activeMainTab:", activeMainTab);
  const clickHandler = (tab) => {
    dispatch(setMainTab(tab));
    setActive(true);
  };

  const isMainActive = (tab) => {
    return activeMainTab === tab;
  };
  return (
    <>
      <ul className={styles["stations_options"]}>
        <li
          onClick={() => clickHandler("current")}
          className={`${styles["main_station_options"]} ${
            active && isMainActive("current") && styles["active"]
          }`}
        >
          Current Grid Data
        </li>
        <li
          onClick={() => clickHandler("predictions")}
          className={`${styles["main_station_options"]} 
          
          ${active && isMainActive("predictions") && styles["active"]}
          `}
        >
          Predictions
        </li>
      </ul>
    </>
  );
};
 