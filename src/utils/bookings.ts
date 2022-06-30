import { drivers } from "./driverTest4Dash";
import { passengers } from "./passengers";
import { routes } from "./routes";

export const bookings = [
  {
    passenger: passengers[0].name,
    passengerPhoto: passengers[0].photoPath,
    dirver: drivers[0].fullName,
    dirverPhoto: drivers[0].photoPath,
    route: routes[0],
    date: "14.01.22",
  },
  {
    passenger: passengers[1].name,
    passengerPhoto: passengers[1].photoPath,
    dirver: drivers[1].fullName,
    dirverPhoto: drivers[1].photoPath,
    route: routes[1],
    date: "12.01.22",
  },
  {
    passenger: passengers[2].name,
    passengerPhoto: passengers[2].photoPath,
    dirver: drivers[2].fullName,
    dirverPhoto: drivers[2].photoPath,
    route: routes[2],
    date: "15.01.22",
  },
  {
    passenger: passengers[3].name,
    passengerPhoto: passengers[3].photoPath,
    dirver: drivers[2].fullName,
    dirverPhoto: drivers[2].photoPath,
    route: routes[1],
    date: "16.01.22",
  },
  {
    passenger: passengers[4].name,
    passengerPhoto: passengers[4].photoPath,
    dirver: drivers[2].fullName,
    dirverPhoto: drivers[2].photoPath,
    route: routes[0],
    date: "12.01.22",
  },
  {
    passenger: passengers[6].name,
    passengerPhoto: passengers[6].photoPath,
    dirver: drivers[1].fullName,
    dirverPhoto: drivers[1].photoPath,
    route: routes[0],
    date: "09.01.22",
  },
  {
    passenger: passengers[7].name,
    passengerPhoto: passengers[7].photoPath,
    dirver: drivers[0].fullName,
    dirverPhoto: drivers[0].photoPath,
    route: routes[0],
    date: "09.01.22",
  },
  {
    passenger: passengers[8].name,
    passengerPhoto: passengers[8].photoPath,
    dirver: drivers[1].fullName,
    dirverPhoto: drivers[1].photoPath,
    route: routes[0],
    date: "09.01.22",
  },
  {
    passenger: passengers[9].name,
    passengerPhoto: passengers[9].photoPath,
    dirver: drivers[0].fullName,
    dirverPhoto: drivers[0].photoPath,
    route: routes[0],
    date: "09.01.22",
  },
];
