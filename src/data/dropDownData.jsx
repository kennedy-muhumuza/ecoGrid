import { HiUser } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
// import { MdRecentActors } from "react-icons/md";
// hi2 HiUser
// io IoIosNotifications
// md MdRecentActors
// io5 IoSettingsSharp
export const dropdownItems = [
  {
    icon: <HiUser />,
    linkName: "My Profile",
    link: "profile",
  },
  {
    icon: <IoIosNotifications />,
    linkName: "Notifications",
    link: "notification",
  },
  {
    icon: <IoSettingsSharp />,
    linkName: "Settings",
    link: "settings",
  },
];
