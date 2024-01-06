import { Typography } from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/outline";
// import { StatisticsCard } from "@/widgets/cards";
// import { StatisticsChart } from "@/widgets/charts";
import { StatisticsChart } from "../../widgets/charts/statistics-chart";

// import {
//   statisticsCardsData,
//   statisticsChartsData,
//   projectsTableData,
//   ordersOverviewData,
// } from "@/data";

import statisticsChartsDataMain from "../../data/statistics-charts-data";
import Chat from "../chat/Chat";
// import { AdminHeader } from "../../components/adminHeader/AdminHeader";
// import { Footer } from "../../components/UI/footer/Footer";
// import styles from "./AdminPage.module.css";
export function Dashboard() {
  return (
    <div className="mt-0 p-8 grid gap-16 ">
      {/* <LoggedHeader /> */}
      {/* <AdminHeader /> */}
      {/* <div className="mb-12 grid gap-y-10 gap-x-0 md:grid-cols-2 xl:grid-cols-3 ">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-18 h-18  text-white",
              // className={styles["icon"]},
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600 ">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div> */}
      {/* --------------------------------------------------------this below-------------------------- */}
      {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-3 xl:grid-cols-3 ">
        {statisticsChartsDataMain.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600 "
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
          </div>*/}
      <div className="h-12 w-12">
        <Chat />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
