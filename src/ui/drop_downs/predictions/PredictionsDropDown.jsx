import { ImStatsBars } from "react-icons/im";
// import styles from "./HistStats.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setHistTab } from "../../../store/actions/histTabs";
import { setPred } from "../../../store/actions/pred";
import styles from "./Predictions.module.css";
// im ImStatsBars

function PredictionsDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // const [clicked, setClicked] = useState(false);
  // const [tab, setTab] = useState("");
  const activePred = useSelector((state) => state.pred.activePred);

  const clickHandler = (item) => {
    // setTab(item);
    console.log("clicked");
    // setClicked(true);
    // if (clicked && isActive(item)) {
    if (item === "General") {
      console.log("INDEX 10 CLICKED");
      dispatch(setPred("general"));
    } else if (item === "Hourly") {
      console.log("INDEX 1 CLICKED");
      dispatch(setPred("hourly"));
    } else if (item === "Daily") {
      console.log("INDEX 2 CLICKED");
      dispatch(setPred("daily"));
    } else if (item === "Weekly") {
      console.log("INDEX 0 CLICKED");
      dispatch(setPred("weekly"));
    } else if (item === "Monthly") {
      console.log("INDEX 0 CLICKED");
      dispatch(setPred("monthly"));
    } else if (item === "Yearly") {
      console.log("INDEX 0 CLICKED");
      dispatch(setPred("yearly"));
    }
    // }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    "General",
    "Hourly",
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
  ];
  // const isActive = (item) => {
  //   return tab === item;
  // };
  return (
    <div className={styles["dropdown"]}>
      <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
        {/* <ImStatsBars /> */}
        {activePred} predictions
      </button>
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className={styles["dropdown-item"]}
              onClick={() => clickHandler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PredictionsDropDown;
