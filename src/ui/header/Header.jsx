import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles["header_container"]}>
      <div className={styles["logo"]}>
        <span className={styles["logo-container"]}>
          <img src="eg.jpg" alt="logo" className={styles["eg_logo"]} />
          <span className={styles["smart_container"]}>
            {/* <strong className={styles[["smart"]]}>SMART</strong> */}
            <strong className={styles[["eco_grid"]]}>
              <span className={styles["ecogrid"]}>
                SMART <br />
                <span className={styles["grid"]}>EcoGrid</span>
              </span>
            </strong>
          </span>
        </span>
        <div className={styles["header-buttons"]}>
          <button className={styles["login-btn"]}>Login</button>
          <button className={styles["sign-up-btn"]}>Sign up</button>
        </div>

        {/* <span className={styles["page-title"]}>Home page</span> */}
      </div>
    </header>
  );
};
