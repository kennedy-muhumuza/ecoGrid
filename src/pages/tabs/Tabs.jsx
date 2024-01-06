// import { NavLink } from "react-router-dom";
// import styles from "./Stations.module.css";
import { useState } from "react";
// import { Stations } from "./Stations";
import { Route, Routes } from "react-router-dom";
import { Details } from "../station_tabs/details/Details";
import { BillingPlan } from "../station_tabs/billing_plan/BillingPlan";
import { ChargingFeatures } from "../station_tabs/charging_features/ChargingFeatures";
import { ChargingProfile } from "../station_tabs/charging_profile/ChargingProfile";
import { Transactions } from "../station_tabs/transactions/Transactions";
import { Overview } from "../station_tabs/overview/Overview";
import { Location } from "../station_tabs/location/Location";
import { TabOptions } from "../TabOptions/TabOptions";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <TabOptions setActiveTab={setActiveTab} />
      <Routes>
        <Route path="overview">
          <Overview />
        </Route>
        <Route path="location">
          <Location />
        </Route>
        <Route path="details">
          <Details />
        </Route>
        <Route path="details">
          <Details />
        </Route>
        <Route path="billing-plan">
          <BillingPlan />
        </Route>
        <Route path="charging-features">
          <ChargingFeatures />
        </Route>
        <Route path="charging-profiles">
          <ChargingProfile />
        </Route>
        <Route path="transactions">
          <Transactions />
        </Route>
      </Routes>
      {activeTab === "overview" && <Overview />}
      {activeTab === "location" && <Location />}
      {activeTab === "details" && <Details />}
      {activeTab === "billing-plan" && <BillingPlan />}
      {activeTab === "charging-features" && <ChargingFeatures />}
      {activeTab === "charging-profiles" && <ChargingProfile />}
      {activeTab === "transactions" && <Transactions />}

      {/* <div>
        {activeTab === "Overview" && <Stations />}
        {activeTab === "Details" && <Stations />}
        {activeTab === "Location" && <Stations />}
        {activeTab === "Billing Plan" && <Stations />}
        {activeTab === "Charging Features" && <Stations />}
        {activeTab === "Charging Profile" && <Stations />}
        {activeTab === "Transactions" && <Stations />}
      </div> */}
    </div>
  );
};
