import { routes } from "./routes";
import Shikamaru from "../assets/dash-board/driver/shikamaru.png";
import Gon from "../assets/dash-board/driver/gon-keits.png";
import Kilua from "../assets/dash-board/driver/killua.png";

export const drivers = [
  {
    id: "1",
    fullName: "Shikamaru Abdou",
    photoPath: Shikamaru,
    minibus: "ST-00-2X",
    route: routes[2],
  },
  {
    id: "2",
    fullName: "Gon Keits",
    minibus: "ST-21-CL",
    photoPath: Gon,
    route: routes[2],
  },
  {
    id: "3",
    fullName: "Killua Abdalla",
    minibus: "ST-00-CX",
    photoPath: Kilua,
    route: routes[2],
  },
];
