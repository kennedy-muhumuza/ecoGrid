import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStep2 } from "../../store/actions/register";
import styles from "./Step2.module.css";
import toast from "react-hot-toast";
import { nextStep } from "../../store/actions/step";

export const Step2 = () => {
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("USA");
  const [userName, setUserName] = useState("");
  const step = useSelector((state) => state.step.step);

  const dispatch = useDispatch();
  const backHandler = () => {
    dispatch(nextStep(step - 1));
  };
  const nextHandler = async (e) => {
    e.preventDefault();
    if (!contact || !country || !userName) {
      toast.error("Empty fields⛔");

      return;
    }
    dispatch(updateStep2(contact, country, userName));

    dispatch(nextStep(step + 1));
  };
  return (
    <>
      <form className={styles["form_container"]}>
        <div className={styles["field_container"]}>
          <label>User name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles["input_field"]}
          />
        </div>
        <div className={styles["field_container"]}>
          <label>Contact</label>
          <input
            type="text"
            value={contact}
            className={styles["input_field"]}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={styles["field_container"]}>
          <label>Country</label>
          <select
            name="countries"
            id="countries"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={`${styles["custom-select"]} ${styles["input_field"]}`}
            required
          >
            <option value="USA">USA</option>
            <option value="UGANDA">UGANDA</option>
            <option value="KENYA">KENYA</option>
            <option value="TANZANIA">TANZANIA</option>
          </select>
        </div>

        <div className={styles["back"]}>
          <button onClick={nextHandler} className={styles["next_btn"]}>
            Next
          </button>
          <Link to="" onClick={backHandler}>
            Back
          </Link>
        </div>
      </form>
    </>
  );
};
