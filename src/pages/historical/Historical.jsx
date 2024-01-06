import { useSelector } from "react-redux";
import { HistTabOptions } from "../TabOptions/TabOptions";
import { Renewables } from "../historical_tabs/renewables/Renewables";
import { Weather } from "../historical_tabs/weather/Weather";
import DropDownMenu from "../../components/drop_down/DropDownMenu";
import { SmartMeters } from "../historical_tabs/smart_meters/SmartMeters";
import styles from "./Historical.module.css";
import HistStats from "../../ui/drop_downs/hist_stats/HistStats";
import { SmartMetersStats } from "../hist_stats/smart_meters/SmartMetersStats";
import { RenewableStats } from "../hist_stats/renewable_stats/RenewableStats";
import { WeatherStats } from "../hist_stats/weather_stats/WeatherStats";
import { Overview } from "../hist_stats/overview/Overview";
export const Historical = () => {
  const activeHistTab = useSelector((state) => state.histTabs.activeHistTab);
  return (
    <>
      <div className={styles["hist-header"]}>
        <HistTabOptions />
        <span>
          Stats: &nbsp;
          <HistStats />
        </span>
        <DropDownMenu />
      </div>
      {activeHistTab === "renewables" && <Renewables />}
      {activeHistTab === "weather" && <Weather />}
      {activeHistTab === "smart-meters" && <SmartMeters />}
      {activeHistTab === "smart-meters-stats" && <SmartMetersStats />}
      {activeHistTab === "renewables-stats" && <RenewableStats />}
      {activeHistTab === "weather-stats" && <WeatherStats />}
      {activeHistTab === "overview" && <Overview />}
    </>
  );
};
