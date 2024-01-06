import { useSelector } from "react-redux";
// import { TabOptions } from "../TabOptions/TabOptions";
import { BillingPlan } from "../station_tabs/billing_plan/BillingPlan";
import { ChargingFeatures } from "../station_tabs/charging_features/ChargingFeatures";
import { Details } from "../station_tabs/details/Details";
import { Location } from "../station_tabs/location/Location";
import { Overview } from "../station_tabs/overview/Overview";
import { Transactions } from "../station_tabs/transactions/Transactions";
import { SecurityReport } from "../station_tabs/security_report/SecurityReport";

export const Stations = () => {
  const activeTab = useSelector((state) => state.tabs.activeTab);

  return (
    <>
      {/* <TabOptions /> */}
      {activeTab === "overview" && <Overview />}
      {activeTab === "location" && <Location />}
      {activeTab === "details" && <Details />}
      {activeTab === "transactions" && <Transactions />}
      {activeTab === "billing-plan" && <BillingPlan />}
      {activeTab === "charging-features" && <ChargingFeatures />}
      {activeTab === "security-report" && <SecurityReport />}
    </>
  );
};
