import { seats } from "../utils/seats";
import { Seats } from "./Seats";
import "../styles/carMap.scss";
import WheelSvg from "../assets/driverAssets/sterry-wheel 2.svg";

type seatProps = {
  id: string;
  booked: boolean;
};

type Props = {
  data: seatProps[] | undefined;
};

export function CarMap({ data }: Props) {
  return (
    <div className="carMapContainer">
      <div className="infContainer">
        <div className="infoPick">
          <div className="infoBox" />
          <p>Booked</p>
        </div>
        <div className="infoPick">
          <div className="infoBox" style={{ backgroundColor: "#F24A72" }} />
          <p>Selected</p>
        </div>
        <div className="infoPick">
          <div className="infoBox" style={{ backgroundColor: "#fff" }} />
          <p>Empty</p>
        </div>
      </div>
      <div className="seats">
        <div className="driverSeat">
          <img src={WheelSvg} alt="driverSeat" color={"#005792"} />
        </div>
        {data?.map((seat) => (
          <Seats data={seat} />
        ))}
      </div>
    </div>
  );
}
