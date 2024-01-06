import { useSelector } from "react-redux";
import { MainTabOptions } from "../TabOptions/TabOptions";
import AdminPage from "../AdminPage/AdminPage";
import Dashboard from "../dashboard/Dashboard";
import styles from "./Main.module.css";

export const Main = () => {
  const activeMainTab = useSelector((state) => state.mainTabs.activeMainTab);

  return (
    <>
      <div className={styles["options"]}>
        <MainTabOptions />
      </div>
      <div>
        {activeMainTab === "current" && <AdminPage />}
        {activeMainTab === "predictions" && <Dashboard />}
      </div>
    </>
  );
};
