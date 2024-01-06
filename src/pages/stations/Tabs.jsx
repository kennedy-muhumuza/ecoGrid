// import { NavLink } from "react-router-dom";
import styles from "./Stations.module.css";
import { useState } from "react";
import { Stations } from "./Stations";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div>
      <ul className={styles["stations_options"]}>
        <li onClick={setActiveTab("Overview")}>Overview</li>
        <li onClick={setActiveTab("Details")}>Details</li>
        <li onClick={setActiveTab("Location")}>Location</li>
        <li onClick={setActiveTab("Billing Plan")}>Billing Plan</li>
        <li onClick={setActiveTab("Charging Features")}>Charging Features</li>
        <li onClick={setActiveTab("Charging Profile")}>Charging Profile</li>
        <li onClick={setActiveTab("Transactions")}>Transactions</li>
      </ul>
      <div>
        {activeTab === "Overview" && <Stations />}
        {activeTab === "Details" && <Stations />}
        {activeTab === "Location" && <Stations />}
        {activeTab === "Billing Plan" && <Stations />}
        {activeTab === "Charging Features" && <Stations />}
        {activeTab === "Charging Profile" && <Stations />}
        {activeTab === "Transactions" && <Stations />}
      </div>
    </div>
  );
};
