import { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { playAudio } from "../../store/actions/audio";
import { useDispatch } from "react-redux";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // const [clicked, setClicked] = useState(false);
  // const [tab, setTab] = useState("");

  const dispatch = useDispatch();

  const clickHandler = (item) => {
    // setTab(item);
    console.log("clicked");
    // setClicked(true);
    // if (clicked && isActive(item)) {
    if (item === "Renewable PG") {
      dispatch(playAudio("/renewable3.mp3"));

      console.log("INDEX 0 CLICKED");
    } else if (item === "Weather data") {
      dispatch(playAudio("/weather.mp3"));

      console.log("INDEX 1 CLICKED");
    } else if (item === "Smart meters") {
      dispatch(playAudio("/meters.mp3"));

      console.log("INDEX 2 CLICKED");
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
        Ask AI
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

export default DropDownMenu;
