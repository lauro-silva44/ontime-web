import { drivers } from "./driverTest4Dash";
import { routes } from "./routes";

export const userTickets = [
  {
    id: "010",
    dirver: drivers[0].fullName,
    minibus: drivers[0].minibus,
    route: routes[0],
    date: "14.01.13",
  },
  {
    id: "0102",
    dirver: drivers[1].fullName,
    minibus: drivers[1].minibus,
    route: routes[0],
    date: "14.01.02",
  },
  {
    id: "0104",
    dirver: drivers[2].fullName,
    minibus: drivers[2].minibus,
    route: routes[0],
    date: "14.01.24",
  },
  {
    id: "0103",
    dirver: drivers[1].fullName,
    minibus: drivers[1].minibus,
    route: routes[0],
    date: "14.01.12",
  },
];
