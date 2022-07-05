import { routes } from "./routes";
import Shikamaru from "../assets/dash-board/driver/shikamaru.png";
import Gon from "../assets/dash-board/driver/gon-keits.png";
import Kilua from "../assets/dash-board/driver/killua.png";
import Luffy from "../assets/dash-board/driver/luffy.png";
import Midoriya from "../assets/dash-board/driver/midoriya.png";
import Kawaki from "../assets/dash-board/driver/kawaki.png";

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
  {
    id: "4",
    fullName: "Midoriya Cabral",
    minibus: "ST-10-XK",
    photoPath: Midoriya,
    route: routes[2],
  },
  {
    id: "5",
    fullName: "Luffy de Gato",
    minibus: "ST-05-SI",
    photoPath: Luffy,
    route: routes[2],
  },
  {
    id: "6",
    fullName: "Kawaki Pereira",
    minibus: "ST-02-DC",
    photoPath: Kawaki,
    route: routes[2],
  },
];
