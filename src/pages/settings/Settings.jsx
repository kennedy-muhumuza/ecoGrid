import { settingOptions } from "../../data/settings-data";
import styles from "./Settings.module.css";
export const Settings = () => {
  // const settingOptions = ["Privacy", "Notifications", "Baselines", "Actions"];
  return (
    <>
      <p className={styles["settings_header"]}>Settings</p>
      <div className={styles["settings_container"]}>
        <ul className={styles["setting_options"]}>
          {settingOptions.map((item, index) => (
            <li key={index} className={styles["setting_option_list"]}>
              <strong>{item.linkName}</strong>
            </li>
          ))}
        </ul>

        <div className={styles["details_container"]}>
          <p className={styles["setting_header"]}>Setting Option</p>
        </div>
      </div>
    </>
  );
};
