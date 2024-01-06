import {
  // BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  BoltSlashIcon,
  GlobeAsiaAustraliaIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BoltSlashIcon,
    title: "Fossil fuel baseline",
    value: "25%",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last year",
    },
  },
  {
    color: "blue",
    icon: BoltSlashIcon,
    title: "Average HEP supply",
    value: "35%",
    footer: {
      color: "text-green-500",
      value: "+8%",
      label: "than last month",
    },
  },
  {
    color: "blue",
    icon: GlobeAsiaAustraliaIcon,
    title: "Current Emission levels",
    value: "150 (CO2e)",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "than last week",
    },
  },
  {
    color: "blue",
    icon: BoltIcon,
    title: "Charging stations",
    value: "322",
    footer: {
      color: "text-green-500",
      value: "+20%",
      label: "than last year",
    },
  },
  {
    color: "green",
    icon: BoltIcon,
    title: "Average Demand",
    value: "1.5 GW",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last year",
    },
  },
  {
    color: "blue",
    icon: BoltIcon,
    title: "Total renewable Supply",
    value: "550 MW",
    footer: {
      color: "text-green-500",
      value: "+11%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Today's Clients",
    value: "1,200",
    footer: {
      color: "text-green-500",
      value: "+43%",
      label: "than last month",
    },
  },
  {
    color: "pink",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "110",
    footer: {
      color: "text-green-500",
      value: "+40%",
      label: "than last week",
    },
  },

  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Energy Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
