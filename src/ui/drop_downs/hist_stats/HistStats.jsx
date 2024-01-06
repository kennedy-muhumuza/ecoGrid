import { ImStatsBars } from "react-icons/im";
import styles from "./HistStats.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setHistTab } from "../../../store/actions/histTabs";
// im ImStatsBars

function HistStats() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  // const [clicked, setClicked] = useState(false);
  // const [tab, setTab] = useState("");

  const clickHandler = (item) => {
    // setTab(item);
    console.log("clicked");
    // setClicked(true);
    // if (clicked && isActive(item)) {
    if (item === "Renewable PG") {
      console.log("INDEX 10 CLICKED");
      dispatch(setHistTab("renewables-stats"));
    } else if (item === "Weather data") {
      console.log("INDEX 1 CLICKED");
      dispatch(setHistTab("weather-stats"));
    } else if (item === "Smart meters") {
      console.log("INDEX 2 CLICKED");
      dispatch(setHistTab("smart-meters-stats"));
    } else if (item === "Overview") {
      console.log("INDEX 0 CLICKED");
      dispatch(setHistTab("overview"));
    }
    // }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = ["Renewable PG", "Weather data", "Smart meters"];
  // const isActive = (item) => {
  //   return tab === item;
  // };
  return (
    <div className={styles["dropdown"]}>
      <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
        <ImStatsBars />
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

export default HistStats;
