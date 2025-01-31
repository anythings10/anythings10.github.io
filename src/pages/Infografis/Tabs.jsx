import { Link, useLocation } from "react-router-dom";
import {
  UserGroupIcon,
  HeartIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  ChartBarIcon,
} from "@heroicons/react/16/solid";
const Tabs = () => {
  const location = useLocation();

  const tabs = [
    { id: 1, path: "/infografis", name: "Penduduk", icon: UserGroupIcon },
    { id: 2, path: "/infografis/stunting", name: "Stunting", icon: HeartIcon },
    {
      id: 3,
      path: "/infografis/apbdes",
      name: "APBDes",
      icon: CurrencyDollarIcon,
    },
    {
      id: 4,
      path: "/infografis/bansos",
      name: "Bansos",
      icon: PresentationChartLineIcon,
    },
    { id: 5, path: "/infografis/idm", name: "IDM", icon: ChartBarIcon },
  ];

  return (
    <div className="container mx-auto flex-1">
      <div className="flex flex-wrap justify-between border-b-2 border-gray-400">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`p-3 text-md flex items-center gap-2 ${
                isActive ? "border-b-4 border-indigo-500 text-indigo-500" : ""
              }`}>
              <Icon className="w-5 h-5" />
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
