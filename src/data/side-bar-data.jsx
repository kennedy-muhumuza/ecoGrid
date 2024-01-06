import { AiOutlineDatabase } from "react-icons/ai";
import { LiaChargingStationSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { SiGithubactions } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
// io IoIosArrowDown
// io IoIosArrowUp
// import { GrActions } from "react-icons/gr";
// ai AiOutlineDatabase
// si SiGithubactions
// IoNotificationsOutline
// CgProfile
// GrActions
// lia LiaChargingStationSolid
// md MdManageAccounts
// io5 IoSettingsOutline
export const sideBarData = [
  {
    id: uuidv4(),
    category: "Dashboard",
    icon: <HiOutlineHome />,
    linkName: "dashboard",
  },
  {
    id: uuidv4(),
    category: "Data",
    icon: <AiOutlineDatabase />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    children: [
      { linkName: "historical-data", label: "Historical data" },
      { linkName: "real-time-data", label: "Real time data" },
      { linkName: "predictions", label: "Predictions" },
    ],
  },
  {
    id: uuidv4(),
    category: "Stations",
    icon: <LiaChargingStationSolid />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    children: [
      { linkName: "management", label: "Management" },
      { linkName: "charging-profiles", label: "Charging profiles" },
    ],
  },
  {
    id: uuidv4(),
    category: "Users",
    icon: <HiOutlineUsers />,
    linkName: "users",
  },
  {
    id: uuidv4(),
    category: "Actions",
    icon: <SiGithubactions />,
    down: <IoIosArrowDown />,
    up: <IoIosArrowUp />,
    children: [
      { linkName: "generation", label: "Power generation" },
      { linkName: "distribution", label: "Power distribution" },
      { linkName: "usage", label: "Usage" },
    ],
  },
  {
    id: uuidv4(),
    category: "Settings",
    icon: <IoSettingsOutline />,
    linkName: "settings",
  },
];
