import RouteSvg from "../assets/bookings/route.svg";
import BusSvg from "../assets/bookings/bus.svg";
import DateSvg from "../assets/bookings/date.svg";
import DriverSvg from "../assets/bookings/driver.svg";
import QrSvg from "../assets/bookings/qr-code.svg";
import "../styles/tickes.scss";
import { RouteProps } from "./Reservation";

type BookingProps = {
  dirver: string;
  minibus: string;
  route: RouteProps;
  date: string;
};

type Props = {
  data: BookingProps;
};

export function Tickets({ data }: Props) {
  return (
    <div className="ticketContainer">
      <div className="qrCode">
        <img src={QrSvg} alt="" />
      </div>
      <div className="ticketInf">
        <div className="inf">
          <img src={RouteSvg} alt="" />
          <p>
            {data.route.startPoint} - {data.route.destination}
          </p>
        </div>
        <div className="inf">
          <img src={DriverSvg} alt="" />
          <p>{data.dirver}</p>
        </div>
        <div className="inf">
          <img src={DateSvg} alt="" />
          <p>{data.date}</p>
        </div>
        <div className="inf">
          <img src={BusSvg} alt="" />
          <p>{data.minibus}</p>
        </div>
      </div>
    </div>
  );
}
