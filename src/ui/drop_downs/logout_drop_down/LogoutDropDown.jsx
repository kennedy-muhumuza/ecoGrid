import { useState } from "react";
import styles from "./LogoutDropDown.module.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { dropdownItems } from "../../../data/dropDownData";
import { TbLogout } from "react-icons/tb";
import { nextStep } from "../../../store/actions/step";
import { logOutToken } from "../../../store/actions/token";
import { logOut } from "../../../store/actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { playAudio } from "../../../store/actions/audio";

// import { useDispatch } from "react-redux";

// bi BiSolidDownArrow
// hi2 HiUser
// io IoIosNotification s

function LogoutDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(logOutToken());
    dispatch(nextStep(1));
    navigate("/", { replace: true });
    toast.success("Logged Out Successfully");
    dispatch(playAudio("loggedout.mp3"));
  };
  const clickHandler = (item) => {
    // setTab(item);
    console.log("clicked");
    // setClicked(true);
    // if (clicked && isActive(item)) {
    if (item === "My profile") {
      console.log("INDEX 0 CLICKED");
    } else if (item === "Notifications") {
      console.log("INDEX 1 CLICKED");
    } else if (item === "Recent activity") {
      console.log("INDEX 2 CLICKED");
    }
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //   const dropdownItems = ["My profile", "Notifications", "Recent activity"];
  // const isActive = (item) => {
  //   return tab === item;
  // };
  return (
    <div className={styles["dropdown"]}>
      <button onClick={toggleDropdown} className={styles["dropdown-button"]}>
        <BiSolidDownArrow />
      </button>
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {dropdownItems.map((item, index) => (
            <li key={index} onClick={() => clickHandler(item)}>
              <Link to={item.link} className={styles["dropdown-item"]}>
                {item.icon} {item.linkName}
              </Link>
            </li>
          ))}
          <li className={styles["logout_container"]} onClick={logOutHandler}>
            <TbLogout /> 
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}

export default LogoutDropDown;
